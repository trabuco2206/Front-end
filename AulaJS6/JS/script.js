
const botao = document.getElementById('registrar');
const listaObj = [];
botao.addEventListener('click',
    function (){
        const login = {
            login: document.getElementById('usuario').value,
            senha: document.getElementById('senha').value
        };

        console.log(login);
        listaObj.push(login);
        imprimirObjeto(login);
        console.log(listaObj);
    }
);

function imprimirObjeto(objLogin){
    const impressao = document.getElementById('impressao');

    let pUsuario = document.createElement('p');
    pUsuario.textContent = objLogin.login;
    let pSenha = document.createElement('p');
    pSenha.textContent = objLogin.senha;

    impressao.appendChild(pUsuario);
    impressao.appendChild(pSenha);
}

function converterJson(){
    const json = JSON.stringify(listaObj);
    console.log(json);
}