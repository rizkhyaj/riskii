const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    music.play();

    setTimeout(() => {

        window.location.href = "game.html";

    }, 500);

});


function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML =
        Math.random() > 0.5 ? "🌸" : "💛";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    },12000);
}

setInterval(createPetal,600);
