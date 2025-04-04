//carrinho
/*
let carrinho = [] //array vazio

function addProduto (produto){
    carrinho.push(produto) 
    console.log("carrinho", carrinho)
}
function removeUltimoProduto(){
    carrinho.pop();
    console.log("carrinho", carrinho)
}
addProduto("Arroz")
addProduto("Macarrão")
addProduto("Coca-Cola")
removeUltimoProduto()

*/

//fila
/*
let fila = []

fila.unshift("Eduarda") 
fila.unshift("Marianna")
fila.unshift("Tifanny")
fila.unshift("Maria Julia")
fila.unshift("Julia")

if(fila.length > 3) fila.pop()
console.log("Fila: ", fila)
*/

//estoque

/*
let estoque = ["Calça", "Regata", "Saia"]

function atualizarEstoque(novaPeca){
    estoque.unshift(novaPeca);
    estoque.pop();
    console.log("Estoque", estoque)
}
atualizarEstoque("Peça Nova")
atualizarEstoque("Outra Peça")
*/

//streaming

/*
let recomendacoes = ["VideoUm", "VideoDois", "VideoTres"]
let remocoes = 0; 

function removerVideo(){
    recomendacoes.pop(); 
        recomendacoes.push("Novo Video") 
        remocoes = 0; 
    }
    console.log("recomendacoes", recomendacoes)

removerVideo()
*/

// evento
/*
let eventos = ["Evento1", "Evendo3"]
function gerenciarEventos(novoEvento, indice, removerIndice){
    eventos.splice(indice, 0, novoEvento);
    if(removerIndice != undefined) eventos.splice(removerIndice, 1)
    console.log("Eventos", eventos)
}
gerenciarEventos("Evento2", 1)
*/

//chamada
/*
let listaChamada = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"]

let novaPosicao = 2
listaChamada.splice(novaPosicao, 0, "Fernanda") 
let indiceDesistente = listaChamada.indexOf("Carlos")
if (indiceDesistente !== -1) {
    listaChamada.splice(indiceDesistente, 1) 
}
console.log("Nova lista de chamada:", listaChamada)
*/

//jogador
/*
let listaEspera = ["Jogador1", "Jogador2", "Jogador3", "Jogador4"]

function iniciarPartida() {
    listaEspera.shift() 

    if (listaEspera.length < 3) {
        listaEspera.unshift("NovoJogador")
    }

    console.log("Lista de espera:", listaEspera)
}

iniciarPartida()
iniciarPartida()
iniciarPartida()
*/

//livros

/*
let catalogo = ["crepúsculo", "pequeno príncipe", "harry potter", "diario de um banana"]

function buscarLivro(nomeLivro) {
    let indice = catalogo.indexOf(nomeLivro)

    if (indice !== -1) {
        console.log(`Livro encontrado no índice: ${indice}`)
    } else {
        console.log("Erro: Livro não encontrado no catálogo.")
    }
}

buscarLivro("harry potter")     
buscarLivro("coraline") 
*/

//contato

/*
let contatos = ["Julia", "Paulo", "Misael ", "João", "Maria Fernanda"]

function encontrarContato() {
    let contato = contatos.find(nome => nome.length > 10)

    if (contato) {
        console.log("Contato encontrado:", contato)
    } else {
        console.log("Nenhum contato com mais de 10 caracteres.")
    }
}

encontrarContato()
*/