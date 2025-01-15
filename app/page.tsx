import { logout } from "./logout/action";

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { submitAttendence } from "@/utils/redis/actions";
import SubmitButton from "./submitButton";
import { getRole } from "@/utils/prisma/profiles/actions";
import { attendenceGETTest } from './test/action';


export default async function Home() {
  const supabase = await createClient()

  async function submit() {
    attendenceGETTest();
  }

/*   async function getRole(id: string): Promise<string> {
  
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', id)

    if(profiles){
      return profiles[0].role;
    }
    return ''
    } */

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const role = await getRole(data.user.id)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <button onClick={logout}>logout</button>

      {/* TODO: FORM SHOULD ONLY PASS TRUE RECORDS */}
      <SubmitButton l_id="L_1"/>
      
      
      
      <p>Hello {role}</p>
    </div>
  );
  
}