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
iconEmail.textContent = "email"
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

//criando div corpo 
let divCorpo = new criarTags('div')
body.appendChild(divCorpo)
divCorpo.classList.add('corpo')

//criando div sobre mim
let divSobreMim = new criarTags('div')
divCorpo.appendChild(divSobreMim)
divSobreMim.classList.add('sobreMim')


//sobre mim
let tituloSobreMim = new criarTags('h1')
divSobreMim.appendChild(tituloSobreMim)
tituloSobreMim.textContent = "Sobre mim"
let txtSobreMim = new criarTags('p')
divSobreMim.appendChild(txtSobreMim)
txtSobreMim.textContent = "informaçôes sobre voce"

//criando div experiencia
let divExperiencia = new criarTags('div')
divCorpo.appendChild(divExperiencia)
divExperiencia.classList.add('experiencia')

//experiencia
let tituloExperiencia = new criarTags('h1')
divExperiencia.appendChild(tituloExperiencia)
tituloExperiencia.textContent = "Experiencia"
let txtExperiencia = new criarTags('h2')
divExperiencia.appendChild(txtExperiencia)
txtExperiencia.textContent = "sua experiencia principal"
divExperiencia.appendChild(listaTags[2])  
let listaExperiencia1 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia1)
listaExperiencia1.textContent = "Função 1"
let listaExperiencia2 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia2)
listaExperiencia2.textContent = "Função 2"
let listaExperiencia3 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia3)
listaExperiencia3.textContent = "Função 3"

//segunda experiencia
let txtExperiencia2 = new criarTags('h2')
txtExperiencia2.textContent = "Sua segunda experiencia"
divExperiencia.appendChild(txtExperiencia2)
let ul2 = new criarTags('ul')
divExperiencia.appendChild(ul2)
let segundaListaExperienciaExperiencia1 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia1)
segundaListaExperienciaExperiencia1.textContent = "função 1"
let segundaListaExperienciaExperiencia2 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia2)
segundaListaExperienciaExperiencia2.textContent = "função 2"
let segundaListaExperienciaExperiencia3 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia3)
segundaListaExperienciaExperiencia3.textContent = "função 3"

//criando div educação
let divEducacao = new criarTags('div')
divCorpo.appendChild(divEducacao)
divEducacao.classList.add('educacao')


//educaçao 
let tituloEducacao = new criarTags('h1')
tituloEducacao.textContent = "Educação"
divEducacao.appendChild(tituloEducacao)
let anoTipo = new criarTags('h2')
anoTipo.textContent = "AAA-AAA|tipo"
divEducacao.appendChild(anoTipo)
let instituicao = new criarTags('h3')
instituicao.textContent = "Instituição"
divEducacao.appendChild(instituicao)

//educação 2

let anoTipo2 = new criarTags('h2')
anoTipo2.textContent = "AAA-AAA|tipo"
divEducacao.appendChild(anoTipo2)
let instituicao2 = new criarTags('h3')
instituicao2.textContent = "Instituição"
divEducacao.appendChild(instituicao2)

//educaçaõ 3

let anoTipo3 = new criarTags('h2')
anoTipo3.textContent = "AAA-AAA|tipo"
divEducacao.appendChild(anoTipo3)
let instituicao3 = new criarTags('h3')
instituicao3.textContent = "Instituição"
divEducacao.appendChild(instituicao3)

//criando div habilidades
let divHabilidades = new criarTags('div')
divCorpo.appendChild(divHabilidades)
divHabilidades.classList = "habilidades"

//habilidades
let tituloHabilidades = new criarTags('h1')
tituloHabilidades.textContent = "Habilidades"
divHabilidades.appendChild(tituloHabilidades)
let txtHabilidades = new criarTags('p')
txtHabilidades.textContent = "Suas hablilidades"
divHabilidades.appendChild(txtHabilidades)



function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}