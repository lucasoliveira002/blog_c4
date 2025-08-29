const posts = [
    {
        titulo: "Morango do Amor: Talvez eu seja o único brasileiro que não experimentoukkkk",
        resumo: "Falaram por aí que quebra os dentes. Os dentistas devem estar felizes com isso.",
        link: "post1.html",
        data: "2025-08-01",
        imagem: "../images/icons/morango.jpeg"
    },
    {
        titulo: "Uma breve história do servidor de minecraft com meus  amiguinhos",
        resumo: "Nesse post você irá descobrir a história do servidor de minecraft que tive com alguns amigos e todas as confusões que teve nele.",
        link: "post2.html",
        data: "2025-08-28",
        imagem: "../images/icons/jogos.jpg"
    },
    // Adicione mais posts aqui
];

posts.sort((a, b) => new Date(b.data) - new Date(a.data));
const recentes = posts.slice(0, 3);

window.addEventListener('DOMContentLoaded', () => {
    const postsDiv = document.querySelector('.posts');
    postsDiv.innerHTML = '';
    recentes.forEach(post => {
        postsDiv.innerHTML += `
            <article class="post">
                <div class="conteudo-post">
                    <div class="imagem-post">
                        <img src="images/${post.imagem.replace('.html', '.jpg')}" alt="${post.imagem}" width="100" height="100">
                    </div>
                    <div class="texto-post">
                        <h2>${post.titulo}</h2>
                        <p>${post.resumo}</p>
                        <a href="${post.link}">Read more</a>
                    </div>
                </div>                
            </article>
        `; //Eu não sei como a imagem está sendo chamada (??????) Se tá funcionando, não mexe
    });
});