const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validationFormHero(){
    const inputEmailFormHero = document.getElementById("FormHeroEmail").value;
    const messageErrorFormHero = document.getElementById("FormHeroText");

    if(inputEmailFormHero.match(pattern)){
        messageErrorFormHero.innerHTML = "";
    }else{
        messageErrorFormHero.innerHTML = "Please check your email";
    }
    if(inputEmailFormHero == ""){
        messageErrorFormHero.innerHTML = "";
    }
}

function validationFormSection(){
    const inputEmailFormSection = document.getElementById("FormSectionEmail").value;
    const messageErrorFormSection = document.getElementById("FormSectionText");

    if(inputEmailFormSection.match(pattern)){
        messageErrorFormSection.innerHTML = "";
    }else{
        messageErrorFormSection.innerHTML = "Please check your email";
    }
    if(inputEmailFormSection == ""){
        messageErrorFormSection.innerHTML = "";
    }
}
