var nome = prompt('Olá, qual seu nome?')

var idade = prompt(`Ótimo, ${nome}! Quantos anos você tem?`)
const segPorMin = 60;
const minsPorHor = 60;
const horPorDia = 24;
const semPorAno = 52;
const segPorDia = segPorMin * minsPorHor * horPorDia;
const diasPorSemana = 7;
const diasPorAno = 365;           

const semanasVivo = idade * semPorAno;
const diasVivo = semanasVivo * diasPorSemana
var semanas = semanasVivo
var dias = diasVivo
var copasDoMundo = `${idade / 4}`
var segundos = `${segPorDia * diasPorAno * idade}`

var mensagem = `Olá ${nome}! Você está vivx há...`

var fun = (`Outras informações interessantes! 
Um dia tem ${segPorDia} segundos!
Um ano tem ${segPorDia * diasPorAno} segundos!
A cada 4 anos há uma Copa do Mundo
Uma década (10 anos) tem ${diasPorAno * 10   }`)

document.querySelector('.semanas').innerHTML = semanas;
document.querySelector('.dias').innerHTML = dias;
document.querySelector('.copas').innerHTML = copasDoMundo;
document.querySelector('.segundos').innerHTML = segundos;
document.querySelector('.main').innerHTML = mensagem;
