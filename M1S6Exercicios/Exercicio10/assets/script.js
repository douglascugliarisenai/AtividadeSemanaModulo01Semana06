function logar() {
    const username = document.getElementById('user');
    const password = document.getElementById('password');

    let validaUser = validarCampos(username);
    let validaPass = validarCampos(password);
    let validaCampo = validaUser && validaPass;

    if (validaCampo) {
        if (validarCredenciais(username, password)) {
            alert('Bem vindo ao Sistema de Receitas do Chefe!')

            window.location.href = "./pages/home.html";
            return false;
        } else {
            alert('Favor inserir uma credencial correta!')
        }
    }

    return false
}

function validarCampos(atributo) {
    if (atributo.value === "") {
        atributo.style.border = '1px solid red';
        return false;
    } else {
        atributo.style.border = '';
        return true;
    }
}

function validarCredenciais(user, pass) {
    if (user.value.trim() === 'admin' && pass.value.trim() === 'admin') {
        return true;
    }
}