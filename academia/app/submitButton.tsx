'use client'
import { markAttendence } from "@/utils/prisma/attendence/actions";
import { submitAttendence } from "@/utils/redis/actions";
import { attendenceGETTest } from "./test/action";
//import { useState } from "react";

type SubmitButtonProps = {
    l_id: string
}

export default function SubmitButton(param: SubmitButtonProps) {
  //const [loading, setLoading] = useState(false);

  const submit = async () => {
    //setLoading(true);
    try{
        const data:{id: number}[] = [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4}
        ]
        await markAttendence(data, 'CS101', '2025-01-21')
    } catch(error) {
        console.log(error);
    } //finally {
       // setLoading(false);
    //}
  };

  const getAttendence = async () => {
    await attendenceGETTest();
  }

  return (
    <div>
      <button onClick={getAttendence} >
        submit
      </button>
    </div>
  );
}

