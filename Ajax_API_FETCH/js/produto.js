const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("nome") 
const productDescricao = urlParams.get("descricao") 
const productPreco = urlParams.get("preco") 
const productFornecedor = urlParams.get("fornecedor") 
const producturl = urlParams.get("url") 

console.log(productName)

document.getElementById("productNome").textContent = productName;
document.getElementById("productDescricao").textContent = productDescricao;
document.getElementById("productPreco").textContent = productPreco;
document.getElementById("productFornecedor").textContent = productFornecedor;
document.getElementById("productUrl").textContent = producturl;