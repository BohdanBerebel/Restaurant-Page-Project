import {definitiveLaunch} from "./initial-page";
import {createMenuPage} from "./menu";
import {createAboutPage} from "./about";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

definitiveLaunch();

homeButton.addEventListener("click", (e) => {
    definitiveLaunch();
    console.log("Home button's pressed");
})

menuButton.addEventListener("click", (e) => {
    createMenuPage();
    console.log("Menu button's pressed");
})

aboutButton.addEventListener("click", (e) => {
    createAboutPage();
    console.log("About button's pressed");
})