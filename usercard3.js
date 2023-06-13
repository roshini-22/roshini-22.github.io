let ArijitSingh1={
    imgurl: "https://pbs.twimg.com/media/FxUwi8GWYAItCTf?format=jpg&name=900x900",
    name: "Arijit Singh",
    Description: "Singer"
}




let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name=data.results[0].name.first + " " + data.results[0].name.last
        displayobject.imageurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("singer-img").src = displayobject.imgurl;
        document.getElementById("singer-name").innerHTML = displayobject.name;
        document.getElementById("singer-description").innerHTML = displayobject.Description;
    })
    
}