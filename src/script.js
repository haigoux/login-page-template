

function login(){
    username_entry = document.getElementById("username");
    password_entry = document.getElementById("password");
    error = document.getElementsByClassName("error")[0]
    username = username_entry.value;
    password = password_entry.value;


    username_entry.disabled = true;
    password_entry.disabled = true;

    //  make request here, change condition for actual login verificaion
    
    if(username !="admin"){

        username_entry.disabled = false;
        password_entry.disabled = false;
        error.style.color = "red";
        
    }else{
        error.style.color = "transparent";
        document.getElementById('overlay').style.display = "block";
        setTimeout(function() {
            document.getElementById('overlay').style.display = "none"
            document.getElementById("success").style.display = "block";
            document.getElementById('login-main').style.display = "none";
        }, 2500)
    }
}

$(document).ready(function() {
    $("#loginbtn").click(function(){
        login()
    }); 
});
