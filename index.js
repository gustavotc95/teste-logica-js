// Nível 1

// Desafio: Crie duas funcoes, uma que aceita campos e outra que ignora, ambas as funcoes recebem um OBJETO e um parametro que identifica quais campos para aceitar/ignorar

// Função Aceitar:

// Entrada: 
// {
//   name: 'Name',
//   email: 'Email',
//   phone: 'Phone'
// }

// Funcao: funcaoAceitar({
//   name: 'Name',
//   email: 'Email',
//   phone: 'Phone'
// }, 'name,email')

// Saida:
// {
//  name: 'Name',
//  email: 'Email'
// }

// ------------------------------------------------------------------------------ //

// Função Ignorar:

// Entrada: 
// {
//   name: 'Name',
//   email: 'Email',
//   phone: 'Phone'
// }

// Exemplo: funcaoIgnorar({
//   name: 'Name',
//   email: 'Email',
//   phone: 'Phone'
// }, 'name,email')

// Saida:
// {
//  phone: 'Phone'
// }

// OBS1: A funcao deve funcionar para OUTROS tipos de entrada, com campos diferentes
// OBS2: O objeto de entrada NÃO precisa ser um objeto nested
// Exemplo:
// {
//   name: 'Name',
//   details: {
//     name: 'NAME'
//   }
// }
// OBS3: Apenas JS Vanilla

// 
// 

//----------------
// Resolução 
// Função Aceitar:


var infosAceitar = {
    name: 'Gustavo Teixeira de Castro',
    email: 'gustavotc95@gmail.com',
    phone: {
        cell: '(37) 9.8833-9196',
        home: '(00) 0000-0000'
    },
    endereco: ''
};

function funcaoAceitar(entrada, parametros){
    var parametrosAceitar = parametros.replace(/\s+/g, '').split(',');
    respAceita = {}
    parametrosAceitar.forEach(element => {
      if(entrada[element] !== undefined){
        respAceita[element] = entrada[element]
      }
    });
    return respAceita
}

console.log(funcaoAceitar(infosAceitar, 'name, email'));

//----------------
// Resolução 
// Função Ignorar:


var infosIgnorar = {
    name: 'Gustavo Teixeira de Castro',
    email: 'gustavotc95@gmail.com',
    phone: '(37) 9.8833-9196'
};

function funcaoIgnorar(entrada, parametros){
    var parametrosIgnorar = parametros.replace(/\s+/g, '').split(',');
    respIgnorada = entrada
    parametrosIgnorar.forEach(element => {
        delete respIgnorada[element];
    });
    return respIgnorada
}

console.log(funcaoIgnorar(infosIgnorar, 'name, email'));