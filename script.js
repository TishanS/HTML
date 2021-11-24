let req = new XMLHttpRequest(); // New object
req.open('GET','https://jsonplaceholder.typicode.com/posts');
req.send();
req.onload = function()
{
    let details = JSON.parse(this.response);

    for(let i=0; i<details.length; i++)
    {
        console.log(details[i].id);    
    }
}
