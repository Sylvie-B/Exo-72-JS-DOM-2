let mesDivs = document.getElementsByClassName("name-tag");


for(let i = 0; i < mesDivs.length; i++){
    let newP = document.createElement("p");
    newP.innerHTML = "HELLO WORLD";
    mesDivs[i].appendChild(newP);
}

