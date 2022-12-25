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
var porcentagem = []
var total = 0

function enviar() {

    if ((document.querySelector('#nome').value) != '' &&
        (document.querySelector('#idade').value) != '' &&
        (document.querySelector('#temperatura').value) != '' &&
        (document.querySelector('#genero').value) != '' &&
        (document.querySelector('#cpf').value) != '') {

        if (total == 0) {
            total = total + 1

            nome.push(document.querySelector('#nome').value)
            idade.push(document.querySelector('#idade').value)
            temperatura.push(document.querySelector('#temperatura').value)
            genero.push(document.querySelector('#genero').value.toLowerCase())
            cpf.push(document.querySelector('#cpf').value)



            for (var i = total - 1; i < total; i++) {
                if (genero[i] == 'masculino') {
                    masculino++
                } else if (genero[i] == 'feminino') {
                    feminino++
                }

                if (idade[i] < 18) {
                    crianca++
                    if (temperatura[i] > 37.8) {
                        crianca_febre++
                    }
                } else if (idade[i] >= 18 && idade[i] <= 50) {
                    adulto++
                    if (temperatura[i] > 37.8) {
                        adulto_febre++
                    }
                } else if (idade[i] > 50) {
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
            idade.push(document.querySelector('#idade').value)
            temperatura.push(document.querySelector('#temperatura').value)
            genero.push(document.querySelector('#genero').value.toLowerCase())
            cpf.push(document.querySelector('#cpf').value)


            for (var i = total - 1; i < total; i++) {
                if (genero[i] == 'masculino') {
                    masculino++
                } else if (genero[i] == 'feminino') {
                    feminino++
                }


                if (idade[i] < 18) {
                    crianca++
                    if (temperatura[i] > 37.8) {
                        crianca_febre++
                    }
                } else if (idade[i] >= 18 && idade[i] <= 50) {
                    adulto++
                    if (temperatura[i] > 37.8) {
                        adulto_febre++
                    }
                } else if (idade[i] > 50) {
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

    if (crianca_febre == 0 && crianca == 0) {
        document.querySelector('#crianca-febre').value = '0%';
    } else {
        porcentagem[0] = (crianca_febre / crianca) * 100
        document.querySelector('#crianca-febre').value = porcentagem[0].toFixed(1) + '%';
    }

    if (adulto_febre == 0 && adulto == 0) {
        document.querySelector('#adulto-febre').value = '0%';
    } else {
        porcentagem[1] = (adulto_febre / adulto) * 100
        document.querySelector('#adulto-febre').value = porcentagem[1].toFixed(1) + '%';
    }

    if (idoso_febre == 0 && idoso == 0) {
        document.querySelector('#idoso-febre').value = '0%';
    } else {
        porcentagem[2] = (idoso_febre / idoso) * 100
        document.querySelector('#idoso-febre').value = porcentagem[2].toFixed(1) + '%';
    }


    document.querySelector('#feminino').value = feminino
    document.querySelector('#masculino').value = masculino
    document.querySelector('#total').value = total
}


function voltar() {
    document.querySelector('#box2').style.display = "none";
    document.querySelector('#box').style.display = "flex";

}