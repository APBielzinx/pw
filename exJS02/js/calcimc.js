

export default function calcimc(obj){


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
   
 //console.log(`o imc do ${nome} é ${resultado}` )


}

export function variaveis(){

    var variaveis = [  classificacaoPb = 0,
        classificacaoPn = 0,
         classificacaoPs = 0,
         classificacaoPob1 = 0,
        classificacaoPob2 = 0,
         classificacaoPob3 = 0,
        vetorPb = [],
         vetorPn = [],
         vetorPs = [],
         vetorPob1 = [],
         vetorPob2 = [],
         vetorPob3 = [],
    ]

    return variaveis
}


/*
classificacaoAl(vetorPb,vetorPn,vetorPs,vetorPob1,vetorPob2,vetorPob3)
*/





