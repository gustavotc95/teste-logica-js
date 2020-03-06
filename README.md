# teste-logica-js

Nível 1

Desafio: Crie duas funcoes, uma que aceita campos e outra que ignora, ambas as funcoes recebem um OBJETO e um parametro que identifica quais campos para aceitar/ignorar

Função Aceitar:

Entrada: 
{
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
}

Funcao: funcaoAceitar({
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
}, 'name,email')

Saida:
{
 name: 'Name',
 email: 'Email'
}

------------------------------------------------------------------------------ //

Função Ignorar:

Entrada: 
{
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
}

Exemplo: funcaoIgnorar({
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
}, 'name,email')

Saida:
{
 phone: 'Phone'
}

OBS1: A funcao deve funcionar para OUTROS tipos de entrada, com campos diferentes
OBS2: O objeto de entrada NÃO precisa ser um objeto nested
Exemplo:
{
  name: 'Name',
  details: {
    name: 'NAME'
  }
}
OBS3: Apenas JS Vanilla
