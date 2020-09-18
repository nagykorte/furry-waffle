window.addEventListener("load", () => {
    let mainButtons = document.getElementsByClassName("mainButton");
    console.log(mainButtons);
    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons.addEventListener("mouseover", () => {
            alert("lels");
        });
    }
});
