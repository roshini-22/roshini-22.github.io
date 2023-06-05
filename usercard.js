let ArijitSingh1={
    imgurl: "https://pbs.twimg.com/media/FxUwi8GWYAItCTf?format=jpg&name=900x900",
    name: "Arijit Singh",
    Description: "Singer"
}

let ArijitSingh2={
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8d42eTFSg6ZJm8yluVzlLsCn6hOH8kQuLBw&usqp=CAU",
    name: "Arijit",
    Description: "Indian Singer"

}

let isArijitSingh = true;
let displayobject;
let flipdata = function(){
    if(isArijitSingh == true){
        displayobject = ArijitSingh2;
        isArijitSingh = false;
    }
    else{
        displayobject = ArijitSingh1;
        isArijitSingh1 = true;
    }
    document.getElementById("gandhi-img").src = displayobject.imgurl;
    document.getElementById("mahatma-name").innerHTML = displayobject.name;
    document.getElementById("mahatma-description").innerHTML = displayobject.Description;
}