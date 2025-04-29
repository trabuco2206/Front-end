
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');

const botao = document.getElementById('botao');

botao.addEventListener('click',
    function(){
        
        let obj = {nome: nome.value, telefone: telefone.value};

        processarObj(obj);
    }
);

function processarObj(obj){
    console.log(obj.nome);
    console.log(obj.telefone);

    const conteudo = document.getElementById('conteudo');

    let p = document.createElement('p');
    p.className = "classStyle";
    let jsonObj = JSON.stringify(obj);

    p.textContent = jsonObj;
    conteudo.appendChild(p);
}