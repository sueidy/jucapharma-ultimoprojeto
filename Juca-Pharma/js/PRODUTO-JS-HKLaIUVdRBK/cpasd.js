// Adiciona o ouvinte de eventos de submissão do formulário fora da função validar_cadastro()
document.querySelector(".form_cadastro_produto").addEventListener("submit", cadastrarProduto);

// Classe Produto
// class Produto {
//     constructor(codigodebarra, lista, fracionar, custounitario, mark_up, pmc, apresentacao, genero, substancias, tipo, fragrancia, quantidade, partedocorpo, tiposdepele, fasesdavida, nomedoproduto, descricaoresumida, titulodadescricaocompleta, descricaocompleta) {
//         this.codigodebarra = codigodebarra;
//         this.lista = lista;
//         this.fracionar = fracionar;
//         this.custounitario = custounitario;
//         this.mark_up = mark_up;
//         this.pmc = pmc;
//         this.apresentacao = apresentacao;
//         this.genero = genero;
//         this.substancias = substancias;
//         this.tipo = tipo;
//         this.fragrancia = fragrancia;
//         this.quantidade = quantidade;
//         this.partedocorpo = partedocorpo;
//         this.tiposdepele = tiposdepele;
//         this.fasesdavida = fasesdavida;
//         this.nomedoproduto = nomedoproduto;
//         this.descricaoresumida = descricaoresumida;
//         this.titulodadescricaocompleta = titulodadescricaocompleta;
//         this.descricaocompleta = descricaocompleta;
//     }
    
//     // Método para gerar o HTML do card de produto
//     produtocardlogado() {
//         return `
//             <div class='produto-card'>
//                 <div class='carrinho-outros'>
//                     <button><img src='/img/add-cart.png' alt=''></button>
//                 </div>
//                 <div class='produto-container-card'>
//                     <div class='img-card-produto'>
//                         <img src='/img/img-produto/tadala.png' alt=''>
//                     </div>
//                     <div class='container-card-produto'>
//                         <span>${this.nomedoproduto}</span>
//                     </div>
//                     <div class='valor-produto-card'>R$ ${this.pmc}</div>
//                     <div class='button-produto-card'>
//                         <button onclick='gerarArquivo()'>comprar <img src='/img/shopping-cart.png' alt=''></button>
//                     </div>
//                 </div>
//             </div>`;
//     }
//     //Método para gerar o HTML da pagina do produto logado
//     praginadoprodutologado(){
//         return ``
//     }
    
//     // // Método para gerar o HTML do card de produto
//     // produtocardlogado() {
//     //     return `
//     //         <div class='produto-card'>
//     //             <div class='carrinho-outros'>
//     //                 <button><img src='/img/add-cart.png' alt=''></button>
//     //             </div>
//     //             <div class='produto-container-card'>
//     //                 <div class='img-card-produto'>
//     //                     <img src='/img/img-produto/tadala.png' alt=''>
//     //                 </div>
//     //                 <div class='container-card-produto'>
//     //                     <span>${this.nomedoproduto}</span>
//     //                 </div>
//     //                 <div class='valor-produto-card'>R$${this.pmc}</div>
//     //                 <div class='button-produto-card'>
//     //                     <button onclick='gerarArquivo()'>comprar <img src='/img/shopping-cart.png' alt=''></button>
//     //                 </div>
//     //             </div>
//     //         </div>`;
//     // }
//     // //Método para gerar o HTML da pagina do produto nao logado
//     // praginadoprodutonaologado(){
//     //     return ``
//     // }
    
    
// }




// Função para cadastrar o produto
function cadastrarProduto(e) {
    e.preventDefault();
    const db = firebase.firestore();
    // Obtenha os dados do formulário
        const codigodebarra = document.getElementById("codigodebarra").value;
        const lista = document.getElementById("lista").value;
        const fracionar = document.getElementById("fracionar").value;
        const custounitario = document.getElementById("custounitario").value;
        const mark_up = document.getElementById("mark_up").value;
        const pmc = document.getElementById("pmc").value;
        const apresentacao = document.getElementById("apresentacao").value;
        const genero = document.getElementById("genero").value;
        const substancias = document.getElementById("substancias").value;
        const tipo = document.getElementById("tipo").value;
        const fragrancia = document.getElementById("fragrancia").value;
        const quantidade = document.getElementById("quantidade").value;
        const partedocorpo = document.getElementById("partedocorpo").value;
        const tiposdepele = document.getElementById("tiposdepele").value;
        const fasesdavida = document.getElementById("fasesdavida").value;
        const nomedoproduto = document.getElementById("nomedoproduto").value;
        const descricaoresumida = document.getElementById("descricaoresumida").value;
        const titulodadescricaocompleta = document.getElementById("titulodadescricaocompleta").value;
        const descricaocompleta = document.getElementById("descricaocompleta").value;


        //let produtocardobjt = new Produto(codigodebarra, lista, fracionar, custounitario, mark_up, pmc, apresentacao, genero, substancias, tipo, fragrancia, quantidade, partedocorpo, tiposdepele, fasesdavida, nomedoproduto, descricaoresumida, titulodadescricaocompleta, descricaocompleta)

    // Consulta para verificar se o email já existe
    db.collection("produto")
        .where("codigodebarra", "==", codigodebarra)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                console.log("O codigo de barra já está cadastrado.");
            } else {
                // Se não houver documento com o email, adiciona os dados
                db.collection("produto").add({
                    codigodebarra:codigodebarra,
                    lista:lista,
                    fracionar:fracionar,
                    custounitario:custounitario,
                    mark_up:mark_up,
                    pmc:pmc,
                    apresentacao:apresentacao,
                    genero:genero,
                    substancias:substancias,
                    tipo:tipo,
                    fragrancia:fragrancia,
                    quantidade:quantidade,
                    partedocorpo:partedocorpo,
                    tiposdepele:tiposdepele,
                    fasesdavida:fasesdavida,
                    nomedoproduto:nomedoproduto,
                    descricaoresumida:descricaoresumida,
                    titulodadescricaocompleta:titulodadescricaocompleta,
                    descricaocompleta:descricaocompleta
                })
                .then(() => {
                    console.log("Dados adicionados com sucesso ao Firestore.");
                     alert("Dados adicionados com sucesso!")
                     gerarArquivo(codigodebarra,lista,pmc,apresentacao,genero,substancias,tipo,fragrancia,quantidade,partedocorpo,tiposdepele,fasesdavida,nomedoproduto,descricaoresumida,titulodadescricaocompleta,descricaocompleta)

                    e.target.reset();
                })
                .catch((error) => {
                    console.error("Erro ao adicionar dados ao Firestore: ", error);
                });
            }
        })
        .catch((error) => {
            console.error("Erro ao verificar cdb no Firestore: ", error);
        });
        
}

function gerarArquivo(codigodebarrass,listass,pmcs,apresentacaos,generos,substanciass,tipos,fragrancias,quantidades,partedocorpos,tiposdepeles,fasesdavidas,nome,descricaoresumidas,titulodadescricaocompletas,descricaocompletas) {
    // // // Obter os valores dos campos de entrada do formulário
    // let nome = "oi";
  
    // // Construir o conteúdo HTML do arquivo
    let conteudo = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <!-- UIkit Css -->
        <link rel="" href="carrinho.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/css/uikit.min.css" />
        <!-- eu css - PRODUTO -->
         <link rel="stylesheet" href="/css/PRODUTO-CSS-HKLaRBK/produto-card.css">
        <link rel="stylesheet" href="/css/naopodefaltar.css">
        <link rel="stylesheet" href="/css/DESLOGADO-CSS-KJZXCUVH/main-home-produtonaologado.css">
    </head>
    <style>
    </style>
    <body>
        
        <div id="_next">
            
            <header>
                <div class="header-container">
                    <nav class="access-user-header">
                        <a class="logo" href="/index.html">
                            <img src="/img/logo/logo2.png">
                        </a>
                        <div class="form-inline">
                            <form class="uk-search uk-search-default" style="width: 90%;">
                                <a href="" class="uk-search-icon-flip" uk-search-icon style="color: var(--cor2);"></a>
                                <input class="form-control mr-sm-2" type="search" placeholder="O que você procura?" aria-label="Pesquisar">
                            </form>
                        </div>
                        <div class="access-user">
                            <div class="login-register-access">
                                <div class="img-rgac"><img src="/img/users.png" alt=""></button></div>
                                <span class="grande">Faça <a href="/paginas/login/Logue-entre-em-juca.html">LOGIN</a> ou crie seu <a href="/paginas/CADASTRE-SE/Logue-entre-em-juca.html">CADASTRO</a></span>
                            </div>
                            <div class="for-user">
                                <a href="#"><img src="/img/apoio-suporte.png" alt="suporte"></a>
                                <a href="/paginas/LOGIN/Logue-entre-em-juca.html"><img src="/img/do-utilizador (1).png" alt="perfil"></a>
                                <a href="#"><img src="/img/carrinho-de-compras.png" alt="carrinho"></a>
                            </div>
                        </div>
                        
                        
                        
                        <div class="hamburguer">
                            <a id="hamburguer-abrir" onclick=" menu_mobile()">
                                <img src="/img/hamburguer.png" width="30px" alt="Juca Pharma">
                            </a>
                            <div class="menu-hamburguer" style="display: none;">
                                <div class="close"onclick=" menu_mobile()" id="close-navbar-mobile-hamburguer"><button style="outline: none;">x</button></div>
                                <nav class="navbar-mobile-hamburguer">
                                    <div class="title">
                                        <img src="/img/do-utilizador.png" alt="icon user">
    
                                        <h5>Olá.faça seu login</h5>
                                    </div>
                                    <nav class="navbar">
                                        <ul class="list">
                                            <li class="item">minha conta</li>
                                            <li class="item">meus dados</li>
                                            <li class="item">meus pedidos</li>
                                            <li class="item">mamães e bebês</li>
                                            <li class="item">dermocosméticos</li>
                                            <li class="item">medicamento e sáude</li>
                                            <li class="item">higiene e beleza</li>
                                        </ul>
                                    </nav>
                                    <div class="button">
                                        <button class="login">
                                            <a href="/paginas/Logue-entre-em-juca.html">logar</a>
                                        </button>
    
                                        <button class="register">
                                            <a href="/paginas/Cadastre-entre-em-juca.html">register</a>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
    
                    </nav>
                </div>
    
                <nav class="navbar">
                    <div class="navbar-container">
                        <ul class="list-itens-navbar">
                            <li><a class="button-navbar" href="#">Mamães e bebês</a></li>
                            <li><a class="button-navbar" href="#">Dermocosméticos</a></li>
                            <li><a class="button-navbar" href="#">Medicamentos e Saúde</a></li>
                            <li><a class="button-navbar" href="#">Higiene e Beleza</a></li>
                            <li><a class="button-navbar" href="#">Fitness e Nutrição</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
    
            
    
            <main id="main-content">
                <div class="organ-div">
                    <div class="main-container">
    
                        <section class="zone-uk-panel">
                            <div class="zone-uk-panel-left">
                                <div class="zone-uk-panel-left-p">
                                    <div class="zone-uk-panel-left-p-img">
                                        <div class="nav-zone-img">
                                            <div><img src="/img/img-produto/${substanciass}.png" onclick="changeMainImage('src=/img/img-produto/${substanciass}.png')" alt=""></div>
                                            
                                            
                                        </div>
    
    
                                        <div class="zone-produto-img">
                                            <img id="mainImage" src="/img/img-produto/${substanciass}.png" alt="">
                                        </div>
    
                                    </div>
    
                                </div>
                            </div>
    
                            <div class="zone-uk-panel-right">
                                <nav class="classe-cp"><a href="#">Desodorante</a></nav>
                                <div class="title-produto-zone-uk-panel">
                                    <h1>${nome}</h1>
                                </div>
                                <span class="codigobarra-cp">UPC: ${codigodebarrass}</span>
                                <div class="contentdescricaoresumida"><p class="conteudo-descrição-produto"> ${descricaoresumidas}</p></div>
                                <span class="creditosdevenda">
                                    <p class="title-span-creditosdevenda">VENDIDO E ENTREGUE POR</p>
                                    <a href="#">Juca Pharma</a>
                                </span>
                                <div class="compra-cp">
                                    <div class="valor"><span>R$ ${pmcs}</span></div>
                                    <div class="compra-carrinho-cp">
                                        <div class="quantidade">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <button class="compra"><span>comprar</span> <img src="/basket.png" width="30px" style="margin-top: .3rem;" alt=""></button>
                                        <button class="carrinho"><span>carrinho</span> <img src="/basket (1).png" width="31px" style="margin-top: .3rem;" alt=""></button>
                                    </div>
                                </div>
    
    
    <!-- 
                                <div class="compra-cp-aviso">
                                    <div class="compra-cp-aviso-content">
                                        <div class="compra-cp-aviso-content-img"><img src="/img/secure-payment.png" alt=""></div>
                                        <div class="compra-cp-aviso-content-txt">Pagamentos e Segurança</div>
                                    </div>
                                    <div class="compra-cp-aviso-content">
                                        <div class="compra-cp-aviso-content-img"><img src="/img/delivery-truck (1).png" alt=""></div>
                                        <div class="compra-cp-aviso-content-txt">Enviado por Juca</div>
                                    </div>
                                    <div class="compra-cp-aviso-content">
                                        <div class="compra-cp-aviso-content-img"><img src="/img/return.png" alt=""></div>
                                        <div class="compra-cp-aviso-content-txt">Política de Devolução</div>
                                    </div>
                                </div> -->
    
    
    
                            </div>
                        </section>
    
    
    
    
    
    
                        <div class="rnk-comp-especificacoes">
                            <div hidden="hidden">
                                <div id="caracteristicas">
                                    <h4 class="group-Especificacoes">Especificações</h4>
                                    <table cellspacing="0" class="group Especificacoes">
                                        <tbody>
                                            <tr class="even">
                                                <th class="name-field Apresentacao">Apresentação</th>
                                                <td class="value-field Apresentacao">${apresentacaos}</td>
                                            </tr>
                                            <tr>
                                                <th class="name-field Genero">Gênero</th>
                                                <td class="value-field Genero">${generos}</td>
                                            </tr>
                                            <tr class="even">
                                                <th class="name-field Substancias">Substâncias</th>
                                                <td class="value-field Substancias"></td>
                                            </tr>
                                            <tr>
                                                <th class="name-field Tipo">Tipo</th>
                                                <td class="value-field Tipo">${tipos}</td>
                                            </tr><tr class="even">
                                                <th class="name-field Fragrancia">Fragrância</th>
                                                <td class="value-field Fragrancia">${fragrancias}</td>
                                            </tr>
                                            <tr>
                                                <th class="name-field Quantidade">Quantidade</th>
                                                <td class="value-field Quantidade">${quantidades}</td>
                                            </tr><tr class="even">
                                                <th class="name-field Parte-do-Corpo">Parte do Corpo</th>
                                                <td class="value-field Parte-do-Corpo">${partedocorpos}</td>
                                            </tr>
                                            <tr>
                                                <th class="name-field Tipos-de-Pele">Tipos de Pele</th>
                                                <td class="value-field Tipos-de-Pele">${partedocorpos}</td>
                                            </tr>
                                            <tr class="even">
                                                <th class="name-field Fases-da-Vida">Fases da Vida</th>
                                                <td class="value-field Fases-da-Vida">${fasesdavidas}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <h2 class="h4">Especificações</h2>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Apresentação</th>
                                        <td>
                                            <a href=" class="rnk-link" target="_blank">${apresentacaos}</a>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th>Gênero</th>
                                        <td>
                                        <a href="" class="rnk-link" target="_blank">${generos}</a>
                                        </td>
                                        </tr>
                                        <tr>
                                        <th>Substâncias</th>
                                        <td>
                                        <a href="" class="rnk-link" target="_blank"></a> 
                                        </td>
                                        </tr>
                                        <tr>
                                        <th>Tipo</th>
                                        <td><a href="">${tipos}</a>,
                                         <a href="" class="rnk-link" target="_blank">Para Proteção</a>  
                                         </td>
                                         </tr>
                                         <tr>
                                         <th>Fragrância</th>
                                         <td><a href="" class="rnk-link" target="_blank">${fragrancias}</a>
                                         </td>
                                         </tr>
                                         <tr>
                                         <th>Quantidade</th>
                                         <td><a href="" class="rnk-link" target="_blank">${quantidades}</a>
                                         </td>
                                         </tr>
                                         <tr>
                                         <th>Parte do Corpo</th>
                                         <td><a href="" class="rnk-link" target="_blank">${partedocorpos}</a>
                                         </td>
                                         </tr>
                                         <tr>
                                         <th>Tipos de Pele</th>
                                         <td><a href="" class="rnk-link" target="_blank">${tiposdepeles}</a>
                                         </td>
                                         </tr>
                                         <tr>
                                         <th>Fases da Vida</th>
                                         <td><a href="" class="rnk-link" target="_blank">${fasesdavidas}</a>
                                         </td>
                                         </tr>
                                         </tbody>
                                         </table>
                                         </div>
                        
    
    
    
    
                        <section style="width: 100%;padding-top: 4rem; padding-left: 1rem; text-align: justify; max-width: 41rem;">
                            <h3 style="margin: 0; padding: 0; padding-bottom:1rem;" >${titulodadescricaocompletas}</h3>
                            <p class="conteudo-descrição-produto" style="margin-top: 1rem;">${descricaocompletas}</p>
                        </section>
    
    
                        <section class="mais-recomendado">
                            <h3>Produtos recentes</h3>
                            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
    
                                <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid" id="aproveitetambem-produtos-adc-logado" style=" display: flex; justify-content: center; color: black; margin: 10px;">
                                
                                       
                                
    
                                </div>
    
                                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slider-item="previous" style="color: var(--cor1)"></a>
                                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slider-item="next" style="color: var(--cor1)"></a>
    
                            </div>
                        </section>
                    </div>
                </div>
            </main>
    
            <footer id="footer">
        
                <form class="participe-da-equipe">
                    <label class="noticia-juca" for="ptc-d-epque">
                        Juca Pharma! Nóticias
                        <span>Receba Ofertas</span>
                    </label>
                    <input type="text" id="text-form-footer" placeholder="Informe seu nome">
                    <input type="email" id="email-form-footer" placeholder="Informe seu E-mail">
                    <button class="button-form-footer"style= "margin-inline:1rem;" type="submit">Cadastrar</button>
                </form>
        
        
                <div class="container">
                    <div class="footer-content" style="padding-top: 2rem;">
        
                        <div class="footer-info">
        
                            <h3 style="font-size: 1.5rem;">JUCA PHARMA</h3>
        
                            
                                <strong>Endereço:</strong>
                                Endereço Completo da Farmácia <br> <br>
        
                            
                                <strong>Televendas:</strong> 
                                4002-8282 
                                <br> <br>
                            </li>
                                <strong>Atendimento ao cliente</strong>
                                0800 275 1313 
                                <br> <br>
                                <strong>Horário do SAC </strong>
                                das 07:00 às 23:00
                                sac@pmenos.com.br <br> <br>
                                <strong>E-mail:</strong> JucaPharma@gmail.com
                            </li>
        
                        </div>
        
                        <div class="footer-hours">
                            <h3>Atendimento</h3>
                                
                                    <strong>Endereço:</strong>
            
                                    R. Ana Paula, 1321 -
            
                                    2° andar - Centro
            
                                    Salvador/BA - CEP: 40484-375
                                <br> <br>
            
                                
                                    <strong>Central SAC:</strong>
                                    (71) 98506-1572
                                <br> <br>
                                    <strong>E-mail:</strong>
                                    faleconosco@supflash.com.br</li> <br> <br>
            
                                <strong>chat:</strong>
                                    <a href="#"> <button style="cursor: pointer; background: transparent; color: white; padding-inline: 1rem; padding-block: 1px; border: solid 2px white;">iniciar atendimento</button>                                </a>
                                
        
                        </div>
        
                        <div class="footer-services">
        
                            <h3>Serviços</h3>
                                <li><a href="#" style="color: white" href="/servicos/consultoria-farmacêutica">Consultoria Farmacêutica</a></li>
                                <li><a href="#" style="color: white" href="/servicos/consulta-online">Consultas Online</a></li>
                                <li><a href="#" style="color: white" href="/servicos/entrega-domicilio">Entrega em Domicílio</a></li>
                                <li><a href="#" style="color: white" href="/servicos/renovacao-receitas">Renovação de Receitas</a></li>
                                <li><a href="#" style="color: white" href="/servicos/testes-laboratoriais">Testes Laboratoriais</a></li>
                                <li><a href="#" style="color: white" href="/servicos/medicamentos-manejo-dor">Medicamentos para Manejo da Dor</a></li>
                                <li><a href="#" style="color: white" href="/servicos/vacinas-imunizacoes">Vacinas e Imunizações</a></li>
                                <li><a href="#" style="color: white" href="/servicos/consultoria-farmacêutica">Consultoria Farmacêutica</a></li>
                                <li><a href="#" style="color: white" href="/servicos/programas-desconto">Programas de Desconto</a></li>
                                <li><a href="#" style="color: white" href="/servicos/atendimento-24-horas">Atendimento 24 Horas</a></li>
                                <li><a href="#" style="color: white" href="/servicos/ajuda-com-cobertura">Ajuda com Cobertura de Planos de Saúde</a></li>
                            
                        </div>
        
                        
                        <div class="footer-social" style="ul{display: flex; align-items: center; justify-content: ce;}">
        
                            
                                
                            <h3>Empresas parceiras</h3>
        
                            <ul style="display: flex; align-items: center; margin: 0;">
        
                                <li style="display: flex; justify-content: center; align-items: center;">
                                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjFxt6EtpOGAxX6q5UCHYxhD5wQFnoECBUQAQ&url=https%3A%2F%2Fwww.grautecnico.com.br%2F&usg=AOvVaw2x1KklN4Mb1q8Vr4n2gcGf&opi=89978449" style="width: 100%; height: 100%;">
                                        <img src="/img/logo/grau.png"  style="background: none;" width="155px" alt="">
                                    </a>
                                </li>
                                </ul>   
    
                                
                        
                        <h3>Siga-nos nas redes Sociais</h3>
    
                        <ul style="display: flex; align-items: center;">
        
                            <li style="margin-right: 1rem;">
                                <a href="#">
                                    <img src="/img/logo/facebook.png" width="35px" alt="">
                                </a>
                            </li>
                            <li style="margin-right: 1rem;"i>
                                <a href="#">
                                    <img src="/img/logo/instagram.png" width="35px" alt="">
                                </a>
                            </li>
                            <li style="margin-right: 1rem;">
                                <a href="#">
                                    <img src="/img/logo/github.png" width="35px" alt="">
                                </a>
                            </li>
        
                            </ul>   
                    
    
    
    
                        
    
                        
                    </div>
    
    
    
                    </div>        
                </div>
    
        
        
                <div class="footer-bottom" style=" background: var(--cor1); width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    
    
                <div style="background: var(--cor1);display: flex; align-items: center; justify-content: center; flex-direction: column; border-radius: 0rem 0rem 4rem 4rem; width: 100%; padding: 3rem; max-width: 1630px;">
                    <span style="font-size: 11px; padding-bottom: 1rem;">aceitos:</span><div><img src="/img/logo/image.png" alt=""></div>
                </div>
                <div style=" padding: 10px; max-width: 1630px;">
                    
    
                    <p>Empreendimentos Pague Menos S/A; CNPJ: 06.626.253/0001-51 | Rua Senador Pompeu, 1520, Centro, Fortaleza-CE; CEP: 60.025-001 | Telefones: 0800 275 1313 e 4002-8282 | Horário de funcionamento da filial: 24h |
                        Farmacêutico Responsável: Flávio Luiz de Souza Oliveira - CRF Nº 3058 CE.| Farmacêutico (a) substituto responsáveis pelo SAC : Natália Matias Frota - CRF Nº 7074 |
                        Registro Sanitário nº LS00032234/2022 | AFE: 0280418 <br>
                        As promoções expostas nesse site são válidas por tempo determinado ou enquanto durar o estoque. </p>
        
                    <!-- <p style="font-weight: 600;">Política de Privacidade | Termos de Uso</p> -->
        
                    <p style="font-weight: 700;">© 2024 Nome da Farmácia. Todos os direitos reservados.</p>
        
                </div>
                </div>
        
            </footer>
        </div>
    
        <script>
            function changeMainImage(newImage) {
      
                document.getElementById('mainImage').src = newImage;
    
            }
        </script>
    <script src="/js/LOGAR-JS-KOIJJZXHCV/validar-lgn.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
    <script src="/js/menu-header.js"></script>
        <!-- JavaScript (Opcional) -->
        <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <!-- UIkit JS -->
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.20.8/dist/js/uikit-icons.min.js"></script>
    </body>
    
    </html>`;
  
    
    let blob = new Blob([conteudo], {type: 'text/html'});
    let url = URL.createObjectURL(blob);
  
    // Criar um link para fazer o download do arquivo
    let link = document.createElement('a');
    link.href = url;
    link.download = 'produto_'+ nome.replace(/ /g, '_') + '.html';
    link.click();
  
    // Limpar o objeto URL criado após o download
    URL.revokeObjectURL(url);
  }





// // const mensagem = "codigodebarra: " + codigodebarra + "\n" +
// // "lista: " + lista + "\n" +
// // "fracionar: " + fracionar + "\n" +
// // "custounitario: " + custounitario + "\n" +
// // "mark_up: " + mark_up + "\n" +
// // "pmc: " + pmc + "\n" +
// // "apresentacao: " + apresentacao + "\n" +
// // "genero: " + genero + "\n" +
// // "substancias: " + substancias + "\n" +
// // "tipo: " + tipo + "\n" +
// // "fragrancia: " + fragrancia + "\n" +
// // "quantidade: " + quantidade + "\n" +
// // "partedocorpo: " + partedocorpo + "\n" +
// // "tiposdepele: " + tiposdepele + "\n" +
// // "fasesdavida: " + fasesdavida + "\n" +
// // "nomedoproduto: " + nomedoproduto + "\n" +
// // "descricaoresumida: " + descricaoresumida + "\n" +
// // "titulodadescricaocompleta: " + titulodadescricaocompleta + "\n"+
// // "descricaocompleta: " + descricaocompleta 

// // alert(mensagem)
document.getElementById('addPhotoBtn').addEventListener('click', function() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = true;
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function() {
        let files = this.files;
        let imageContainer = document.getElementById('imageContainer');
        let imageUrls = []; // Lista para armazenar os endereços das imagens

        // Função para ler um arquivo e resolver uma promessa quando estiver carregado
        function readFile(file) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = function(event) {
                    let imageUrl = event.target.result;
                    let imagePreview = document.createElement('div');
                    imagePreview.className = 'imagePreview';
                    imagePreview.innerHTML = '<img src="' + imageUrl + '">';
                    imageContainer.appendChild(imagePreview);
                    return imageUrls.push(imageUrl);
                };
                
                reader.readAsDataURL(file);
            });
        }

        // Array para armazenar todas as promessas de leitura
        let promises = [];

        // Lê cada arquivo e cria uma promessa para cada um
        for (let i = 0; i < files.length; i++) {
            promises.push(readFile(files[i]));
            
        }
        
        alert(readFile())

    });

    document.body.appendChild(fileInput);
    fileInput.click();
});


