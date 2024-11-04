document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const content = document.querySelector('.bobster');
        content.classList.add('visible');}, 30);
});

let paragraphs = {western: "Willy \"The Spicy\" Gyros 1887-ben lett a vadnyugat réme, egy gyros pitában harcolt az éhséggel, miközben fűszeres falatokkal csábította a betérőket.",
                dino: "Ahogy látjuk az ősember már korábban, az űrlények érkezése előtt találkozott a gyrossokkal, az itt látható lelet valószínűleg a híres Gyrossaurus az első feljegyzésekbű.",
                ww2: "A képen Hans von HADZSMA-t láthatjuk aki az 1484-as gyros háborúk hősies hússütője volt. Hogy miért volt szoknyába azt az isten tudja",
                knight: "Ezen a képen a híres várvédőt Sir Reginal the XVII látjuk, mert a korábbiakat megették a törökök."
}

const popup = document.getElementById("popup");

speekingBox =(text, color) =>
{
    popup.style.backgroundColor = color
    popup.innerHTML = `<div><p>${paragraphs[text]}</p><button class=close onclick={speekinBoxClose()}>Close</button></div>`;
    popup.classList.remove("hidden");
    popup.classList.add("appear")
}

speekinBoxClose = () =>
{
    popup.classList.add("hidden");
    popup.classList.remove("appear")
}