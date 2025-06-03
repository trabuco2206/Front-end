// para fazer login
const entrar = document.getElementById('entrar');
entrar.addEventListener('click',
    function(){
        const usuariosCadastrados = JSON.parse(this.localStorage.getItem('usuario'));

        let login;
        let senha;

        let valido = usuariosCadastrados.find(
            user => user.usuario === login && user.senha === senha
        );
    }
);