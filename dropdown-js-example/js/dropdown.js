function dropdown(){
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var message = document.getElementById("message");
    
    button.onclick = function(){
        if(content.classList.contains("active")){
            //revert
            content.classList.toggle("active");
            message.classList.toggle("active");
            button.innerHTML = "Show more";
        } else {
            //make fun of user
            content.classList.toggle("active");
            message.classList.toggle("active");
            button.innerHTML = "wait...";
        }
    };
}

window.onload = function(){
    dropdown();
};