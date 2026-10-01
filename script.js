/* =========================================================
   EMPÓRIO DO MATUTO
   script.js
========================================================= */


/* =========================================================
   CATÁLOGO COMPLETO
   65 PRODUTOS
========================================================= */

const produtos = [

    // =====================================================
    // HORTIFRUTI
    // =====================================================

    {
        nome: "Abacate",
        categoria: "Hortifruti",
        imagem: "assets/produtos/abacate.jpg"
    },

    {
        nome: "Abóbora",
        categoria: "Hortifruti",
        imagem: "assets/produtos/abobora.jpg"
    },

    {
        nome: "Banana",
        categoria: "Hortifruti",
        imagem: "assets/produtos/banana.jpg"
    },

    {
        nome: "Batata",
        categoria: "Hortifruti",
        imagem: "assets/produtos/batata.jpg"
    },

    {
        nome: "Batata doce",
        categoria: "Hortifruti",
        imagem: "assets/produtos/batata-doce.jpg"
    },

    {
        nome: "Beterraba",
        categoria: "Hortifruti",
        imagem: "assets/produtos/beterraba.jpg"
    },

    {
        nome: "Cebola",
        categoria: "Hortifruti",
        imagem: "assets/produtos/cebola.jpg"
    },

    {
        nome: "Cheiro-verde",
        categoria: "Hortifruti",
        imagem: "assets/produtos/cheiro-verde.jpg"
    },

    {
        nome: "Chuchu",
        categoria: "Hortifruti",
        imagem: "assets/produtos/chuchu.jpg"
    },

    {
        nome: "Laranja",
        categoria: "Hortifruti",
        imagem: "assets/produtos/laranja.jpg"
    },

    {
        nome: "Limão",
        categoria: "Hortifruti",
        imagem: "assets/produtos/limao.jpg"
    },

    {
        nome: "Maracujá",
        categoria: "Hortifruti",
        imagem: "assets/produtos/maracuja.jpg"
    },

    {
        nome: "Melão",
        categoria: "Hortifruti",
        imagem: "assets/produtos/melao.jpg"
    },

    {
        nome: "Pepino",
        categoria: "Hortifruti",
        imagem: "assets/produtos/pepino.jpg"
    },

    {
        nome: "Pimentão",
        categoria: "Hortifruti",
        imagem: "assets/produtos/pimentao.jpg"
    },

    {
        nome: "Pimentinha",
        categoria: "Hortifruti",
        imagem: "assets/produtos/pimentinha.jpg"
    },

    {
        nome: "Tomate",
        categoria: "Hortifruti",
        imagem: "assets/produtos/tomate.jpg"
    },


    // =====================================================
    // MERCEARIA
    // =====================================================

    {
        nome: "Bolacha Acebolada",
        categoria: "Mercearia",
        imagem: "assets/produtos/bolacha-acebolada.jpg"
    },

    {
        nome: "Bolacha Crac",
        categoria: "Mercearia",
        imagem: "assets/produtos/bolacha-crac.jpg"
    },

    {
        nome: "Bolacha de alho",
        categoria: "Mercearia",
        imagem: "assets/produtos/bolacha-de-alho.jpg"
    },

    {
        nome: "Bolacha Delicia do sertão",
        categoria: "Mercearia",
        imagem: "assets/produtos/bolacha-delicia-do-sertao.jpg"
    },

    {
        nome: "Bolacha torrada e amanteigada",
        categoria: "Mercearia",
        imagem: "assets/produtos/bolacha-torrada-amanteigada.jpg"
    },

    {
        nome: "Broa Romeu",
        categoria: "Mercearia",
        imagem: "assets/produtos/broa-romeu.jpg"
    },

    {
        nome: "Broa Sequilhos Paulista",
        categoria: "Mercearia",
        imagem: "assets/produtos/broa-sequilhos-paulista.jpg"
    },

    {
        nome: "bulim Romeu",
        categoria: "Mercearia",
        imagem: "assets/produtos/bulim-romeu.jpg"
    },

    {
        nome: "Cajuzinho 250g",
        categoria: "Mercearia",
        imagem: "assets/produtos/cajuzinho-250g.jpg"
    },

    {
        nome: "Folheada do sertão",
        categoria: "Mercearia",
        imagem: "assets/produtos/folheada-do-sertao.jpg"
    },

    {
        nome: "Goiabinha Sertaneja",
        categoria: "Mercearia",
        imagem: "assets/produtos/goiabinha-sertaneja.jpg"
    },

    {
        nome: "Molho pimenta gourmet",
        categoria: "Mercearia",
        imagem: "assets/produtos/molho-pimenta-gourmet.jpg"
    },

    {
        nome: "Rosca de milho",
        categoria: "Mercearia",
        imagem: "assets/produtos/rosca-de-milho.jpg"
    },

    {
        nome: "Tapioca",
        categoria: "Mercearia",
        imagem: "assets/produtos/tapioca.jpg"
    },


    // =====================================================
    // BEBIDAS
    // =====================================================

    {
        nome: "Bagaceira",
        categoria: "Bebidas",
        imagem: "assets/produtos/bagaceira.jpg"
    },

    {
        nome: "Cachaça do Matuto",
        categoria: "Bebidas",
        imagem: "assets/produtos/cachaca-do-matuto.jpg"
    },

    {
        nome: "Cachaça serrana",
        categoria: "Bebidas",
        imagem: "assets/produtos/cachaca-serrana.jpg"
    },

    {
        nome: "Cajuína",
        categoria: "Bebidas",
        imagem: "assets/produtos/cajuina.jpg"
    },

    {
        nome: "Douradinho",
        categoria: "Bebidas",
        imagem: "assets/produtos/douradinho.jpg"
    },

    {
        nome: "Licor Banana",
        categoria: "Bebidas",
        imagem: "assets/produtos/licor-banana.jpg"
    },

    {
        nome: "Licor Jenipapo",
        categoria: "Bebidas",
        imagem: "assets/produtos/licor-jenipapo.jpg"
    },

    {
        nome: "Licor Tamarindo",
        categoria: "Bebidas",
        imagem: "assets/produtos/licor-tamarindo.jpg"
    },

    {
        nome: "Pingo de ouro",
        categoria: "Bebidas",
        imagem: "assets/produtos/pingo-de-ouro.jpg"
    },


    // =====================================================
    // DOCES
    // =====================================================

    {
        nome: "Cocada branca",
        categoria: "Doces",
        imagem: "assets/produtos/cocada-branca.jpg"
    },

    {
        nome: "Cocada preta",
        categoria: "Doces",
        imagem: "assets/produtos/cocada-preta.jpg"
    },

    {
        nome: "Doce de leite cremoso 350g",
        categoria: "Doces",
        imagem: "assets/produtos/doce-de-leite-cremoso-350g.jpg"
    },

    {
        nome: "Doce de leite Granulado 350g",
        categoria: "Doces",
        imagem: "assets/produtos/doce-de-leite-granulado-350g.jpg"
    },

    {
        nome: "Quebra queixo de amendoim",
        categoria: "Doces",
        imagem: "assets/produtos/quebra-queixo-amendoim.jpg"
    },

    {
        nome: "Quebra queixo de coco",
        categoria: "Doces",
        imagem: "assets/produtos/quebra-queixo-coco.jpg"
    },

    {
        nome: "Quebra queixo de goiaba",
        categoria: "Doces",
        imagem: "assets/produtos/quebra-queixo-goiaba.jpg"
    },

    {
        nome: "Rapadura de amendoim",
        categoria: "Doces",
        imagem: "assets/produtos/rapadura-amendoim.jpg"
    },

    {
        nome: "Rapadura de coco 120g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadura-coco-120g.jpg"
    },

    {
        nome: "Rapadura Natural 120g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadura-natural-120g.jpg"
    },

    {
        nome: "Rapadura Natural 200g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadura-natural-200g.jpg"
    },

    {
        nome: "Rapadurinha coco c/ mamão 200g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadurinha-coco-mamao-200g.jpg"
    },

    {
        nome: "Rapadurinha de coco 200g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadurinha-coco-200g.jpg"
    },

    {
        nome: "Rapadurinha Natural 200g",
        categoria: "Doces",
        imagem: "assets/produtos/rapadurinha-natural-200g.jpg"
    },


    // =====================================================
    // CARNES E FRIOS
    // =====================================================

    {
        nome: "Carne de sol",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/carne-de-sol.jpg"
    },

    {
        nome: "Gordura de porco/pote maior",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/gordura-porco-pote-maior.jpg"
    },

    {
        nome: "Linguiça suína apimentada",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/linguica-suina-apimentada.jpg"
    },

    {
        nome: "Manteiga de garrafa 1L",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/manteiga-garrafa-1l.jpg"
    },

    {
        nome: "Manteiga de garrafa 470ml",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/manteiga-garrafa-470ml.jpg"
    },

    {
        nome: "Paçoca de carne de sol",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/pacoca-carne-de-sol.jpg"
    },

    {
        nome: "Queijo coalho",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/queijo-coalho.jpg"
    },

    {
        nome: "Sarapatel",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/sarapatel.jpg"
    },

    {
        nome: "Torresmo",
        categoria: "Carnes e frios",
        imagem: "assets/produtos/torresmo.jpg"
    },


    // =====================================================
    // PRODUTOS REGIONAIS
    // =====================================================

    {
        nome: "Buchada 2 bucho",
        categoria: "Regionais",
        imagem: "assets/produtos/buchada-2-bucho.jpg"
    },

    {
        nome: "Buchada 4 bucho",
        categoria: "Regionais",
        imagem: "assets/produtos/buchada-4-bucho.jpg"
    },

    {
        nome: "Pastelzin",
        categoria: "Regionais",
        imagem: "assets/produtos/pastelzin.jpg"
    },

    {
        nome: "Pimenta caveira",
        categoria: "Regionais",
        imagem: "assets/produtos/pimenta-caveira.jpg"
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const catalogo = document.getElementById("catalogo");

const pesquisa = document.getElementById("pesquisa");

const botoesCategoria =
    document.querySelectorAll("[data-categoria]");

const botaoMenu =
    document.getElementById("botao-menu");

const menu =
    document.getElementById("menu");

const botaoTopo =
    document.getElementById("voltar-topo");

const anoAtual =
    document.getElementById("ano-atual");


/* =========================================================
   ESTADO
========================================================= */

let categoriaAtual = "todos";

let textoPesquisa = "";


/* =========================================================
   NORMALIZAR TEXTO
   Permite pesquisar sem se preocupar com acentos.
========================================================= */

function normalizarTexto(texto) {

    return texto
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =========================================================
   CRIAR CARD
========================================================= */

function criarCard(produto) {

    const card =
        document.createElement("article");

    card.className = "produto-card";


    const imagemContainer =
        document.createElement("div");

    imagemContainer.className =
        "produto-imagem";


    const imagem =
        document.createElement("img");

    imagem.src = produto.imagem;

    imagem.alt = produto.nome;

    imagem.loading = "lazy";


    /*
       Se a imagem ainda não existir,
       mantemos um espaço visual agradável.
    */

    imagem.onerror = function () {

        this.style.display = "none";

        imagemContainer.classList.add(
            "sem-imagem"
        );

    };


    imagemContainer.appendChild(imagem);


    const informacoes =
        document.createElement("div");

    informacoes.className =
        "produto-info";


    const categoria =
        document.createElement("span");

    categoria.className =
        "produto-categoria";

    categoria.textContent =
        produto.categoria;


    const nome =
        document.createElement("h3");

    nome.textContent =
        produto.nome;


    informacoes.appendChild(categoria);

    informacoes.appendChild(nome);


    card.appendChild(imagemContainer);

    card.appendChild(informacoes);


    return card;

}


/* =========================================================
   MOSTRAR PRODUTOS
========================================================= */

function mostrarProdutos() {

    if (!catalogo) {
        return;
    }


    catalogo.innerHTML = "";


    const produtosFiltrados =
        produtos.filter(function (produto) {

            const categoriaProduto =
                normalizarTexto(
                    produto.categoria
                );

            const categoriaSelecionada =
                normalizarTexto(
                    categoriaAtual
                );


            const correspondeCategoria =
                categoriaAtual === "todos" ||
                categoriaProduto === categoriaSelecionada;


            const nomeProduto =
                normalizarTexto(
                    produto.nome
                );


            const pesquisaAtual =
                normalizarTexto(
                    textoPesquisa
                );


            const correspondePesquisa =
                nomeProduto.includes(
                    pesquisaAtual
                );


            return (
                correspondeCategoria &&
                correspondePesquisa
            );

        });


    /* =====================================================
       NENHUM RESULTADO
    ===================================================== */

    if (produtosFiltrados.length === 0) {

        catalogo.innerHTML = `

            <div class="nenhum-produto">

                <h3>
                    Nenhum produto encontrado
                </h3>

                <p>
                    Tente pesquisar por outro nome
                    ou selecionar outra categoria.
                </p>

            </div>

        `;

        return;

    }


    /* =====================================================
       RENDERIZAR CARDS
    ===================================================== */

    produtosFiltrados.forEach(function (produto) {

        catalogo.appendChild(
            criarCard(produto)
        );

    });

}


/* =========================================================
   PESQUISA
========================================================= */

if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        function () {

            textoPesquisa =
                this.value;

            mostrarProdutos();

        }
    );

}


/* =========================================================
   CATEGORIAS
========================================================= */

botoesCategoria.forEach(function (botao) {

    botao.addEventListener(
        "click",
        function () {

            categoriaAtual =
                this.dataset.categoria;


            botoesCategoria.forEach(
                function (outroBotao) {

                    outroBotao.classList.remove(
                        "ativo"
                    );

                }
            );


            this.classList.add("ativo");


            mostrarProdutos();


            /*
               No celular, depois de escolher uma
               categoria, voltamos suavemente para
               a área do catálogo.
            */

            const produtosSecao =
                document.getElementById(
                    "produtos"
                );

            if (
                window.innerWidth <= 700 &&
                produtosSecao
            ) {

                produtosSecao.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   MENU MOBILE
========================================================= */

if (botaoMenu && menu) {

    botaoMenu.addEventListener(
        "click",
        function () {

            const aberto =
                menu.classList.toggle(
                    "aberto"
                );


            botaoMenu.setAttribute(
                "aria-expanded",
                aberto
            );


            botaoMenu.setAttribute(
                "aria-label",
                aberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    const linksMenu =
        menu.querySelectorAll("a");


    linksMenu.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    menu.classList.remove(
                        "aberto"
                    );


                    botaoMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    botaoMenu.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                }
            );

        }
    );

}


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

if (botaoTopo) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                botaoTopo.classList.add(
                    "visivel"
                );

            } else {

                botaoTopo.classList.remove(
                    "visivel"
                );

            }

        }
    );


    botaoTopo.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

if (anoAtual) {

    anoAtual.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        mostrarProdutos();

    }
);