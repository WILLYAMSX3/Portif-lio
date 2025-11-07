const tituloDev = document.querySelector(".titulo");

tituloDev.addEventListener("mouseover", ()=>{
    tituloDev.style.color = "red";
    tituloDev.addEventListener("click", ()=>{
        tituloDev.style.color = "green"
    })
})