// Eu ainda não configurei a API, então esse código não vai funcionar até eu fazer isso.
// Mas a ideia é essa, buscar os últimos jogos do Corinthians e mostrar na página.
//tenho que fazer uma chave de API no footystats.org slk
//por enqt vai ficar o Widget ( https://footystats.org/ site dos caras)

  async function carregarUltimosJogos() {
    const url = 'https://api.footystats.org/fixtures?team_id=624&last=5';
    const lista = document.getElementById('lista-jogos');

    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer SUA_CHAVE_DE_API'
        }
      });
      const dados = await response.json();

      dados.data.forEach(jogo => {
        const li = document.createElement('li');
        li.textContent = `${jogo.home_team} ${jogo.home_score} x ${jogo.away_score} ${jogo.away_team}`;
        lista.appendChild(li);
      });
    } catch (erro) {
      console.error('Erro ao carregar os jogos:', erro);
      lista.innerHTML = '<li>Não foi possível carregar os jogos.</li>';
    }
  }

  carregarUltimosJogos();

