let tags = ['h1',
'p',
'ul',
'li',
'div',
'h2',
'h3',
'i']

let listaTags = []

let body = document.querySelector('body')

tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

listaTags[0].textContent = "Nome"

body.appendChild(listaTags[4])
listaTags[4].classList.add('cabecalho')

//nome
listaTags[4].appendChild(listaTags[0])

//emprego
listaTags[4].appendChild(listaTags[5])
listaTags[5].textContent = "Emprego"

//telefone
listaTags[4].appendChild(listaTags[7])
listaTags[7].classList.add('bi bi-envelope')

function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}
