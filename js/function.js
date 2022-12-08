var nome = []
var idade = []
var temperatura = []
var genero = []
var cpf = []

var masculino = 0
var feminino = 0
var crianca = 0
var crianca_febre = 0
var adulto = 0
var adulto_febre = 0
var idoso = 0
var idoso_febre = 0

function enviar() {

    if ((document.querySelector('#nome').value) != '' &&
    (document.querySelector('#idade').value) != '' &&
    (document.querySelector('#temperatura').value) != '' &&
    (document.querySelector('#genero').value) != '' &&
    (document.querySelector('#cpf').value) != '') {

        if (total == 0) {
            total = total + 1

            nome.push(document.querySelector('#nome').value)
            console.log(nome)

            idade.push(document.querySelector('#idade').value)
            console.log(idade)

            temperatura.push(document.querySelector('#temperatura').value)
            console.log(temperatura)

            genero.push(document.querySelector('#genero').value)
            console.log(genero)

            cpf.push(document.querySelector('#cpf').value)
            console.log(cpf)

            for (var i = total - 1; i < total; i++) {
                if (genero[i] == 'masculino') {
                    masculino++
                }else if (genero[i] == 'feminino') {
                    feminino++
                }
        
        
                if (idade[i] < 18) {
                    crianca++
                    if (temperatura[i] > 37.8) {
                        crianca_febre++
                    }
                }else if (idade[i] >= 18 && idade[i] <= 50) {
                    adulto++
                    if (temperatura[i] > 37.8) {
                        adulto_febre++
                    }
                }else if (idade[i] > 50) {
                    idoso++
                    if (temperatura[i] > 37.8) {
                        idoso_febre++
                    }
                }
            }

            alert('Cadastro Enviado')
            document.querySelector('#nome').value = ''
            document.querySelector('#idade').value = ''
            document.querySelector('#temperatura').value = ''
            document.querySelector('#genero').value = ''
            document.querySelector('#cpf').value = ''

        }
        else {
            for (var i = 0; i < cpf.length; i) {
                if ((document.querySelector('#cpf').value) == cpf[i]) {
                    alert('CPF já foi digitado')
                    document.querySelector('#cpf').value = ''
                    i = 0
                    return
                } else {
                    i++
                }
            }

            total = total + 1
            nome.push(document.querySelector('#nome').value)
            console.log(nome)
            idade.push(document.querySelector('#idade').value)
            console.log(idade)
            temperatura.push(document.querySelector('#temperatura').value)
            console.log(temperatura)
            genero.push(document.querySelector('#genero').value)
            console.log(genero)
            cpf.push(document.querySelector('#cpf').value)
            console.log(cpf)


            for (var i = total - 1; i < total; i++) {
                if (genero[i] == 'masculino') {
                    masculino++
                }else if (genero[i] == 'feminino') {
                    feminino++
                }


                if (idade[i] < 18) {
                    crianca++
                    if (temperatura[i] > 37.8) {
                        crianca_febre++
                    }
                }else if (idade[i] >= 18 && idade[i] <= 50) {
                    adulto++
                    if (temperatura[i] > 37.8) {
                        adulto_febre++
                    }
                }else if (idade[i] > 50) {
                    idoso++
                    if (temperatura[i] > 37.8) {
                        idoso_febre++
                    }
                }
            }

            alert('Cadastro Enviado')
            document.querySelector('#nome').value = ''
            document.querySelector('#idade').value = ''
            document.querySelector('#temperatura').value = ''
            document.querySelector('#genero').value = ''
            document.querySelector('#cpf').value = ''
        }
    }
    else {
        alert('Você não preencheu todos os campos!')
    }
}

function resultado() {

    document.querySelector('#box2').style.display = "flex";
    document.querySelector('#box').style.display = "none";

    document.querySelector('#crianca-febre').value = ((crianca_febre / crianca)*100).toFixed(1)+'%';
    document.querySelector('#adulto-febre').value = ((adulto_febre / crianca)*100).toFixed(1)+'%';
    document.querySelector('#idoso-febre').value = ((idoso_febre / idoso)*100).toFixed(1)+'%';


    document.getElementById('feminino').value = feminino
    document.getElementById('masculino').value = masculino
    document.getElementById('total').value = total}


function voltar() {
    document.querySelector('#box2').style.display = "none";
    document.querySelector('#box').style.display = "flex";
    
}