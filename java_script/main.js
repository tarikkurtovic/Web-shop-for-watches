document.getElementById("light").addEventListener("click",()=>{
    document.body.classList.remove("dark");
});
document.getElementById("dark").addEventListener("click",()=>{
    document.body.classList.add("dark");
});

function checkLogin(){
    const username = localStorage.getItem("username");
    if(!username){
        window.location.hash = "#/login";
    }
}


function handleLogin(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
}

fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
        const user = users.find((u) => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem("username", user.username);
            window.location.hash = "#/main";
        } else {
            alert("Invalid username or password.");
        }
    });

    function handleLogout() {
        localStorage.removeItem("username");
        window.location.hash = "#/login";
    }

$(document).ready(function (){
    var app=$.spapp({
        defaultView: "#/main",
        templateDir: "./"
    });

    app.route({
    view:"main",
    load:"main.html"
    });

    app.route({
    view:"watches",
    load:"watches.html",
    onLoad: function () {
        console.log("Loaded: watches.html");
    }
    });

    app.route({
    view:"location",
    load:"location.html"
    });

    app.route({
    view:"orders",
    load:"orders.html"
    });

    app.route({
        view: "login",
        load: "login.html"
    });

    app.route({
        view: "signup",
        load: "signup.html"
    });

    app.run();
});