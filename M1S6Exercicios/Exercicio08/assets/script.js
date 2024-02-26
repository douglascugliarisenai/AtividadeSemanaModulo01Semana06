function logar() {
    const username = document.getElementById('user');
    const password = document.getElementById('password');

    let validaUser = validarCampos(username);
    let validaPass = validarCampos(password);

    if (validaUser && validaPass) {
        alert('Bem vindo ao Sistema de Receitas do Chefe!')

        window.location.href = "./pages/home.html";
        return false;
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