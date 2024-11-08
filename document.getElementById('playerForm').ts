document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const posicao = document.getElementById('posicao').value;
    const estatisticas = document.getElementById('estatisticas').value;
    const objetivos = document.getElementById('objetivos').value;

    const playerData = document.createElement('li');
    playerData.textContent = `Nome: ${nome}, Idade: ${idade}, Posição: ${posicao}, Estatísticas: ${estatisticas}, Objetivos: ${objetivos}`;

    document.getElementById('playerData').appendChild(playerData);

    document.getElementById('playerForm').reset();
});
