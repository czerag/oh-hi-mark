function dropdown(){
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var message = document.getElementById("message");
    

    button.onclick = function(){
        function reset() {
            message.classList.add("active"); 
            button.innerHTML = "Show more"; 
            content.classList.remove("active");   
        }
        if(content.classList.contains("active")){
            //do nothing
        } else {
            //make fun of user
            message.classList.remove("active");
            content.classList.add("active");
            button.innerHTML = "wait...";
            var timer = setTimeout( reset, 5000);
            
        }
    }
}

window.onload = function(){
    dropdown();
};