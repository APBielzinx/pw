import {calcimc,variaveis} from './calcimc.js';

import retornaAlunos from "./alunos.js";

import classificacaoGeral from "./classificacaoGeral.js";

import classificacaoAl from './classificacaoAl.js';


var listaDeAlunos = retornaAlunos()

for(var i = 0; i <= 19; i++){
    calcimc(listaDeAlunos[i])
    
} 

var vars = variaveis()

classificacaoGeral(vars[0],vars[1],vars[2],vars[3],vars[4],vars[5])

classificacaoAl(vars[6],vars[7],vars[8],vars[9],vars[10],vars[11])
