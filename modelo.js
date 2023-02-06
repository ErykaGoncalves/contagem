function calcular() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')



    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Por favor, inserir número maior que 0")
    }
    else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        }
        else {
            //contagem decrescente 
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }

        }
    }
}