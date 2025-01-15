import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function markAttendence(data: {id: number}[], cId: string, lId: string) {
    //update classes attended; add new class data; createmany
    data.forEach(async record => {
        const oldRecord = await prisma.ATTENDENCE.findUnique({
            where : {
                STUDENT_ID: record.id,
                COURSE_ID: cId
            },
            select : {
                CLASSES_ATTENDED: true
            }
        })
        console.log(oldRecord.CLASSES_ATTENDED['lId']);
        /* const newRecord = [...oldRecord.CLASSES_ATTENDED[cId], lId]
        const records = await prisma.ATTENDENCE.update({
            where: {
                STUDENT_ID: record.id,
                COURSE_ID: cId
            },
            data: {
                CLASSES_ATTENDED : {cId: newRecord}
            }
        }) */
    });

}