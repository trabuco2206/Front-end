const botao = document.getElementById('add');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('saida');
const itens = []; //vetor

botao.addEventListener('click', function(){
    let valorEntrada = entrada.value;
    itens.push(valorEntrada);
    entrada.value = "";
    console.log(itens);
    saida();
});

function saida(){
    lista.innerHTML = "";

    for (let i = 0; i < itens.length; i++) {
        let li = document.createElement("li");
        li.textContent = itens[i];
        lista.appendChild(li);
    }
}

/*
botao.addEventListener('mouseover', function(){
    entrada.value = "Você passou em mim...";
});
*/