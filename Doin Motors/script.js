//Isso cria uma variável chamada imagens que armazena uma lista de URLs de imagens. Cada URL é uma string que representa o caminho para 
//uma imagem.
var imagens = ["img_carros/fundo1.png", "img_carros/fundo2.png", "img_carros/fundo3.png"]; // Lista de imagens
var imagemAtual = 0; // Índice da imagem atual

//Aqui, é criada uma variável chamada imagemAtual e inicializada com o valor 0, que representa o índice da imagem atual na lista.

function mudarImagem(delta) {
    //Define uma função chamada mudarImagem que recebe um parâmetro delta. Esta função será responsável por alterar a imagem exibida.
    imagemAtual += delta; // Incrementa ou decrementa o índice da imagem
    //Incrementa ou decrementa o índice da imagem atual com base no valor do parâmetro delta. Se delta for positivo, a imagem será avançada; 
    //se for negativo, será retrocedida.
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1; // Se for menor que 0, volta para a última imagem
    } else if (imagemAtual >= imagens.length) {
        imagemAtual = 0; // Se for maior que o comprimento da lista de imagens, volta para a primeira imagem
    }
    //Este bloco condicional verifica se o índice da imagem atual é menor que zero ou maior ou igual ao comprimento da lista de imagens.
    //Se for menor que zero, volta para a última imagem; se for maior ou igual ao comprimento da lista de imagens, volta para a primeira imagem.
    //Atualiza o atributo src da imagem com o id imagem_fundo1 para exibir a imagem correspondente ao índice atual na lista de imagens. 
    document.querySelector("#imagem_fundo1 img").src = imagens[imagemAtual]; // Define o src da imagem conforme o índice atual
}
//Atualiza as imagens conforme o botão direito ou esquerdo é acionado
var imagens = ["img_carros/fundo1.png", "img_carros/fundo2.png", "img_carros/fundo3.png"];

