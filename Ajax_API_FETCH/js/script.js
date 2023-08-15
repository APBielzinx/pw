document.addEventListener("DOMContentLoaded", function() {
    const itemTable = document.getElementById("itemTable").getElementsByTagName('tbody')[0];

    // Fazer a requisição HTTP
    fetch("http://localhost/Ajax_API_FETCH/lista_produto.json")
        .then(response => response.json())
        .then(data => {
            // Iterar pelos itens obtidos e adicioná-los à tabela
            data.forEach(item => {
                const newRow = itemTable.insertRow();
                const idCell = newRow.insertCell(0);
                const nomeCell = newRow.insertCell(1);
                const descricaoCell = newRow.insertCell(2);
                const precoCell = newRow.insertCell(3);
                const fornecedorCell = newRow.insertCell(4);
                const url_imagemCell = newRow.insertCell(5);


                idCell.innerHTML = item.codigo;
                nomeCell.innerHTML = item.nome;
                descricaoCell.innerHTML = item.descricao;
                precoCell.innerHTML = item.preco;
                fornecedorCell.innerHTML = item.fornecedor;
                url_imagemCell.innerHTML = item.url_imagem;
                newRow.classList.add("product-row"); // Adicione a classe para fazer a linha clicável
                newRow.setAttribute("data-product-id", item.codigo); // Adicione o atributo de dados para identificar o produto
                newRow.setAttribute("data-product-nome", item.nome);
                newRow.setAttribute("data-product-descricao", item.descricao);
                newRow.setAttribute("data-product-preco", item.preco);
                newRow.setAttribute("data-product-fornecedor", item.fornecedor);
                newRow.setAttribute("data-product-url", item.url_imagem);
            });

            // Delegação de eventos para as linhas de produtos
            itemTable.addEventListener("click", function(event) {
                const clickedRow = event.target.closest(".product-row");
                if (clickedRow) {
                    const productId = clickedRow.getAttribute("data-product-id");
                    const productNome = clickedRow.getAttribute("data-product-nome");
                    const productDescricao = clickedRow.getAttribute("data-product-descricao");
                    const productPreco = clickedRow.getAttribute("data-product-preco");
                    const productFornecedor= clickedRow.getAttribute("data-product-fornecedor");
                    const productUrl = clickedRow.getAttribute("data-product-url");
                    window.location.href = "produto.html?id=" + productId + "&nome="+productNome + "&descricao="+productDescricao + "&preco="+productPreco + "&fornecedor="+productFornecedor + "&url="+productUrl; // Redireciona para a página de detalhes do produto com o ID
                }
            });
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
});
