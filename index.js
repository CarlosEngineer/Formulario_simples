const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobInput = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

//verifica se os campos estão preenchidos! 

    if(nameInput.value === ""){
     alert("Por favor, preencher o campo nome!");
     return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencher o campo email corretamente");
        return;
    }

    

    if(!validatePassword(passwordInput.value,8)){
        alert("A senha precisa ter no minimo 8 digitos");
        return;

    }

    if(jobInput.value === ""){
        alert("Selecione alguma opção no campo 'situation of jobs' ");
        return;
    }

    if(messageTextArea.value ===""){
        alert("Por gentileza preencher o campo de texto ");
        return;
    }


    form.submit();
});

//função para validar o email 

function isEmailValid(email){

    //cria uma regex para validar o email 

    const  emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
    
}


//função valida a senha 

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }

    return false
}
