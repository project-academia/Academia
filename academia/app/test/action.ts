export async function attendenceGETTest() {
    const body = {
        'sId' : 5,
        'cId' : 'CS101'
    }

    await fetch('http://localhost:3000/api/prisma', {
        method : 'POST',
        headers : {
            'Content-Type': 'application-json'
        },
        body : JSON.stringify(body)
    }).then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}