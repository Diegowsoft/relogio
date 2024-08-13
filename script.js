function atualizarTempo() {
    var display = document.querySelector('.display');
    var agora = new Date();

    // Corrige o formato dos números para dois dígitos
    var horas = corrigirHorario(agora.getHours());
    var minutos = corrigirHorario(agora.getMinutes());
    var segundos = corrigirHorario(agora.getSeconds());

    var horario = horas + ':' + minutos + ':' + segundos;

    display.textContent = horario;
}

function corrigirHorario(numero) {
    if (numero < 10) {
        return '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

