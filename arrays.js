var valores = [8, 1, 7, 2, 9];

console.log(valores[3]);

// investe o array
console.log("array invertido: " + valores.reverse());

for (var pos = 0; pos < valores.length; pos ++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];

carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array ("BMW", "Yamaha", "Honda")

// calcular a média de todos os numeros de um array]

var soma = 0;

for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);

// o join transforma o separador 
var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.join('|'));

//retira o primeiro elemento
var retirado = arr1.shift();
console.log(retirado);


console.log("posição do numero 3: " + arr1.indexOf(3));

//acrescentar um numero na minha array
arr1.push(7);
console.log(arr1);

// exclui o ultimo elemento
arr1.pop();
console.log(arr1);

var ar = [-5, 10, 15, 20, -3, 89];

var arr2 = [1, 2, 3, 4, 5, 6, 7];

arr2.splice(1,1);

console.log(arr2);


var nomes = ["Maria", "joão", "Lucas", "Pedro"];

// Splice altera o nome da variável nomes
var novos = nomes.splice(1, 1, "Luiz");
console.log(nomes);
console.log(novos);

var pais = ["Brasil", "Argentina", "Colombia"];

// Unshift adiciona um elemento na variável pais
pais.unshift("Uruguai");
console.log(pais);


var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];

var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);
console.log(empresa);

var numeros = [1,2,3,4,5,6,7,8,9,10]

// existem duas formas de utilizar o filter

//1º forma
var resultado = numeros.filter(item => item %2 == 0);
console.log(resultado);

//2º forma
var numerosFiltrados = numeros.filter(

    function(valor){
        return valor > 5;
        }
)
console.log(numerosFiltrados);

//3º forma

function buscarvalores(valor){
    return valor < 5;
}
var numerosencontrados = numeros.filter(buscarvalores);
console.log(numerosencontrados);


//4 forma

var r1 = numeros.filter((valor) =>{
    return valor > 5;
});

console.log(r1)

//5 forma


var r2 = numeros.filter(valor => valor > 5);

console.log(r2)

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Artur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoaslistagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
    }
)

var pessoaslistagem2 = funcionarios.filter(
    function(valor){
        return valor.nome.length <5
    }
)
console.log(pessoaslistagem2)

var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletronico"},
    {id: 2, descricao: "Notebook", categoria: "Eletronico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"}
]

var produtolistagem = produtos.filter(
    function(valor){
        return valor.categoria == "Eletronico"
    }
)
console.log(produtolistagem)
