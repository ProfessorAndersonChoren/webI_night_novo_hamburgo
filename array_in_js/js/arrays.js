// Como criar um array (Vetor ou Matriz)
let alunos = ["Maria", "José", "João"]
let notas = new Array(7, 10, 5)

console.log('Antes: '+alunos.length)
let qtd = alunos.push("Cleide", "Marco", "Viviane")
console.log("Depois: " + qtd);
console.table(alunos)
qtd = alunos.unshift("Henrique", "Claudia", "Pedro")
console.log("Depois: " + qtd);
console.table(alunos);

let element = alunos.pop()
console.log('Removido o aluno ' + element)
console.table(alunos)
element = alunos.shift()
console.log("Removido o aluno " + element);
console.table(alunos);

// Buscar e Listar
// Buscar um elemento pelo seu índice
console.log('O 4° aluno é ' + alunos[3])
// Listar/mostrar todos os elementos
alunos.forEach((item,indice) => {
  console.log("O " + (indice+1) + "° aluno é o " + item);
})