'use server'
export async function submitAttendence(lecture_id: string) {
    const attendenceRecord: {id: number}[] = [ //RECORD SHOULD ONLY BE OF STATUS TRUE
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6}
    ];
    const jsonAttendenceRecord = JSON.stringify(attendenceRecord);
    const redisClient = require('./client');

    // Example usage:
    async function cacheExample() {
        await redisClient.set(lecture_id, jsonAttendenceRecord);
        const value = await redisClient.get(lecture_id);
        console.log('Cached Value:', value);
    }

    cacheExample();
  }

