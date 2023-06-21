let divContainer = document.querySelector(".container");
let btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 700);
        btn.style.position = "absolute";
        btn.style.left = x+ "px";
        btn.style.top = y + "px";
});