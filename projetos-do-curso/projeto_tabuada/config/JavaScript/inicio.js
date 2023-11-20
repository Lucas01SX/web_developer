/*
Constante:

const email = 'joao@hcode.com.br';
*/

/*
Declaração de variáveis, mesmo que a variável seja definida por var:, let também define variáveis

var email = 'joao@hcode.com.br';

let = variável local
*/

let email = 'joao@hcode.com.br';

email = 'glaucio@hcode.com.br';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}`);

/*
acima foi utilizados duas maneiras de chamar a variável e-mail, tanto concatenando, quanto com associação;
case sensytive
*/

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log("O botão foi clicado");
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log("O mouse está sobre o formulário.");
});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {
    console.log("O mouse saiu do formulário.");
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    /*console.log("Formulário enviado! aqui vai o Ajax!!");*/
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    /*console.log(email, password); */

    let json = {
        /* email: email */
        email,
        password
    };

    /*console.log(json);

    let stringJSON = JSON.stringify(json);
    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);
    console.log(jsonParse);
    console.log(jsonParse.email);
    console.log(jsonParse.password);
    */

    /*if (json.email !== " ") {
        console.log("O campo foi preenchido!");
    }*/

    if (!json.email) {
        console.error("O campo e-mail deve ser preenchido!!");
    } else if (!json.password) {
        console.error("O campo password deve ser preenchido!");
    } else {
        console.info("Dados validados com sucesso!");
    }
});