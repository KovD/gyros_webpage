const kerdo = () => {

    let divs = document.querySelectorAll("#kerdo form .kerdes");
    let sum = 0

    if (check(divs)) {
        for(let element of divs) {
            sum += kiert(element.id)
        }
        console.log("Kiválasztott válasz:", sum);
    }else {
        console.log("Valami nincs kitöltve")
    }


    //console.log(asd)
}

const kiert = (name) => {
    const from = document.getElementsByName(name);
    const container = document.getElementById(name);
    let chosen = null;

    container.classList.remove('error');

    for (const valaszok of from) {
        if (valaszok.checked) {
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