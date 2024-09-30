document.querySelectorAll('.pergunta-faq').forEach(item => {
    item.addEventListener('click', () => {
        const resposta = item.nextElementSibling;
        
        // Toggle the display of the answer
        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            // Hide other answers
            document.querySelectorAll('.resposta-faq').forEach(r => r.style.display = "none");
            resposta.style.display = "block";
        }
    });
});

/* js para que os slides mudem automáticamente */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
}
    document.getElementById('radio'+count).checked = true
}