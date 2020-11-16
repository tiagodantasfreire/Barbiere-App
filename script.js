contador = 0;
function mostrarSenha(){
    contador++;
    if (contador % 2 == 1) {
        document.getElementById('txtSenha').type = 'text';
        document.getElementById('mostrarSenha').innerHTML = 'Ocultar senha';
    } else {
        document.getElementById('txtSenha').type = 'password';
        document.getElementById('mostrarSenha').innerHTML = 'Mostrar senha';
    }
}