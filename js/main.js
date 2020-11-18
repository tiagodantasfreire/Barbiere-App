//BARBEARIA -- login usuário

function mostrarBarbearias() {
    readAllBarbearias(function (status, dados) {
        
        document.getElementById('barbearias').innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            
            var barbearia = dados[i];
            
            var str = ""; 
            
            str += "<div class='barbearia' id='barbearia' onclick='agendarHorario()'>"
            str += "<div class='barbearia-foto'>";
            str += "<img src='"+barbearia.imagem+"'/>";
            str += "</div>";
            str += "<br>";
            str += "<div class='barbearia-info'>";
            str += "<h1 class='barber-nome'>"+barbearia.nome+"</h1>";
            str += "<p class ='endereco'>"+barbearia.endereco+"</p>";
            str += "<p class='horario'><i class='far fa-clock'></i>"+barbearia.horario+"</p>";
            str += "<div class = 'btnAgendar' id='agendar'>";
            str += "<a href='./agendar.html'>Agendar Horário</a>";
            str += "</div>"
            str += "</div>";
            str += "</div>";
            str += "<br>"
            
           document.getElementById('barbearias').innerHTML += str;
                      
        }
    });
}

function mostrarBarberariaNome(){
    var nome = document.getElementById("pesquisa").value;
    gerarFormBarbeariaNome(nome);
}

function gerarFormBarbeariaNome(nome){
    readBarbeariaByNome(nome,function (status, dados) {  
        var nome = dados.nome;
        var imagem = dados.imagem;
        var endereco = dados.endereco;
        var horario = dados.horario;
        
        document.getElementById('resultado-pesquisa').innerHTML = "";
        
        var str=""  
        
        str += "<br>"
        str += "<div class='barbearia' id='barbearia' onclick='agendarHorario()'>"
        str += "<div class='barbearia-foto'>";
        if (imagem){
            str += "<img src='"+imagem+"'/>";
        }else{
            str += "<img src='https://images.unsplash.com/photo-1516470930795-6ba2564824aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'>";
        }
        str += "</div>";
        str += "<div class='barbearia-info'>";
        str += "<br>";
        str += "<h1 class='barber-nome'>"+nome+"</h1>";
        str += "<p class ='endereco'>"+endereco+"</p>";
        str += "<p class='horario'><i class='far fa-clock'></i>"+horario+"</p>";
        str += "<div class = 'btnAgendar' id='agendar'>";
        str += "<a href='./agendar.html'>Agendar Horário</a>";
        str += "</div>"
        str += "</div>";
        str += "</div>";
            
        document.getElementById('resultado-pesquisa').innerHTML += str;
    });
}

//BARBEARIA - login adm

function mostrarBarbeariasAdm(){
    readAllBarbearias(function (status, dados) {
        
        document.getElementById('barbearia-adm').innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            
            barbearia = dados[i];

            var str = ""; 
            
            str += "<br>";
            str += "<div class='barbearia' id='barbearia'>";
            str += "<div class='barbearia-foto'>";
            str += "<img src='"+barbearia.imagem+"'/>";
            str += "</div>";
            str += "<div class='barbearia-info'>";
            str += "<br>";
            str += "<h1 class='barber-nome'>"+barbearia.nome+"</h1>";
            str += "<p class ='endereco'>"+barbearia.endereco+"</p>";
            str += "<p class='horario'><i class='far fa-clock'></i>"+barbearia.horario+"</p>";
            str += "<div class='del-edit'>";
            str += "<button class='btnDeletar' onclick=\"apagarBarbearia('" + barbearia.nome + "')\">Deletar</button><br>";
            str += "<button class='btnEditar' onclick=\"atualizarFormBarbearia('"+barbearia.nome+"'),trocaBotaoAtualizar()\">Editar</button>";
            str += "</div>"
            str += "</div>";
            str += "</div>";
            str += "<br>";
            
           document.getElementById('barbearia-adm').innerHTML += str;
                      
        }
    });
}

function mostrarBarbeariaNomeAdm(){
    var nome = document.getElementById("buscarBarbearia").value;
    gerarFormBarbeariaNomeAdm(nome);
}

function apagarBarbearia(nome) {
    if(confirm("Deseja apagar os dados da Barbearia com Nome " + nome + "?")) {
        deleteBarbearia(nome, function(status, dados) {mostrarBarbeariasAdm()});
    } else {
        console.log("Desistiu de apagar");
    }
}

function adicionarBarbearia(){
    
    var barbearia = {
        nome: document.getElementById('nome').value,
        endereco: document.getElementById('endereco').value,
        horario: document.getElementById('horario').value,
        imagem: document.getElementById('imagem').value   
    }
    
    createBarbearia(barbearia, function (status, dados){mostrarBarbeariasAdm()});
    clearFormBarbearia()
}

function atualizarBarbearia() {
    event.preventDefault();
    
    var barbearia = {
        nome: document.getElementById('nome').value,
        endereco: document.getElementById('endereco').value,
        horario: document.getElementById('horario').value,
        imagem: document.getElementById('imagem').value   
    }
    
    updateBarbearia(barbearia, function (status, dados){
        mostrarBarbeariasAdm(),
        document.getElementById("resultado-adm").innerHTML = ""
    });
    clearFormBarbearia()
}

function atualizarFormBarbearia(barbearia) {
    readBarbeariaByNome(barbearia,function (status, dados) {    
        document.getElementById("nome").value = dados.nome;
        document.getElementById("endereco").value = dados.endereco;
        document.getElementById("horario").value = dados.horario;
        document.getElementById("imagem").value = dados.imagem;    
    });
}

function gerarFormBarbeariaNomeAdm(nome){
    readBarbeariaByNome(nome,function (status, dados) {  
        var nome = dados.nome;
        var imagem = dados.imagem;
        var endereco = dados.endereco;
        var horario = dados.horario;
        
        document.getElementById('resultado-adm').innerHTML = "";
        
        var str = "";
        
        str += "<br>";
        str += "<div class='barbearia' id='barbearia'>";
        str += "<div class='barbearia-foto'>";
        if (imagem){
            str += "<img src='"+imagem+"'/>";
        }else{
            str += "<img src='https://images.unsplash.com/photo-1516470930795-6ba2564824aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'>";
        }
        str += "</div>";
        str += "<div class='barbearia-info'>";
        str += "<br>";
        str += "<h1 class='barber-nome'>"+nome+"</h1>";
        str += "<p class ='endereco'>"+endereco+"</p>";
        str += "<p class='horario'><i class='far fa-clock'></i>"+horario+"</p>";
        str += "<div class='del-edit'>";
        str += "<button class='btnDeletar' onclick=\"apagarBarbearia('" + nome + "')\">Deletar</button>";
        str += "<button class='btnEditar' onclick=\"atualizarFormBarbearia('" + nome + "'),trocaBotaoAtualizar()\">Editar</button>";
        str += "</div>"
        str += "</div>";
        str += "</div>";
        str += "<br>";
            
        document.getElementById('resultado-adm').innerHTML += str;
    });
}


//CLIENTES -- login usuário

function adicionarCliente(){
    
    var cliente = {
        nome: document.getElementById('txtNome').value,
        email: document.getElementById('txtEmail').value,
        telefone: document.getElementById('txtTel').value,
        senha: document.getElementById('txtSenha').value   
    }
    
    createCliente(cliente, function (status, dados){});
}

//CLIENTES -- login adm

function adicionarClienteAdm(){
    
    var cliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        senha: document.getElementById('senha').value   
    }
    
    createCliente(cliente, function (status, dados){});
}

function mostrarClientesAdm(){
    readAllClientes(function (status, dados) {
        
        document.getElementById('resultado-cliente').innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            
            cliente = dados[i];

            var str = ""; 
            
            str += "<div class='cliente' id='cliente'>";
            str += "<div class='cliente-info'>";
            str += "<br>";
            str += "<h1 class='cliente-nome'>"+cliente.nome+"</h1>";
            str += "<p class ='telefone'>"+cliente.telefone+"</p>";
            str += "<p class='email'>"+cliente.email+"</p>";
            str += "<div class='del-edit-user'>";
            str += "<button class='btnDeletar' onclick=\"apagarCliente('" + cliente.email + "')\">Deletar</button><br>";
            str += "<button class='btnEditar' onclick=\"atualizarFormCliente('" + cliente.email+ "'),trocaBotaoAtualizarCliente()\">Editar</button>";
            str += "</div>";
            str += "</div>";
            str += "</div>";
            str += "<br>";
            
            document.getElementById('resultado-cliente').innerHTML += str;
                      
        }
    });
}

function mostrarClienteEmailAdm(){
    var email = document.getElementById("buscarCliente").value;
    gerarFormClienteAdm(email);
}

function gerarFormClienteAdm(email){
    readClienteByEmail(email,function (status, dados) {
        
        document.getElementById('resultado-email').innerHTML = "";         

        var str = ""; 
            
        str += "<div class='cliente' id='cliente'>";
        str += "<div class='cliente-info'>";
        str += "<br>";
        str += "<h1 class='cliente-nome'>"+dados.nome+"</h1>";
        str += "<p class ='telefone'>"+dados.telefone+"</p>";
        str += "<p class='email'>"+dados.email+"</p>";
        str += "<div class='del-edit-user'>";
        str += "<button class='btnDeletar' onclick=\"apagarCliente('" + dados.email + "')\>Deletar</button><br>";
        str += "<button class='btnEditar' onclick=\"atualizarFormCliente('" + dados.email + "'),trocaBotaoAtualizarCliente()\>Editar</button>";
        str += "</div>";
        str += "</div>";
        str += "</div>";
        str += "<br>";
            
        document.getElementById('resultado-email').innerHTML += str;
                      
    });
}

function apagarCliente(email) {
    if(confirm("Deseja apagar dados do Cliente com Email " + email + "?")) {
        deleteCliente(email, function(status, dados) {mostrarClientesAdm()});
    } else {
        console.log("Desistiu de Apagar")
    }
}

function atualizarCliente() {
    event.preventDefault();
    
    var cliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,  
    }
    
    updateCliente(cliente, function (status, dados){
        mostrarClientesAdm(),
        document.getElementById("resultado-email").innerHTML = "";
    });
    clearFormCLiente()
}

function atualizarFormCliente(cliente) {
    readClienteByEmail(cliente,function (status, dados) {    
        document.getElementById("nome").value = dados.nome;
        document.getElementById("telefone").value = dados.telefone;
        document.getElementById("email").value = dados.email;  
    });
}

//FUNÇÕES
function clearFormBarbearia(){
        document.getElementById('nome').value = "";
        document.getElementById('endereco').value = "";
        document.getElementById('horario').value = "";
        document.getElementById('imagem').value = "";
}

function clearFormCLiente(){
        document.getElementById('nome').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('email').value = "";
}

function trocaBotaoAtualizar(){   
        botao.innerHTML = "Alterar";
        document.getElementById('nome').readOnly = true;
        document.getElementById("botao").setAttribute( "onClick", "atualizarCliente(),trocaBotaoCadastrarCLiente();" )
}

function trocaBotaoAtualizarCliente(){   
        botao.innerHTML = "Alterar";
        document.getElementById('email').readOnly = true;
        document.getElementById('senha').readOnly = true;
        document.getElementById("botao").setAttribute( "onClick", "atualizarCliente(),trocaBotaoCadastrarCliente();" )
}

function trocaBotaoCadastrar(){
    botao.innerHTML = "Cadastrar";
    document.getElementById('nome').readOnly = false;
    document.getElementById("botao").setAttribute( "onClick", "adicionarBarbearia()" )
}

function trocaBotaoCadastrarCliente(){
    botao.innerHTML = "Cadastrar";
    document.getElementById('email').readOnly = false;
    document.getElementById('senha').readOnly = false;
    document.getElementById("botao").setAttribute( "onClick", "adicionarClienteAdm()" )
}