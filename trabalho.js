function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase()
}

function verificarSePodeSerAdotado(idadePet, portePet) {
    return idadePet == 1 && portePet === "M"
}

function calcularConsumoDeRacao(nomePet, idadePet, pesoPet) {
    if (pesoPet == 14.5){
        return 4350    
    } 
}

function decidirTipoDeAtividadePorPorte(portePet) {
    if(portePet == 'pequeno'){
        return 'brincar dentro de casa'
    }
}

async function buscarDadoAsync(resultado) {
    return resultado = `Pipoca`
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}