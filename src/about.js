export {createAboutPage};

let divInsideContent = document.querySelector("#content > div")
let secondDivInsideContent = document.createElement("div")
divInsideContent.after(secondDivInsideContent);

function createAboutPage() {
    divInsideContent.innerHTML = "";
    secondDivInsideContent.innerHTML = "";
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    secondDivInsideContent.appendChild(para1);
    secondDivInsideContent.appendChild(para2);
    para1.textContent = "Don't forget to subscribe and follow us. By far, visit us personally at the address:"
    para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, reprehenderit nulla consequuntur nesciunt eum alias, consectetur eos culpa repellendus numquam facilis quod velit omnis ea est! Facere beatae quam tempore."
}
