document.addEventListener("DOMContentLoaded",function(){

   

    document.getElementById("idbtn").onclick = function(){

        let name = document.getElementById("nameid").value;
        let pw = document.getElementById("pwid").value;

        if(localStorage.getItem("name") == name && localStorage.getItem("pw") == pw){
            window.location = "final.html";
            console.log("right")
        }
        else{
            document.getElementById("wrongps").innerText = "Wrong User or password";
        }

    }

    



})