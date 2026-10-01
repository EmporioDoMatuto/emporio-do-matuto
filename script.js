/* =========================================================
   EMPÓRIO DO MATUTO
   script.js
   =========================================================
   
   IMPORTANTE:
   Os produtos ficam no arquivo produtos.js
   
   No HTML, carregue nesta ordem:

   <script src="produtos.js"></script>
   <script src="script.js"></script>

   ========================================================= */


/* =========================================================
   VERIFICAÇÃO DOS PRODUTOS
   ========================================================= */

if (typeof produtos === "undefined") {
    console.error(
        "Erro: produtos.js não foi carregado antes do script.js."
    );
}


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
   Permite pesquisar sem acentos.
   Exemplo:
   "Cachaça" = "cachaca"
   "AÇAÍ" = "acai"
   ========================================================= */

function normalizarTexto(texto) {

    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =========================================================
   FORMATAR PREÇO
   ========================================================= */

function formatarPreco(valor) {

    const numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return "Preço não informado";
    }

    return numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =========================================================
   OBTER PREÇO ATUAL
   Considera promoção automaticamente.
   ========================================================= */

function obterPreco(produto) {

    if (
        produto.promocao === true &&
        produto.precoPromocional !== null &&
        produto.precoPromocional !== undefined &&
        Number.isFinite(Number(produto.precoPromocional))
    ) {
        return Number(produto.precoPromocional);
    }

    return Number(produto.preco);

}


/* =========================================================
   CRIAR CARD DO PRODUTO
   ========================================================= */

function criarCard(produto) {

    const card =
        document.createElement("article");

    card.className = "produto-card";


    /* =====================================================
       IMAGEM
       ===================================================== */

    const imagemContainer =
        document.createElement("div");

    imagemContainer.className =
        "produto-imagem";


    const imagem =
        document.createElement("img");

    imagem.src =
        produto.imagem || "";

    imagem.alt =
        produto.nome || "Produto";

    imagem.loading =
        "lazy";


    /*
       Caso a imagem ainda não exista,
       o espaço continua visualmente agradável.
    */

    imagem.onerror = function () {

        this.style.display = "none";

        imagemContainer.classList.add(
            "sem-imagem"
        );

    };


    imagemContainer.appendChild(imagem);


    /* =====================================================
       INFORMAÇÕES
       ===================================================== */

    const informacoes =
        document.createElement("div");

    informacoes.className =
        "produto-info";


    /* =====================================================
       CATEGORIA
       ===================================================== */

    const categoria =
        document.createElement("span");

    categoria.className =
        "produto-categoria";

    categoria.textContent =
        produto.categoria || "";


    /* =====================================================
       NOME
       ===================================================== */

    const nome =
        document.createElement("h3");

    nome.textContent =
        produto.nome || "Produto";


    informacoes.appendChild(categoria);

    informacoes.appendChild(nome);


    /* =====================================================
       PREÇO
       ===================================================== */

    const areaPreco =
        document.createElement("div");

    areaPreco.className =
        "produto-preco";


    const precoAtual =
        obterPreco(produto);


    /*
       Produto em promoção
    */

    if (
        produto.promocao === true &&
        produto.precoPromocional !== null &&
        produto.precoPromocional !== undefined
    ) {

        const precoAntigo =
            document.createElement("span");

        precoAntigo.className =
            "preco-antigo";

        precoAntigo.textContent =
            formatarPreco(produto.preco);


        const precoPromocional =
            document.createElement("strong");

        precoPromocional.className =
            "preco-promocional";

        precoPromocional.textContent =
            formatarPreco(produto.precoPromocional);


        areaPreco.appendChild(precoAntigo);

        areaPreco.appendChild(precoPromocional);


        const selo =
            document.createElement("span");

        selo.className =
            "selo-promocao";

        selo.textContent =
            "PROMOÇÃO";


        areaPreco.appendChild(selo);

    } else {

        const preco =
            document.createElement("strong");

        preco.className =
            "preco";

        preco.textContent =
            formatarPreco(precoAtual);


        areaPreco.appendChild(preco);

    }


    /*
       Unidade
       Exemplo:
       R$ 65,00 / kg
    */

    if (produto.unidade) {

        const unidade =
            document.createElement("span");

        unidade.className =
            "produto-unidade";

        unidade.textContent =
            ` / ${produto.unidade}`;

        areaPreco.appendChild(unidade);

    }


    informacoes.appendChild(areaPreco);


    /* =====================================================
       PRODUTO INDISPONÍVEL
       ===================================================== */

    if (produto.disponivel === false) {

        card.classList.add(
            "produto-indisponivel"
        );


        const indisponivel =
            document.createElement("span");

        indisponivel.className =
            "produto-indisponivel-label";

        indisponivel.textContent =
            "Indisponível";


        imagemContainer.appendChild(
            indisponivel
        );

    }


    /* =====================================================
       MONTAR CARD
       ===================================================== */

    card.appendChild(
        imagemContainer
    );

    card.appendChild(
        informacoes
    );


    return card;

}


/* =========================================================
   FILTRAR PRODUTOS
   ========================================================= */

function filtrarProdutos() {

    if (
        typeof produtos === "undefined" ||
        !Array.isArray(produtos)
    ) {
        return [];
    }


    const pesquisaNormalizada =
        normalizarTexto(textoPesquisa);


    const categoriaNormalizada =
        normalizarTexto(categoriaAtual);


    return produtos.filter(function (produto) {

        const nomeProduto =
            normalizarTexto(produto.nome);


        const categoriaProduto =
            normalizarTexto(produto.categoria);


        /* =================================================
           FILTRO DE CATEGORIA
           ================================================= */

        const correspondeCategoria =
            categoriaNormalizada === "todos" ||
            categoriaProduto === categoriaNormalizada;


        /* =================================================
           FILTRO DE PESQUISA
           ================================================= */

        const correspondePesquisa =
            pesquisaNormalizada === "" ||
            nomeProduto.includes(
                pesquisaNormalizada
            );


        return (
            correspondeCategoria &&
            correspondePesquisa
        );

    });

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
        filtrarProdutos();


    /* =====================================================
       NENHUM RESULTADO
       ===================================================== */

    if (produtosFiltrados.length === 0) {

        const nenhumProduto =
            document.createElement("div");

        nenhumProduto.className =
            "nenhum-produto";


        const titulo =
            document.createElement("h3");

        titulo.textContent =
            "Nenhum produto encontrado";


        const texto =
            document.createElement("p");

        if (textoPesquisa.trim() !== "") {

            texto.textContent =
                "Tente pesquisar por outro nome.";

        } else {

            texto.textContent =
                "Não há produtos disponíveis nesta categoria.";

        }


        nenhumProduto.appendChild(
            titulo
        );

        nenhumProduto.appendChild(
            texto
        );


        catalogo.appendChild(
            nenhumProduto
        );


        return;

    }


    /* =====================================================
       RENDERIZAR CARDS
       ===================================================== */

    produtosFiltrados.forEach(
        function (produto) {

            catalogo.appendChild(
                criarCard(produto)
            );

        }
    );

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

botoesCategoria.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                categoriaAtual =
                    this.dataset.categoria || "todos";


                /* =========================================
                   ATUALIZAR BOTÃO ATIVO
                   ========================================= */

                botoesCategoria.forEach(
                    function (outroBotao) {

                        outroBotao.classList.remove(
                            "ativo"
                        );

                    }
                );


                this.classList.add(
                    "ativo"
                );


                /* =========================================
                   MOSTRAR PRODUTOS
                   ========================================= */

                mostrarProdutos();


                /* =========================================
                   NO CELULAR:
                   VOLTAR PARA O CATÁLOGO
                   ========================================= */

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

    }
);


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
                String(aberto)
            );


            botaoMenu.setAttribute(
                "aria-label",
                aberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    /* =====================================================
       FECHAR MENU AO CLICAR EM UM LINK
       ===================================================== */

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

function inicializarCatalogo() {

    /*
       Verifica se o arquivo produtos.js
       realmente forneceu a variável.
    */

    if (
        typeof produtos === "undefined" ||
        !Array.isArray(produtos)
    ) {

        console.error(
            "Empório do Matuto: a variável 'produtos' não foi encontrada."
        );

        if (catalogo) {

            catalogo.innerHTML = `
                <div class="nenhum-produto">
                    <h3>Catálogo indisponível</h3>
                    <p>
                        Não foi possível carregar os produtos.
                    </p>
                </div>
            `;

        }

        return;

    }


    console.log(
        `Empório do Matuto: ${produtos.length} produtos carregados.`
    );


    mostrarProdutos();

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        inicializarCatalogo
    );

} else {

    inicializarCatalogo();

}
