//variaveis

var aluno01 ={
    nome:"kaue",
    idade:17,
    peso:60,
    altura:1.80,
    imc: null
}
var aluno02 ={
    nome:"Gabriel",
    idade:22,
    peso:20,
    altura:1.99,
    imc: null
 }
var aluno03 ={
        nome:"Kauan",
        idade:13,
        peso:60,
        altura:1.50,
        imc: null
}
var aluno04 ={
         nome:"Richard",
         idade:19,
         peso:80,
         altura:1.68,
         imc: null
}
var aluno05 ={
        nome:"Rafael",
        idade:17,
        peso:70,
        altura:1.70,
        imc: null
}

var aluno06 ={
    nome: "claudio", 
    idade: 12,
    peso: 50,
    altura: 1.69,
    imc: null
}

var aluno07 ={
    nome: "julia", 
    idade: 32,
    peso: 79,
    altura: 1.76,
    imc: null
}

var aluno08 ={
    nome: "João", 
    idade: 18,
    peso: 90,
    altura: 1.89,
    imc: null
}

var aluno09 ={
    nome: "pedro", 
    idade: 52,
    peso: 69,
    altura: 1.79,
    imc: null
}

var aluno10 ={
    nome: "julio", 
    idade: 15,
    peso: 88,
    altura: 1.99,
    imc: null
}
var aluno11 ={
    nome: "jubair", 
    idade: 11,
    peso: 77,
    altura: 1.66,
    imc: null
}
var aluno12 ={
    nome: "claudemir", 
    idade: 18,
    peso: 120,
    altura: 1.78,
    imc: null
}
var aluno13 ={
    nome: "ana", 
    idade: 20,
    peso: 78,
    altura: 1.68,
    imc: null
}

var aluno14 ={
    nome: "larissa", 
    idade: 14,
    peso: 70,
    altura: 1.79,
    imc: null
}

var aluno15 ={
    nome: "Matheus", 
    idade: 16,
    peso: 60,
    altura: 1.70,
    imc: null
}

var aluno16 ={
    nome: "juliana", 
    idade: 18,
    peso: 80,
    altura: 1.99,
    imc: null
}

var aluno17 ={
    nome: "juliano", 
    idade: 12,
    peso: 50,
    altura: 1.69,
    imc: null
}

var aluno18 ={
    nome: "fernando", 
    idade: 10,
    peso: 100,
    altura: 1.50,
    imc: null
}

var aluno19 ={
    nome: "claudinha", 
    idade: 14,
    peso: 59,
    altura: 1.89,
    imc: null
}

var aluno20 ={
    nome: "Giovanni", 
    idade: 19,
    peso: 80,
    altura: 1.60,
    imc: null
}

var classificacaoPb = 0
var classificacaoPn = 0
var classificacaoPs = 0
var classificacaoPob1 = 0
var classificacaoPob2 = 0
var classificacaoPob3 = 0
var vetorPb = [];
var vetorPn = [];
var vetorPs = [];
var vetorPob1 = [];
var vetorPob2 = [];
var vetorPob3 = [];

//variaveis FIM

//função de clacular imc

function calcimc(obj){
     let {peso,nome,altura} = obj

     var resultado = peso/(altura*altura)
     let classificacao
    
    

   resultado = resultado.toFixed(1)

    if (resultado<=18.5) {
        classificacao ="baixo peso"
        classificacaoPb = classificacaoPb + 1
       
        vetorPb.push(nome)
        
      
     

    }else if((resultado >= 18.6) && (resultado <= 24.9 )){
        classificacao ="peso normal"
        classificacaoPn = classificacaoPn + 1
       
        vetorPn.push(nome)
       

    }else if((resultado >= 25) && (resultado <= 29.9 )){
        classificacao ="sobrepeso"
        classificacaoPs = classificacaoPs + 1
        
        vetorPs.push(nome)
       

    }else if((resultado >= 30) && (resultado <= 34.9 )){
        classificacao ="obesidade grau 1"
        classificacaoPob1 = classificacaoPob1 + 1
        
        vetorPob1.push(nome)


    }else if((resultado >= 35) && (resultado <= 39.9 )){
        classificacao ="obesidade grau 2"
       classificacaoPob2 = classificacaoPob2 + 1 

       vetorPob2.push(nome)


    }else if(resultado>40){
        classificacao ="obesidade grau 3"
        classificacaoPob3 = classificacaoPob3 + 1
      
        vetorPob3.push(nome)


    }
    
 
  
  
}

//função de calcular imc FIM

//funçao de classificação geral

function classificacaoGeral(classificacaoPb,classificacaoPn,classificacaoPs,classificacaoPob1,classificacaoPob2,classificacaoPob3){
   
    console.log(`\n a quantidade de alunos com o peso baixo é ${classificacaoPb}`)
    console.log(`\n a quantidade de alunos com o peso normal é ${classificacaoPn}`)
    console.log(`\n a quantidade de alunos com o soberepeso é ${classificacaoPs}`)
    console.log(`\n a quantidade de alunos com o obesidade grau 1 é ${classificacaoPob1}`)
    console.log(`\n a quantidade de alunos com o obesidade grau 2 é ${classificacaoPob2}`)
    console.log(`\n a quantidade de alunos com o obesidade grau 3 é ${classificacaoPob3}`)
   


 
}

//funçao de classificação geral FIM

//funçao de classificação por aluno 

function classificacaoAl(vetorPb,vetorPn,vetorPs,vetorPob1,vetorPob2,vetorPob3){
    
    
   console.log('\n \n  Os alunos Classificados na categoria peso Baixo são')
   
   if(vetorPb.length < 1){
        console.log("não ha alunos nessa categoria...")
   } else {
    vetorPb.forEach(function (item) {
        console.log(`\n ${item}`);
     
    });
   }
   

     console.log('\n \n Os alunos Classificados na categoria peso normal são')


     if(vetorPn.length < 1){
        console.log("não ha alunos nessa categoria...")
    } else {
        vetorPn.forEach(function (item) {
        console.log(`\n ${item}`);
     
    });
    }

  console.log('\n \n Os alunos Classificados na categoria sobrepeso são')


  if(vetorPs.length < 1){
    console.log("não ha alunos nessa categoria...")
} else {
    vetorPs.forEach(function (item) {
    console.log(`\n ${item}`);
 
});
}

  console.log('\n \n Os alunos Classificados na categoria obesidade grau 1 são')

  if(vetorPob1.length < 1){
    console.log("não ha alunos nessa categoria...")
} else {
    vetorPob1.forEach(function (item) {
    console.log(`\n ${item}`);
 
});
}

  console.log('\n \n Os alunos Classificados na categoria obesidade grau 2 são')


  if(vetorPob2.length < 1){
    console.log("não ha alunos nessa categoria...")
} else {
    vetorPob2.forEach(function (item) {
    console.log(`\n ${item}`);
 
});
}

console.log('\n Os alunos Classificados na categoria obesidade grau 3 são')


if(vetorPob3.length < 1){
    console.log("não ha alunos nessa categoria...")
} else {
vetorPob3.forEach(function (item) {
    console.log(`\n ${item}`);
 
});
}

}
//funçao de classificação por aluno FIM 
 


    //chamando a função de calcular imc

    calcimc(aluno01)
    calcimc(aluno02)
    calcimc(aluno03)
    calcimc(aluno04)
    calcimc(aluno05)
    calcimc(aluno06)
    calcimc(aluno07)
    calcimc(aluno08)
    calcimc(aluno09)
    calcimc(aluno10)
    calcimc(aluno11)
    calcimc(aluno12)
    calcimc(aluno13)
    calcimc(aluno14)
    calcimc(aluno15)
    calcimc(aluno16)
    calcimc(aluno17)
    calcimc(aluno18)
    calcimc(aluno19)
    calcimc(aluno20)

 //chamando a funçao de calcular imc FIM 

   //chamando a funçao de Classificação geral 

    classificacaoGeral(classificacaoPb,classificacaoPn,classificacaoPs,classificacaoPob1,classificacaoPob2,classificacaoPob3)
  
    //chamando a funçao de Classificação geral FIM 

    //chamando a funçao de Classificação por aluno

    classificacaoAl(vetorPb,vetorPn,vetorPs,vetorPob1,vetorPob2,vetorPob3)
    //chamando a funçao de Classificação por aluno FIM

    




