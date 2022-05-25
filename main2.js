const xhttp = new XMLHttpRequest;
let ip = "http://192.168.1.20/";
function status(){
    xhttp.onload = function(){
    document.getElementById("status").innerHTML = this.responseText;

}
xhttp.open("GET",ip);
xhttp.send();
}
setInterval(function(){
status();
},1)