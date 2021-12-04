var request = new XMLHttpRequest();
//request.open('GET','http://api.countrylayer.com/v2/lang/ita?access_key=affb17e4e52e5b4b58ed38b742ceb54c');
request.open('GET','http://api.countrylayer.com/v2/currency/inr?access_key=affb17e4e52e5b4b58ed38b742ceb54c');
request.send();
request.onload = function()
{
    var data=JSON.parse(this.response);
    for(let i=0; i<data.length; i++)
    console.log(data[i]);
 
}

//filters=name;capital;currencies