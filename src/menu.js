import borshch from "./imgs/borshch.jpg"
import varenyki from "./imgs/varenichki.jpg"
import holubtsi from "./imgs/holubtsi.jpg"

export {createMenuPage};

let divInsideContent = document.querySelector("#content > div");

function recipeCreator(imageReference, description) {
    
    let div = document.createElement("div");
    divInsideContent.appendChild(div);
    
    let img = document.createElement("img");
    img.src = imageReference;
    div.appendChild(img);

    let para = document.createElement("p");
    para.textContent = description;
    img.after(para);
}

function createMenuPage() {
    let secondDivInsideContent = document.querySelector("#content > div:nth-of-type(2)");
    divInsideContent.innerHTML = "";
    if (secondDivInsideContent) secondDivInsideContent.innerHTML =  "";
    recipeCreator(borshch, "Traditional red beetroot borscht is typically made from meat or bone stock, sautéed vegetables, and beet sour (i.e., fermented beetroot juice).");
    recipeCreator(varenyki, "Varenyky are a popular national dish, served both as a common everyday meal and as a part of some traditional celebrations.");
    recipeCreator(holubtsi, "A cabbage roll is a dish consisting of cooked cabbage leaves wrapped around a variety of fillings.");
}