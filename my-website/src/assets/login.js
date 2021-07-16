function auto(){
    window.onload=function(){
        document.getElementById("1").click();
    }
}
function home(){
    var doc = document.getElementById("1");
    if(doc){
        document.getElementById("home").hidden = false;
        document.getElementById("about").hidden = true;
        document.getElementById("interest").hidden = true;
        document.getElementById("resume").hidden = true;
        document.getElementById("suggestions").hidden = true;
        document.getElementById("opinion").hidden = true;
    }
}
function abt(){
    var doc = document.getElementById("2");
    if(doc){
        document.getElementById("home").hidden = true;
        document.getElementById("about").hidden = false;
        document.getElementById("interest").hidden = true;
        document.getElementById("resume").hidden = true;
        document.getElementById("suggestions").hidden = true;
        document.getElementById("opinion").hidden = true;
    }
}
function int(){
    var doc = document.getElementById("3");
    if(doc){
        document.getElementById("home").hidden = true;
        document.getElementById("about").hidden = true;
        document.getElementById("interest").hidden = false;
        document.getElementById("resume").hidden = true;
        document.getElementById("suggestions").hidden = true;
        document.getElementById("opinion").hidden = true;
    }
}
function res(){
    var doc = document.getElementById("4");
    if(doc){
        document.getElementById("home").hidden = true;
        document.getElementById("about").hidden = true;
        document.getElementById("interest").hidden = true;
        document.getElementById("resume").hidden = false;
        document.getElementById("suggestions").hidden = true;
        document.getElementById("opinion").hidden = true;
    }
}
function sugg(){
    var doc = document.getElementById("5");
    if(doc){
        document.getElementById("home").hidden = true;
        document.getElementById("about").hidden = true;
        document.getElementById("interest").hidden = true;
        document.getElementById("resume").hidden = true;
        document.getElementById("suggestions").hidden = false;
        document.getElementById("opinion").hidden = true;
    }
}
function op(){
    var doc = document.getElementById("6");
    if(doc){
        document.getElementById("home").hidden = true;
        document.getElementById("about").hidden = true;
        document.getElementById("interest").hidden = true;
        document.getElementById("resume").hidden = true;
        document.getElementById("suggestions").hidden = true;
        document.getElementById("opinion").hidden = false;
    }
}
function comment() {
    let x = Date() + document.getElementById("name").value + "<br>" + document.getElementById("comment").value;
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "<br>" + x;
    this.http.post('http://localhost/script.php', x);
}
  