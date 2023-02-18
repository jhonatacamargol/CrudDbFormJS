function fazPost(url, body) {
    console.log("body=", body);
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "aplication/json");
    req.send(JSON.stringify(body));

    req.onload = function() {
        console.log(this.resText);
    }
    //return req.resText;
}

function cadastroClientes(e) {    
    e.preventDefault()
    const data = new FormData(e.target); 

    // let url = "http://localhost:3001/clientes";
    // let nome = document.getElementById('nome').value
    // let email = document.getElementById('email').value
    // let telefone = document.getElementById('telefone').value
    // let sexo = document.getElementById('sexo').value
    // let data = document.getElementById('data').value
    // let endereco = document.getElementById('endereco').value
    // let cidade = document.getElementById('cidade').value
    // let estado = document.getElementById('estado').value

    body = {
        "nome": data.get("nome"),
        "email": data.get("email"),
        "telefone": data.get("telefone"),
        "sexo": data.get("genero"),
        "data": data.get("data"),
        "endereco": data.get("endereco"),
        "cidade": data.get("cidade"),
        "estado": data.get("estado"),
    }
    debugger
    fazPost(url, body);
}

const form = document.getElementById("form");
form.addEventListener('submit', cadastroClientes)