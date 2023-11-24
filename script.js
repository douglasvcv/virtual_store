const itens =[

    {
        id:0,
        nome:'camiseta',
        img:'./iphone_img.jpg',
        quantidade:0
    },
    {
        id:1,
        nome:'short',
        img:'./iphone_img.jpg',
        quantidade:0
    },
    {
        id:2,
        nome:'sapato',
        img:'./iphone_img.jpg',
        quantidade:0
    }
]

inicializarLoja = ()=>{
    var containerProdutos = document.getElementById('produtos')
    itens.map((val)=>{
        containerProdutos.innerHTML+=`
        <div class="produto-single">
            <img src="`+val.img+`" width="230"/>
            <p> `+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
        </div>
        `
    })
}
inicializarLoja()

atualizarCarrinho = ()=>{
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML=""
    itens.map((val)=>{
        if(val.quantidade>0){
            containerCarrinho.innerHTML+=`
           <p>`+val.nome+` / quantidade: `+val.quantidade+`</p>
           <hr>
            `
        }
    })
}
var link = document.getElementsByTagName('a')
for(i=0; i<link.length; i++){
    link[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        itens[key].quantidade++
        atualizarCarrinho()
        return false
    })


}