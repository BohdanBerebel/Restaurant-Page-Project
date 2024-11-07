export {definitiveLaunch};
import "./homeStyle.css";

import pumpkins from "./imgs/pumpkins.jpg";
import flowers from "./imgs/flowers.jpg";
import cat from "./imgs/cat.jpg";

let content = document.querySelector("#content");
let divInsideContent = document.createElement("div");
let paraInsideContent = document.createElement("p");

paraInsideContent.innerText = "Welcome to my wonderful restaurant!!!"
content.appendChild(paraInsideContent);
content.appendChild(divInsideContent);

function newImgElement(reference) {
    let div = document.createElement("div");
    let element = document.createElement("img");
    element.setAttribute("src", reference);
    divInsideContent.appendChild(div);
    div.appendChild(element);
    return element;
}

function addSomeTextAfterElement(element, text = "Lorem ...") {
    let para = document.createElement("p");
    para.innerText = text;
    element.after(para);
}

function definitiveLaunch() {
    let secondDivInsideContent = document.querySelector("#content > div:nth-of-type(2)");
    divInsideContent.innerHTML = "";
    secondDivInsideContent.innerHTML =  "";
    addSomeTextAfterElement(newImgElement(pumpkins), "Super pumpkins are here!");
    addSomeTextAfterElement(newImgElement(flowers), "Sniff this beauty!");
    addSomeTextAfterElement(newImgElement(cat), "Pat the cat!");
}
