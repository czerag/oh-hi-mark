var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
    if(content.classList.contains("active")){
        //revert
        content.classList.toggle("active");
        button.innerHTML = "Show more";
    } else {
        //make fun of user
        content.classList.toggle("active");
        button.innerHTML = "Skip";
    }
};