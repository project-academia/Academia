import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const record = await returnSingleRecord(body.sId, body.cId);
    const json = {
        'record': record,
    }
    return NextResponse.json(json);
}

const prisma = new PrismaClient();

export async function returnSingleRecord (sId: number, cId: string) {
    const record = await prisma.ATTENDANCE.findMany({
        where: {
            STUDENT_ID: sId,
            COURSE_ID: cId
        },
    });
    console.log(record)
    return record[0].CLASSES_ATTENDED.lid;
}

export async function markAttendence(data: {id: number}[], cId: string, lId: string) {
    const listOfRecords: {}[] = [];
    
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
        
        const newRecord = [...oldRecord.CLASSES_ATTENDED[cId], lId]
        const records = await prisma.ATTENDENCE.update({
            where: {
                STUDENT_ID: record.id,
                COURSE_ID: cId
            },
            data: {
                CLASSES_ATTENDED : {cId: newRecord}
            }
        })
    });
}