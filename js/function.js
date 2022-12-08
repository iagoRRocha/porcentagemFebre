var nome = []
var idade = []
var temperatura = []
var genero = []

var masculino = 0
var feminino = 0

var crianca = 0
var crianca_febre = 0
var adulto = 0
var adulto_febre = 0
var idoso = 0
var idoso_febre = 0

var por_cri = 0
var por_adul = 0
var por_ido = 0

var total = 0

function enviar() {
    total = total + 1


    nome.push(document.querySelector('#nome').value)
    console.log(nome)

    idade.push(document.querySelector('#idade').value)
    console.log(idade)


    temperatura.push(document.querySelector('#temperatura').value)
    console.log(temperatura)

    genero.push(document.querySelector('#genero').value)
    console.log(genero)


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
}

function resultado() {
    document.querySelector('#nome').value = ''
    document.querySelector('#idade').value = ''
    document.querySelector('#temperatura').value = ''
    document.querySelector('#genero').value = ''


    document.querySelector('#box2').style.display = "flex";
    document.querySelector('#box').style.display = "none";



    por_cri = (crianca_febre / crianca)*100
    por_adul = (adulto_febre / adulto)*100
    por_ido = (idoso_febre / idoso)*100

    console.log(document.querySelector('#adulto_febre').value)

    document.getElementById('adulto_febre').value = por_adul.toFixed(1)+'%';
    document.getElementById('crianca_febre').value = por_cri.toFixed(1)+'%';
    document.getElementById('idoso_febre').value = por_ido.toFixed(1)+'%';
    document.getElementById('feminino').value = feminino
    document.getElementById('masculino').value = masculino
    document.getElementById('total').value = total
}

function voltar() {
    document.querySelector('#box2').style.display = "none";
    document.querySelector('#box').style.display = "flex";
}