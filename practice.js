let options = {
    method: "POST",
    header: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'Krishna',
        body: 'bhai',
        userId: 1,
    }),
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
.then((response)=>{
    response.json
}).then((json)=>{console.log(json)})