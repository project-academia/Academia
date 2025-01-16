import { logout } from "./logout/action";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  // Function to fetch the user's role
  async function getRole(id: string): Promise<string> {
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", id);

    if (error) {
      console.error("Error fetching role:", error.message);
      return "";
    }

    return profiles?.[0]?.role || "";
  }

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login"); 
  }

  const role = await getRole(data.user.id);

  if (role === "teacher") {
    redirect("/teacher/dashboard");
  } else if (role === "student") {
    redirect("/student/dashboard");
  } else {
    redirect("/error"); 
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form action={logout}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
          </button>
      </form>
    </div>
  );
}

