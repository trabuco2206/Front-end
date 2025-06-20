// fazer o cadastro
const botao = document.getElementById('btnCadastrar');
//const listaUsuariosCadastrados = [];

// cadastrar
botao.addEventListener('click', function (){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objUsuario = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    };

    let indice = document.getElementById('indice').value;

    if (indice !== "") {
        //edição
        listaUsuariosCadastrados[indice] = objUsuario;
        document.getElementById('indice').value = "";
    } else {
        //criação
        listaUsuariosCadastrados.push(objUsuario);
    }

    const listaJson = JSON.stringify(listaUsuariosCadastrados);
    localStorage.setItem('usuarios', listaJson);
    listar();
}

);

//listar
function listar(){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('listaUsuariosCadastrados');
    tabela.innerHTML = "";
    listaUsuarios.forEach((objeto, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${objeto.usuario}</td>
            <td>${objeto.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="removerUsuario(${index})">Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

function removerUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (confirm("Você realmente quer remover?")) {
        listaUsuarios.splice(index,1);
        let listajson = JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", listajson);
        listar();
    }    
}

function editarUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioEditar = listaUsuarios[index];
    document.getElementById("usuario").value = usuarioEditar.usuario;
    document.getElementById("senha").value = usuarioEditar.senha;
    document.getElementById("indice").value = index;
}

listar();