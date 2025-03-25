let usuariosArray = [];

function adicionarUsuario() {
    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;

    if (nome.trim() === "" || email.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const emailExiste = usuariosArray.some(usuario => usuario.email === email);
    if (emailExiste) {
        alert("Este email já está cadastrado!");
        return;
    }

    const usuario = { nome, email };
    usuariosArray.push(usuario);
    console.log(usuariosArray);
    adicionarUsuarioNaTela(usuario);
    
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

function adicionarUsuarioNaTela(usuario) {
    const lista = document.getElementById("listaUsers");
    const li = document.createElement("li");
        li.innerHTML = `
        <span>${usuario.nome} - ${usuario.email}</span>
        <button onclick='removeUsuario("${usuario.email}")'>Remover</button>
    `;
    lista.appendChild(li);
}

function removeUsuario(email) {
    usuariosArray = usuariosArray.filter(usuario => usuario.email !== email);
    console.log("Usuário removido!");
    atualizarListaUsuarios();
}

function atualizarListaUsuarios() {
    const lista = document.getElementById("listaUsers");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar mais

    usuariosArray.forEach(usuario => {
        adicionarUsuarioNaTela(usuario);
    });
}

function exibirUsuarios() {
    usuariosArray.forEach(usuario => {
        console.log(`Usuário: ${usuario.nome} - Email: ${usuario.email}`);
    });
}

