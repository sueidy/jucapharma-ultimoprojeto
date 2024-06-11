function email_valide_login() {
    const email = window.document.getElementById("e-mail-login").value;
    if (!email) {
        document.getElementsByClassName("alert-aviso")[0].innerHTML = "O campo está vazio!";
        document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
        document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
        document.getElementsByClassName("alert-aviso")[0].innerHTML = "Este e-mail é inválido";
        document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
        document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
        return false;
    }
    document.getElementsByClassName("alert-aviso")[0].innerHTML = "";
    return true;
}

function senha_valide_login() {
    const senha = window.document.getElementById("password-login").value;
    if (!senha) {
        document.getElementsByClassName("alert-aviso")[1].innerHTML = "O campo está vazio!";
        document.getElementsByClassName("alert-aviso")[1].style = "color: red; transition: .1s;";
        document.getElementsByTagName("input")[1].style = "border: red solid 1px; transition: .1s;";
        return false;
    } else{
        switch (true) {
            case !/.{8,20}/.test(senha):
                document.getElementsByClassName("alert-aviso")[0].innerHTML = "E-mail ou senha incorretos";
                document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
                document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
                break;
            case !/[a-zA-Z]/(senha):
                document.getElementsByClassName("alert-aviso")[0].innerHTML = "E-mail ou senha incorretos";
                document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
                document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
                break;
            case !/[0-9]/.test(senha):
                document.getElementsByClassName("alert-aviso")[0].innerHTML = "E-mail ou senha incorretos";
                document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
                document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
                break;
            case !/[^a-zA-Z0-9]/.test(senha):
                document.getElementsByClassName("alert-aviso")[0].innerHTML = "E-mail ou senha incorretos";
                document.getElementsByClassName("alert-aviso")[0].style = "color: red; transition: .1s;";
                document.getElementsByTagName("input")[0].style = "border: red solid 1px; transition: .1s;";
                break;
            default:
                alert("Senha forte!");
                break;
        }
    }           
    document.getElementsByClassName("alert-aviso")[1].innerHTML = "";
    return true;         
}





function controle_login() {
    const email = window.document.getElementById("e-mail-login").value;
    const senha = window.document.getElementById("password-login").value;
    const email_login = email_valide_login();
    const senha_login = senha_valide_login();

     if(email_login && senha_login == true) {
       firebase.auth().signInWithEmailAndPassword(email, senha)
             .then(response => {
                 console.log("success", response);
                 if(email == "123456@gmail.com"&& senha == "123456" ){
                 window.location.href = "/paginas/LOGADO/adm/admin.html"
                 alert("Seja bem-vindo meu gostoso criador!");
                 }else{
                    window.location.href = "/paginas/LOGADO/cliente/user.html"
                    alert("Sejá bem-vindo!")
                 }
             })
             .catch(error => {
                 alert(getErrorMessage(error))
             });
    }
    
    return false;
}
function google_login (){
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    setTimeout(function(){
        auth.signInWithPopup(provider);
    }, 3000);
    auth.onAuthStateChanged((val)=>{
        if(val){
            // Faça algo quando o usuário estiver autenticado
            //console.log(val)
            window.location.href = "/paginas/LOGADO/cliente/user.html"
            alert("Sejá bem-vindo!")
        }
    });
}

function getErrorMessage(error){
    if(error.code == "auth/invalid-credential" ){
        return "Usuário não encontrado";
    } return error.message
}






















    //     const script1 = document.createElement('script');
    //     script1.src = '';
    //     document.body.appendChild(script1);

    //     const script2 = document.createElement('script');
    //     script2.src = '';
    //     document.body.appendChild(script2);
    //     alert("foi?")