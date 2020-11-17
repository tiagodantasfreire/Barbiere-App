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

function agendarHorario(){
    
    if (document.getElementById('agendar').style.visibility == "hidden") {
        document.getElementById('agendar').style.visibility = "visible"
        document.getElementById('barbearia').style.height = '180px';

    } else {
        document.getElementById('agendar').style.visibility = "hidden"
        document.getElementById('barbearia').style.height = '120px';
    }
}