export default function classificacaoAl(vetorPb,vetorPn,vetorPs,vetorPob1,vetorPob2,vetorPob3){
    
    
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