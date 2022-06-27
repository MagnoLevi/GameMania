function salvaLogin(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email != '' && senha != ''){
        if(senha == 12345){
            window.location.href = "index.html"
        } else {
            alert('senha errada');
            document.getElementById("senha").value = ''
        }
    } else {
        alert('senha ou email vazios')
    }
}

function mostrarSenha() {
    const olho = document.getElementById('olho');
    const olhoSlash = document.getElementById('olho-slash');
    const senha = document.getElementById('senha');

    if(olho.style.display == 'none') {
        olhoSlash.style.display = 'none';
        olho.style.display = 'flex';
        senha.type = 'text';
    } else {
        olhoSlash.style.display = 'flex';
        olho.style.display = 'none';
        senha.type = 'password';
    }
};