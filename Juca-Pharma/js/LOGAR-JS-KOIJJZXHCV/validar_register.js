// Adiciona o ouvinte de eventos de submissão do formulário fora da função validar_cadastro()
document.querySelector("form").addEventListener("submit", validar_cadastro);

function validarascoisas(){
    outros(), email_cadastro(),senha_cadastro()
}
// Função para validar o cadastro
function validar_cadastro(e) {
    e.preventDefault();
    const db = firebase.firestore();

    // Obtenha os dados do formulário
    let nome_cadastro = document.querySelector("[name=nome-cadastro]").value;
    let genero_cadastro = document.querySelector("[name=genero-cadastro]").value;
    let nascimento_cadastro = document.querySelector("[name=nascimento-cadastro]").value;
    let cpf_cadastro = document.querySelector("[name=cpf-cadastro]").value;
    let tel_cadastro = document.querySelector("[name=tel-cadastro]").value;
    let email_cadastro = document.querySelector("[name=email-cadastro]").value;
    let password_cadastro = document.querySelector("[name=password-cadastro]").value;

    // Consulta para verificar se o email já existe
    db.collection("cliente")
        .where("email_cadastro", "==", email_cadastro)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                console.log("O email já está cadastrado.");
            } else {
                // Se não houver documento com o email, adiciona os dados
                db.collection("cliente").add({
                    nome_cadastro: nome_cadastro,
                    genero_cadastro: genero_cadastro,
                    nascimento_cadastro: nascimento_cadastro,
                    cpf_cadastro: cpf_cadastro,
                    tel_cadastro: tel_cadastro,
                    email_cadastro: email_cadastro,
                    password_cadastro: password_cadastro
                })
                .then(() => {
                    console.log("Dados adicionados com sucesso ao Firestore.");
                    // Limpa o formulário após a submissão
                    e.target.reset();
                })
                .catch((error) => {
                    console.error("Erro ao adicionar dados ao Firestore: ", error);
                });
            }
        })
        .catch((error) => {
            console.error("Erro ao verificar email no Firestore: ", error);
        });
}


function input_nome(ipt_nome){
    //dividir o nome em partes separadas como substrings exemplo ("sueidy"+"daniel")
    const partesdonome = ipt_nome.split(" ");

    //capitalizar partes do nome de cada parte
    const nomecapitalizado = partesdonome.map((parte)=>{
        return parte.charAt(0).toUpperCase() + parte.slice(1);
    });

    //junta as substrings
    const nomecapitalizadocompleto = nomecapitalizado.join(" ")

    //retorna o nome completo para a função
    return nomecapitalizadocompleto;
}































 function outros() {
     let alert_aviso = window.document.getElementsByClassName("alert-aviso")
     let input = window.document.getElementsByClassName("amanda")
     let vdd = -7
     let inputtamanho = input.length
     for (let i = 0 ; i <= 4 ; i++){
         if (input[i].value == ""){
             alert_aviso[i].innerHTML = "O campo está vazio!"
             alert_aviso[i].style = "color: red; transition: .1s;";
             input[i].style = "border: red solid 1px; transition: .1s;"
             if(i > 0){
             alert_aviso[i].innerHTML = "O campo está vazio!"
             alert_aviso[i].style = "color: red; transition: .1s;";
             input[i].style = "border: red solid 1px; transition: .1s;  width: 40%"
             }
         } else{
             alert_aviso[i].innerHTML = ""
             alert_aviso[i].style = "color: green; transition: .1s;";
             input[i].style = "border: green solid 1px; transition: .1s;"
            
             if(i > 0){
                 alert_aviso[i].innerHTML = ""
                 alert_aviso[i].style = "color: green; transition: .1s;";
                 input[i].style = "border: green solid 1px; transition: .1s;width: 40%";
                 }
             vdd = vdd + (i - (i-1))

              if (vdd + inputtamanho == 7){
                  window.document.getElementsByTagName("button")[0].type = "submit"
              }else{
                  window.document.getElementsByTagName("button")[0].type = "button"
              }
         }
     }
 }

 function email_cadastro() {

 const email = window.document.getElementById("email-cadastro").value;
 if (!email) {
     document.getElementsByClassName("alert-aviso")[4].innerHTML = "O campo está vazio!";
     document.getElementsByClassName("alert-aviso")[4].style = "color: red; transition: .1s;";
     document.getElementsByTagName("input")[7].style = "border: red solid 1px; transition: .1s";
     return false;
 } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
     document.getElementsByClassName("alert-aviso")[4].innerHTML = "Este e-mail não é inválido";
     document.getElementsByClassName("alert-aviso")[4].style = "color: red; transition: .1s;";
     document.getElementsByTagName("input")[7].style = "border: red solid 1px; transition: .1s;";
     return false;
 } else{
     document.getElementsByClassName("alert-aviso")[4].innerHTML = "-- Este e-mail é válido";
     document.getElementsByClassName("alert-aviso")[4].style = "color: green; transition: .1s;";
     document.getElementsByTagName("input")[7].style = "border: green solid 1px; transition: .1s;";
     return true;
 }
 document.getElementsByClassName("alert-aviso")[6].innerHTML = "";
 }

 function senha_cadastro() {
 const senha1 = window.document.getElementById("confirm-password-cadastro").value
 const senha = window.document.getElementById("password-cadastro").value;
 if (!senha) {
     document.getElementsByClassName("alert-aviso")[5].innerHTML = "O campo está vazio!";
     document.getElementsByClassName("alert-aviso")[5].style = "color: red; transition: .1s;";
     document.getElementsByTagName("input")[8].style = "border: red solid 1px; transition: .1s;";
     return false;
 } else{
     switch (true) {
         case !/.{8,20}/.test(senha):
             document.getElementsByClassName("alert-aviso")[5].innerHTML = "-- A senha deve ter pelo menos 8 caracteres.";
             document.getElementsByClassName("alert-aviso")[5].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[8].style = "border: red solid 1px; transition: .1s;";
             return false;
             break
         case !/[a-zA-Z]/.test(senha):
             document.getElementsByClassName("alert-aviso")[5].innerHTML = "-- A senha deve conter pelo menos uma letra.";
             document.getElementsByClassName("alert-aviso")[5].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[8].style = "border: red solid 1px; transition: .1s;";
             return false;
             break;
         case !/[0-9]/.test(senha):
             document.getElementsByClassName("alert-aviso")[5].innerHTML = "-- A senha deve conter pelo menos um número.";
             document.getElementsByClassName("alert-aviso")[5].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[8].style = "border: red solid 1px; transition: .1s;";
             return false;
             break;
         case !/[^a-zA-Z0-9]/.test(senha):
             document.getElementsByClassName("alert-aviso")[5].innerHTML = "-- A senha deve conter pelo menos um caractere especial.";
             document.getElementsByClassName("alert-aviso")[5].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[8].style = "border: red solid 1px; transition: .1s;";
             return false;
             break;
         default:
             document.getElementsByClassName("alert-aviso")[5].innerHTML = "-- Senha forte!";
             document.getElementsByClassName("alert-aviso")[5].style = "color: green; transition: .1s;";
             document.getElementsByTagName("input")[8].style = "border: green solid 1px; transition: .1s;";


              
             if (!senha1){
             document.getElementsByClassName("alert-aviso")[6].innerHTML = "-- O campo está vazio!";
             document.getElementsByClassName("alert-aviso")[6].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[9].style = "border: red 1px; transition: .1s;";
             return false;
             }
             else if(senha === senha1) {
             document.getElementsByClassName("alert-aviso")[6].innerHTML = "-- As senhas são iguais!";
             document.getElementsByClassName("alert-aviso")[6].style = "color: green; transition: .1s;";
             document.getElementsByTagName("input")[9].style = "border: green solid 1px; transition: .1s;";
                 return true;
             } else{
             document.getElementsByClassName("alert-aviso")[6].innerHTML = "-- As senhas não são iguais!";
             document.getElementsByClassName("alert-aviso")[6].style = "color: red; transition: .1s;";
             document.getElementsByTagName("input")[9].style = "border: red solid 1px; transition: .1s;";
             return false;
             }
             break;
     }
 }
 document.getElementsByClassName("alert-aviso")[1].innerHTML = "";
 document.getElementsByTagName("input")[8].style = "";
 }

