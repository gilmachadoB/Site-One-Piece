const imagens={
    franky:"imagens/franky.png",
    robin:"imagens/robin.png",
    luffy:"imagens/luffy.png",
    zoro:"imagens/zoro.png",
    sanji:"imagens/sanji.png",
    chopper:"imagens/chopper.png",
    brook:"imagens/brook.png",
    usoop:"imagens/usopp.png",
    nami:"imagens/nami.png"
}
function trocarImagem(personagem){
    const banner=document.getElementById("banner");
    banner.src=imagens[
        personagem
    ]
}



