const kerdo = () => {
    let divs = document.querySelectorAll("#kerdo form .kerdes");
    let form = document.getElementById("form")
    let suma = 0

    if (check(divs)) {
        for(let element of divs) {
            suma += kiert(element.id)
        }
        kiertekeles.hidden = false
        submit.innerText = "újrapróbálás"
        submit.setAttribute("onclick", "location.reload()")
        form.hidden = true
        if (suma < sum * 0.3) { 
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Mindig megbizható vagy, és mindig jólesel, ha hajnalban fut össze veled az ember, ha egy étteremben, a legjobb vagy."
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Jó kis csipos"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/csipos.jpg")
        }else if (suma > 0.3 * sum && suma < sum * 0.4) {
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Hatalmas gyros vagy, belőled mindenki jól fog lakni, habár árad nagyon borsos lesz, de meg fogja érni."
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Óriás gyros"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/óriás.jpg")
        }else if (suma > 0.4 * sum && suma < sum * 0.5) {
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Te nagyon sokba fogsz kerülni annak aki téged választ, és valószínűleg nem is leszel elég, de az a pár pillanat minden kincsel fel fog érni."
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Luxus gyros"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/fancy-gyros.png")
        }else if (suma > 0.5 * sum && suma < sum * 0.6) {
                kiertekeles.getElementsByTagName("p")[0].innerHTML = "Lehet hogy nem te vagy a legszebb gyros a vidéken, de szeretettel készültél, és szeretettel leszel is elfogyasztva, akármilyen vagy."
                kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Kolis gyros"
                kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/kolis.png")
        }else if (suma > 0.6 * sum && suma < sum * 0.7) {
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Nem vagy egy teljes gyros, sőt, gyrosnak nem is lehetne nevezni, de attól még finom vagy, és ha találsz valakit akivel kiegészíthetnétek egymást (pl egy vegán gyros) akkor ténylegesen kiteljesedhetnél"
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Gyros hús"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/gyroshús.jpg")
        }else if (suma > 0.7 * sum && suma < sum * 0.8) {
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "A gyrosok sorából.... igen kilógsz, de jó úton haladsz ahhoz, hogy talán elfogadható étek légy. Csak el kell hanyagolnod pár rossz szokást. Mint hogy kutyábólj készülj"
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Kínai gyros"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/kutyagyros.png")
        }else if (suma > 0.8 * sum && suma < sum * 0.9) {
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Te vagy a látszat csal deffiníciója. Elhiheted másokkal, hogy milyen finom vagy, ami igaz, viszont akik nem téged keresnek, azoknak hatalmas csalódás leszel. De akik téged keresnek azoknak örökké a szívébe fogsz élni."
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Vegán gyros"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/vegan.png")
        
        }else{
            kiertekeles.getElementsByTagName("p")[0].innerHTML = "Mindig a legkésőbb érkezel, de sohasem okozol csalódást (akkor). A másnap viszont már elrepül a varázsod"
            kiertekeles.getElementsByTagName("h3")[0].innerHTML = "Aluljárós"
            kiertekeles.getElementsByTagName("img")[0].setAttribute("src", "assets/gyroses/patkany.jpg")
        }
    }else {
        console.log("Valami nincs kitöltve")
    }
}




const kiert = (name) => {
    const from = document.getElementsByName(name);
    const container = document.getElementById(name);
    let chosen = null;

    container.classList.remove('error');

    for (const valaszok of from) {

        if (valaszok.type == "checkbox") {
            console.log("Checkmrk")
            chosen = 0
            break;
        }
        if (valaszok.checked && valaszok.type != "checkbox") {
            chosen = valaszok.value;
            break;
        }
    }

    if(chosen == null) {
        container.classList.add("error")
        return -1
    }

    return parseInt(chosen);
}

const check = (array) =>{
    let good = true
    for(let element of array) {
        if (kiert(element.id) < 0) {
            good = false
        }
    }

    return good
}

let inputs = document.querySelectorAll("#kerdo form .kerdes label input");
let divs = document.querySelectorAll("#kerdo form .kerdes");
let kiertekeles = document.getElementById("kiertekeles");
let submit = document.getElementById("submit");

let max = []
let sum = 0

for (let div of divs) {
    for(let input of inputs){
        if(div.id == input.name){
            if(input.type == "checkbox") {
                sum += Number(input.value);
            }else{
                max.push(Number(input.value))
            }
        }
    }
    let maxElement = Math.max(...max);
    if (max.length > 0) {
        let maxElement = Math.max(...max);
        sum += maxElement;
    }
    max = []
}

console.log(sum);