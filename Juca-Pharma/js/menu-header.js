
const firebaseConfig = {
    apiKey: "AIzaSyDgjVLpBe79MH_VQ2V3pdmVn3Uy7EnJRqo",
    authDomain: "jucapharma123.firebaseapp.com",
    projectId: "jucapharma123",
    storageBucket: "jucapharma123.appspot.com",
    messagingSenderId: "349852660696",
    appId: "1:349852660696:web:6fa4ce5dfc165c189bf8ad"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

db.collection('produto').onSnapshot(function(data){

    let list2 = window.document.getElementById("novidades-produtos-adc-logado");
    
    data.docs.map(function(val){
        
    
    let novaFrase =  val.data().nomedoproduto.replace(/\s+/g, "_");


        list2.innerHTML+=`<div class="produto-card">
                                    <div class="carrinho-outros">
                                        <button><img src="/img/add-cart.png" alt=""></button>
                                    </div>
                                    <div class="produto-container-card">
                                        <div class="img-card-produto">
                                            <img src="/img/img-produto/${val.data().substancias}.png" alt="">
                                        </div>
                                        <div class="container-card-produto">
                                            <span>${val.data().nomedoproduto} </span>
                                        </div>
                                        <div class="valor-produto-card">R$ ${val.data().pmc}</div>
                                        <div class="button-produto-card" >
                                            <button><a style="width: 100%; height: 100%;" href="/paginas/produto_${novaFrase}.html"> comprar <img src="/img/shopping-cart.png" alt=""></a> </button> 
                                        </div>
                                    </div>
                                </div> `

    })
})
db.collection('produto').onSnapshot(function(data){

    let list1 = window.document.getElementById("aproveitetambem-produtos-adc-logado");
    
    data.docs.map(function(val){
        
    
    let novaFrase =  val.data().nomedoproduto.replace(/\s+/g, "_");


        list1.innerHTML+=`<div class="produto-card">
                                    <div class="carrinho-outros">
                                        <button><img src="/img/add-cart.png" alt=""></button>
                                    </div>
                                    <div class="produto-container-card">
                                        <div class="img-card-produto">
                                            <img src="/img/img-produto/${val.data().substancias}.png" alt="">
                                        </div>
                                        <div class="container-card-produto">
                                            <span>${val.data().nomedoproduto} </span>
                                        </div>
                                        <div class="valor-produto-card">R$ ${val.data().pmc}</div>
                                        <div class="button-produto-card" >
                                            <button><a style="width: 100%; height: 100%;" href="/paginas/produto_${novaFrase}.html"> comprar <img src="/img/shopping-cart.png" alt=""></a> </button> 
                                        </div>
                                    </div>
                                </div> `

    })
})



function menu_mobile() {
    let abrirteladecadastro = window.document.getElementsByClassName("menu-hamburguer")[0];
    abrirteladecadastro.style.display = (abrirteladecadastro.style.display === "none") ? "flex" : "none";
}

document.querySelector(".bttn-close-cp").addEventListener("click",function cadastro_produto_close() {
    let cadastrodeproduto = window.document.getElementsByClassName("background-cadastro-produtopp")[0];
    cadastrodeproduto.style.display = (cadastrodeproduto.style.display === "none") ? "flex" : "none";
});

document.querySelector("#cadastro-produto").addEventListener("click",function cadastro_produto_close() {
    let cadastrodeproduto = window.document.getElementsByClassName("background-cadastro-produtopp")[0];
    cadastrodeproduto.style.display = (cadastrodeproduto.style.display === "none") ? "flex" : "none";
});


function loginredirecionar(){
    document.location.href = "/paginas/LOGAR/Logue-entre-em-juca.html"
}


