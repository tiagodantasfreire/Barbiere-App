//URL BASE
const BASE_URL = "http://localhost:3000";

//TRATAMENTO DE ERROS
function logMessage(method, statusCode, data) {
    if (statusCode < 200 || statusCode > 299) {
        console.error("[" + method + "] retornou código " + statusCode, data);
    } else {
        console.log("[" + method + "] retornou código " + statusCode);
    }
}

//////////////
//BARBEARIAS//
//////////////

//READ BARBEARIA
function readAllBarbearias(callback) {
    var url = BASE_URL + '/barbearias';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readAllBarbearias', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//READ BARBEARIA BY NOME
function readBarbeariaByNome(nome,callback) {
    var url = BASE_URL + '/barbearias/' + nome;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
    var status = xhr.status;
        logMessage('readBarbeariaByNome', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//CREATE BARBEARIA
function createBarbearia(barbearia, callback) {
    var url = BASE_URL + '/barbearias';
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(barbearia);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('createBarbearia', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

//DELETE BARBEARIA
function deleteBarbearia(nome, callback) {
    var url = BASE_URL + '/barbearias/' + nome;
    var xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url, true);
    
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('deleteBarbearia', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//UPDATE BARBEARIA
function updateBarbearia(barbearia, callback) {
    var url = BASE_URL + '/barbearias/' + barbearia.nome;
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(barbearia);
    
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('updateBarbearia', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

////////////
//CLIENTES//
////////////

//READ CLIENTES
function readAllClientes(callback) {
    var url = BASE_URL + '/clientes';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readAllClientes', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//READ CLIENTE BY EMAIL
function readClienteByEmail(email,callback) {
    var url = BASE_URL + '/clientes/' + email;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
    var status = xhr.status;
        logMessage('readClienteByEmail', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//CREATE CLIENTE
function createCliente(cliente, callback) {
    var url = BASE_URL + '/clientes';
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(cliente);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('createCliente', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

//DELETE CLIENTE
function deleteCliente(email, callback) {
    var url = BASE_URL + '/clientes/' + email;
    var xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url, true);
    
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('deleteCliente', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

//UPDATE CLIENTE
function updateCliente(cliente, callback) {
    var url = BASE_URL + '/clientes/' + cliente.email;
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(cliente);
    
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('updateCliente', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}