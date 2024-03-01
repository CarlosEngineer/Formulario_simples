const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#name");
const emaiInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobInput = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

//verifica se os nomes estão vazios 

    if(nameInput.value === ""){
     alert("Por favor, preencher o campo nome!");
     return;
    }

    if(emaiInput.value === ""){
        alert("Preencher o campo email corretamente");
        return;
    }

    form.submit();

});
