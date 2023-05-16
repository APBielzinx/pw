
var urlAtual = window.location.href;
var urlClass = new URL(urlAtual);

//cabeçalho
var nome = urlClass.searchParams.get("nome");
var emprego = urlClass.searchParams.get("emprego");
var telefone = urlClass.searchParams.get("telefone");
var email = urlClass.searchParams.get("email");
var redeSocial = urlClass.searchParams.get("redeSocial");
var dataDeNascimento = urlClass.searchParams.get("dataDeNascimento");
var endereco = urlClass.searchParams.get("endereco")
//Corpo
//Sobre Mim
var sobreMim = urlClass.searchParams.get("sobreMim");


//Experiencia
//primeira Experiencia
var ExperienciaTitulo = urlClass.searchParams.get("Experiencia");
var Experiencia1 = urlClass.searchParams.get("Experiencia1");
var Experiencia2 = urlClass.searchParams.get("Experiencia2");
var Experiencia3 = urlClass.searchParams.get("Experiencia3");

//segunda Experiencia
var ExperienciaTitulo2 = urlClass.searchParams.get("Experiencia2");
var segundaExperiencia1 = urlClass.searchParams.get("segundaExperiencia1");
var segundaExperiencia2 = urlClass.searchParams.get("segundaExperiencia2");
var segundaExperiencia3 = urlClass.searchParams.get("segundaExperiencia3");

//Educação 
//educação 1
var educacaoAno = urlClass.searchParams.get("educacaoAno");
var educacaoCurso = urlClass.searchParams.get("educacaoCurso");
var educacaoInstituicao = urlClass.searchParams.get("educacaoInstituicao");

//Idiomas
//idioma1
var idioma = urlClass.searchParams.get("idioma");

//habilidade
//habilidade1
var habilidade = urlClass.searchParams.get("habilidade");
//habilidade2
var habilidade2 = urlClass.searchParams.get("habilidade2");
//habilidade3
var habilidade3 = urlClass.searchParams.get("habilidade3");
//habilidade4
var habilidade4 = urlClass.searchParams.get("habilidade4");



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

//criando div nome
let divNome = new criarTags('div')
listaTags[4].appendChild(divNome)
divNome.classList = "nome"

//nome
divNome.appendChild(listaTags[0])
listaTags[0].textContent = nome

//criando div emprego
let divEmprego = new criarTags('div')
listaTags[4].appendChild(divEmprego)
divEmprego.classList = "emprego"

//emprego
divEmprego.appendChild(listaTags[5])
listaTags[5].textContent = emprego

//criando div telefone
let divtelefone = new criarTags('div')
listaTags[4].appendChild(divtelefone)
divtelefone.classList = "telefone"

//telefone
divtelefone.appendChild(listaTags[7])
listaTags[7].classList.add('material-symbols-outlined')
listaTags[7].textContent = "call"
divtelefone.appendChild(listaTags[6])
listaTags[6].textContent = telefone

//criando div Email
let divEmail = new criarTags('div')
listaTags[4].appendChild(divEmail)
divEmail.classList = "email"

//emaill
let iconEmail = new criarTags('span')
divEmail.appendChild(iconEmail)
iconEmail.classList.add('material-symbols-outlined')
iconEmail.textContent = "email"
let txtEmail = new criarTags('h3')
divEmail.appendChild(txtEmail)
txtEmail.textContent = email


//criando div rede social
let divRedeSocial = new criarTags('div')
listaTags[4].appendChild(divRedeSocial)
divRedeSocial.classList = "redeSocial"

//rede social
let iconRedeSocial = new criarTags('span')
divRedeSocial.appendChild(iconRedeSocial)
iconRedeSocial.classList.add('material-symbols-outlined')
iconRedeSocial.textContent = "language"
let txtredeSocial = new criarTags('h3')
divRedeSocial.appendChild(txtredeSocial)
txtredeSocial.textContent = redeSocial

//criando div data de nascimento
let divDataDeNasc = new criarTags('div')
listaTags[4].appendChild(divDataDeNasc)
divDataDeNasc.classList = "DataDeNasc"

// data de nascimento
let iconDataDeNasc = new criarTags('span')
divDataDeNasc.appendChild(iconDataDeNasc)
iconDataDeNasc.classList.add('material-symbols-outlined')
iconDataDeNasc.textContent = "calendar_month"
let txtDataDeNasc = new criarTags('h3')
divDataDeNasc.appendChild(txtDataDeNasc)
txtDataDeNasc.textContent = dataDeNascimento

//criando div endereco
let divendereco = new criarTags('div')
listaTags[4].appendChild(divendereco)
divendereco.classList = "endereco"

// data de nascimento
let iconendereco = new criarTags('span')
divendereco.appendChild(iconendereco)
iconendereco.classList.add('material-symbols-outlined')
iconendereco.textContent = "home"
let txtendereco = new criarTags('h3')
divendereco.appendChild(txtendereco)
txtendereco.textContent = endereco

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
tituloSobreMim.textContent = "SOBRE MIM"
let txtSobreMim = new criarTags('p')
divSobreMim.appendChild(txtSobreMim)
txtSobreMim.textContent = sobreMim 

//criando div experiencia
let divExperiencia = new criarTags('div')
divCorpo.appendChild(divExperiencia)
divExperiencia.classList.add('experiencia')

//criando div linhaVertical
let divLinhaVerticalExperiencia = new criarTags('div')
divLinhaVerticalExperiencia.classList = "linhaVertical"



//experiencia
let tituloExperiencia = new criarTags('h1')
tituloExperiencia.textContent = "EXPERIÊNCIA"
divExperiencia.appendChild(tituloExperiencia)
divExperiencia.appendChild(divLinhaVerticalExperiencia)
let txtExperiencia = new criarTags('h2')
divLinhaVerticalExperiencia.appendChild(txtExperiencia)
txtExperiencia.textContent = ExperienciaTitulo
divLinhaVerticalExperiencia.appendChild(listaTags[2])
let listaExperiencia1 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia1)
listaExperiencia1.textContent = Experiencia1
let listaExperiencia2 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia2)
listaExperiencia2.textContent = Experiencia2
let listaExperiencia3 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia3)
listaExperiencia3.textContent = Experiencia3

/*//segunda experiencia
let txtExperiencia2 = new criarTags('h2')
txtExperiencia2.textContent = "Advogado Trabalhista | Pacheco e Lacerda 2025 até 2027"
divLinhaVerticalExperiencia.appendChild(txtExperiencia2)
let ul2 = new criarTags('ul')
divLinhaVerticalExperiencia.appendChild(ul2)
let segundaListaExperienciaExperiencia1 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia1)
segundaListaExperienciaExperiencia1.textContent = "Realização de audiências trabalhistas"
let segundaListaExperienciaExperiencia2 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia2)
segundaListaExperienciaExperiencia2.textContent = "Elaboração de processos judiciais"
let segundaListaExperienciaExperiencia3 = new criarTags('li')
ul2.appendChild(segundaListaExperienciaExperiencia3)
segundaListaExperienciaExperiencia3.textContent = "Gerenciamento de carteira de cliente"
*/
//criando div linhaVerticalEducação
let divLinhaVerticalEducação = new criarTags('div')
divLinhaVerticalEducação.classList = "linhaVertical"


//criando div educação
let divEducacao = new criarTags('div')
divCorpo.appendChild(divEducacao)
divEducacao.classList.add('educacao')


//educaçao 
let tituloEducacao = new criarTags('h1')
tituloEducacao.textContent = "EDUCAÇÃO"
divEducacao.appendChild(tituloEducacao)
divEducacao.appendChild(divLinhaVerticalEducação)

let anoTipo = new criarTags('h2')
anoTipo.textContent = educacaoAno+" | "+educacaoCurso
divLinhaVerticalEducação.appendChild(anoTipo)
let instituicao = new criarTags('h3')
instituicao.textContent = educacaoInstituicao
divLinhaVerticalEducação.appendChild(instituicao)

/*//educação 2

let anoTipo2 = new criarTags('h2')
anoTipo2.textContent = "2023-2025 | Mestrado em Direito"
divLinhaVerticalEducação.appendChild(anoTipo2)
let instituicao2 = new criarTags('h3')
instituicao2.textContent = "Faculdade Faustino"
divLinhaVerticalEducação.appendChild(instituicao2)

//educação 3

let anoTipo3 = new criarTags('h2')
anoTipo3.textContent = "2027- até o momento | Doutorado em Direito"
divLinhaVerticalEducação.appendChild(anoTipo3)
let instituicao3 = new criarTags('h3')
instituicao3.textContent = "Faculdade Faustino"
divLinhaVerticalEducação.appendChild(instituicao3)
*/

//Idiomas

let divIdiomas = new criarTags('div')
divCorpo.appendChild(divIdiomas)
divIdiomas.classList = "idiomas"

//criando div linhaVerticalIdiomas
let divlinhaVerticalIdiomas = new criarTags('div')
divlinhaVerticalIdiomas.classList = "linhaVertical"

//idiomas
let tituloIdiomas = new criarTags('h1')
tituloIdiomas.textContent = "Idiomas"
divIdiomas.appendChild(tituloIdiomas)
divIdiomas.appendChild(divlinhaVerticalIdiomas)

let txtIdiomas = new criarTags('p')
txtIdiomas.textContent = idioma
divlinhaVerticalIdiomas.appendChild(txtIdiomas)




//criando div habilidades
let divHabilidades = new criarTags('div')
divCorpo.appendChild(divHabilidades)
divHabilidades.classList = "habilidades"

//criando div linhaVerticalHabilidades
let divlinhaVerticalHabilidades = new criarTags('div')
divlinhaVerticalHabilidades.classList = "linhaVertical"

//habilidades
let tituloHabilidades = new criarTags('h1')
tituloHabilidades.textContent = "HABILIDADES"
divHabilidades.appendChild(tituloHabilidades)
divHabilidades.appendChild(divlinhaVerticalHabilidades)

let txtHabilidades = new criarTags('p')
txtHabilidades.textContent = habilidade
divlinhaVerticalHabilidades.appendChild(txtHabilidades)
/*
let txtHabilidades2 = new criarTags('p')
txtHabilidades2.textContent = "Tomada de decisões"
divlinhaVerticalHabilidades.appendChild(txtHabilidades2)

let txtHabilidades3 = new criarTags('p')
txtHabilidades3.textContent = "Resolução de problemas difíceis"
divlinhaVerticalHabilidades.appendChild(txtHabilidades3)

let txtHabilidades4 = new criarTags('p')
txtHabilidades4.textContent = "Inteligência emocional"
divlinhaVerticalHabilidades.appendChild(txtHabilidades4)
*/

let botaoPrint = new criarTags("button")
body.appendChild(botaoPrint)
botaoPrint.classList ="btn-3"
botaoPrint.id ="print"
botaoPrint.textContent ="Imprimir"

var botaoPrintE = document.getElementById("print")

botaoPrintE.addEventListener('click',tirarPrint)

function tirarPrint(){
    botaoPrint.style.display = "none"
    window.print()
    botaoPrint.style.display = ""

}


function criarTags(tag) {
    let novaTag = document.createElement(tag)
    return novaTag
}
