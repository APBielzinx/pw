let tags = ['h1',
'p',
'ul',
'li',
'div',
'h2',
'h3',
'span']

let listaTags = []

let body = document.querySelector('body')

tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});



body.appendChild(listaTags[4])
listaTags[4].classList.add('cabecalho')

//nome
listaTags[4].appendChild(listaTags[0])
listaTags[0].textContent = "Nome"

//emprego
listaTags[4].appendChild(listaTags[5])
listaTags[5].textContent = "Emprego"

//telefone
listaTags[4].appendChild(listaTags[7])
listaTags[7].classList.add('material-symbols-outlined')
listaTags[7].textContent = "call"
listaTags[4].appendChild(listaTags[6])
listaTags[6].textContent = "1213123"

//emaill
let iconEmail  = new criarTags('span')
listaTags[4].appendChild(iconEmail)
iconEmail.classList.add('material-symbols-outlined')
iconEmail.textContent = "mail"
let txtEmail = new criarTags('h3')
listaTags[4].appendChild(txtEmail)
txtEmail.textContent = "exemple@exemple.com"


//rede social
let iconRedeSocial = new criarTags('span')
listaTags[4].appendChild(iconRedeSocial)
iconRedeSocial.classList.add('material-symbols-outlined')
iconRedeSocial.textContent = "language"
let txtredeSocial = new criarTags('h3')
listaTags[4].appendChild(txtredeSocial)
txtredeSocial.textContent = "@example"


function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}