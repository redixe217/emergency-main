document.querySelector("#tristCircle").addEventListener("mouseover", tristHighlight);
document.querySelector("#tristCircle").addEventListener("mouseout", tristUnHighlight);
document.querySelector("#tristCircle").addEventListener("click", tristInfo);

document.querySelector("#surCircle").addEventListener("mouseover", surHighlight);
document.querySelector("#surCircle").addEventListener("mouseout", surUnHighlight);
document.querySelector("#surCircle").addEventListener("click", surInfo);

document.querySelector("#kedCircle").addEventListener("mouseover", kedHighlight);
document.querySelector("#kedCircle").addEventListener("mouseout", kedUnHighlight);
document.querySelector("#kedCircle").addEventListener("click", kedInfo);



// Trist sok
function tristHighlight() {
    console.log("tristHighlight");
    document.querySelector("#tristCircle").style.fill = "#000";
    
}

function tristUnHighlight() {
    console.log("tristUnHighlight");
    document.querySelector("#tristCircle").style.fill = "#f00";

}    

function tristInfo() {
    console.log("tristInfo");
    document.querySelector(".info-text > h2").textContent = "Fangt sok";
    document.querySelector(".info-text > article > h3").textContent = "HJÆLP! Jeg sidder fast! Hils min makker fra mig...";
}    

//Sur sok
function surHighlight() {
    console.log("surHighlight");
    document.querySelector("#surCircle").style.fill = "#000";

}

function surUnHighlight() {
    console.log("surUnHighlight");
    document.querySelector("#surCircle").style.fill = "#f00";

    
}    

function surInfo() {
    console.log("surInfo");
    document.querySelector(".info-text > h2").textContent = "Vrede sok";
    document.querySelector(".info-text > article > h3").textContent = "Det her sker HVER gang! Hvorfor spiser den altid én af os?";
}   

// Ked sok
function kedHighlight() {
    console.log("kedHighlight");
    document.querySelector("#kedCircle").style.fill = "#000";

}

function kedUnHighlight() {
    console.log("kedUnHighlight");
    document.querySelector("#kedCircle").style.fill = "#f00";

}    

function kedInfo() {
    console.log("kedInfo");
    document.querySelector(".info-text > h2").textContent = "Trist sok";
    document.querySelector(".info-text > article > h3").textContent = "Vi var et perfekt par... nu er jeg bare en single-sok!";
}   