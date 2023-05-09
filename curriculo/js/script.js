
var urlAtual = window.location.href;
var urlClass = new URL(urlAtual);

//cabeçalho
var nome = urlClass.searchParams.get("nome");
var emprego = urlClass.searchParams.get("emprego");
var telefone = urlClass.searchParams.get("telefone");
var email = urlClass.searchParams.get("email");
var redeSocial = urlClass.searchParams.get("redeSocial");

//Corpo
//Sobre Mim
var sobreMim = urlClass.searchParams.get("sobreMim");
var dataDeNascimento = urlClass.searchParams.get("dataDeNascimento");

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

//educação 2
var educacaoTitulo2 = urlClass.searchParams.get("educacaoTitulo2");
var educacaoAnoCurso2 = urlClass.searchParams.get("educacaoAnoCurso2");
var educacaoInstituicao2 = urlClass.searchParams.get("educacaoInstituicao2");

//educação 3
var educacaoTitulo3 = urlClass.searchParams.get("educacaoTitulo3");
var educacaoAnoCurso3 = urlClass.searchParams.get("educacaoAnoCurso3");
var educacaoInstituicao3 = urlClass.searchParams.get("educacaoInstituicao3");

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
listaTags[5].textContent = "Advogado Trabalhista"

//criando div telefone
let divtelefone = new criarTags('div')
listaTags[4].appendChild(divtelefone)
divtelefone.classList = "telefone"

//telefone
divtelefone.appendChild(listaTags[7])
listaTags[7].classList.add('material-symbols-outlined')
listaTags[7].textContent = "call"
divtelefone.appendChild(listaTags[6])
listaTags[6].textContent = "(12) 3456-7890"

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
txtredeSocial.textContent = "@grandesite"


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
txtSobreMim.textContent = "Advogado trabalhista com 5 anos de experiência. Atuação em processos judiciais, promovendo defesa de empresas e de clientes em ações trabalhistas. Capacidade de solucionar problemas mais complexos e de fazer negociações inteligentes." + "minha data de nascimento é" + dataDeNascimento

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
txtExperiencia.textContent = "Estagiário| Borcelle 2023 até 2024"
divLinhaVerticalExperiencia.appendChild(listaTags[2])
let listaExperiencia1 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia1)
listaExperiencia1.textContent = "Emissão de guias"
let listaExperiencia2 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia2)
listaExperiencia2.textContent = "Protocolos de prazos"
let listaExperiencia3 = new criarTags('li')
listaTags[2].appendChild(listaExperiencia3)
listaExperiencia3.textContent = "Controle de parecer jurídico"

//segunda experiencia
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
anoTipo.textContent = "2018-2022 | Graduação em Direito"
divLinhaVerticalEducação.appendChild(anoTipo)
let instituicao = new criarTags('h3')
instituicao.textContent = "Faculdade Faustino"
divLinhaVerticalEducação.appendChild(instituicao)

//educação 2

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
txtIdiomas.textContent = "ingles"
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
txtHabilidades.textContent = "Gestão de pessoas"
divlinhaVerticalHabilidades.appendChild(txtHabilidades)

let txtHabilidades2 = new criarTags('p')
txtHabilidades2.textContent = "Tomada de decisões"
divlinhaVerticalHabilidades.appendChild(txtHabilidades2)

let txtHabilidades3 = new criarTags('p')
txtHabilidades3.textContent = "Resolução de problemas difíceis"
divlinhaVerticalHabilidades.appendChild(txtHabilidades3)

let txtHabilidades4 = new criarTags('p')
txtHabilidades4.textContent = "Inteligência emocional"
divlinhaVerticalHabilidades.appendChild(txtHabilidades4)

function criarTags(tag) {
    let novaTag = document.createElement(tag)
    return novaTag
}
