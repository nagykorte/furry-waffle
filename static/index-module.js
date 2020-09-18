window.addEventListener("load", () => {
    let mainButtons = document.getElementsByClassName("mainButton");
    console.log("Main buttons: ");
    console.log(mainButtons);
    let boton = document.getElementById("asd");
    console.log("boton: ");
    console.log(boton);
    boton.addEventListener("mouseover", () => {
        alert("lol");
    })
});
