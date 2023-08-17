function carregar(){
    let msg = document.getElementById(`msg`) //Pegando o texto do html
    let imagem = document.getElementById("imagem") //Pegando a imagem do html
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora >= 0 && hora <12){
        //manha
        imagem.src = `assets/manha.jpg`
        document.body.style.background = `#f9e4cf`
    }else if(hora >= 12 && hora < 18){
        //tarde
        imagem.src = `assets/tarde.jpg`
        document.body.style.background = `#d98b4d`
    }else{
        //noite
        imagem.src = `assets/noite.jpg`
        document.body.style.background = `#052c55`
    }
}
