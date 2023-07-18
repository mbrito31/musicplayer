let musicasList = [
  {titulo:'I Miss the Misery', artista:'Halestorm', src:'musics/Halestorm - I Miss The Misery.mp3', img:'images/lzzy-hale.jpg.jpg'},

  {titulo:'Wendy Clear', artista:'Blink-182', src:'musics/Blink182 - Wendy Clear.mp3', img:'images/blink-182-jpg1.jpg'},

  {titulo:'Basket Case', artista:'Green Day', src:'musics/Green Day - Basket Case.mp3', img:'images/green-day-jpg2.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imageSong = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

playMusica(indexMusica);

// eventos 
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', timeBarra);


document.querySelector('.anterior').addEventListener('click', () => {
  indexMusica--;
  playMusica(indexMusica);
  tocarMusica();
})

document.querySelector('.proxima').addEventListener('click', () => {
  indexMusica++;
  playMusica(indexMusica);
  tocarMusica();
 
}) 

 const som1 = document.getElementById('audio1');
som1.onloadeddata = function() {
  let data = new Date(null);
  data.setSeconds(som1.duration);
  let duracao = data.toISOString().substr(15, 4);
  duracaoMusica.textContent = duracao;
}; 


// functions
function playMusica(index) {
  musica.setAttribute('src', musicasList[index].src);
  musica.addEventListener('loadeddata', () => {
    nomeMusica.textContent =  musicasList[index].titulo;
    nomeArtista.textContent = musicasList[index].artista;
    imageSong.src = musicasList[index].img;
    duracaoMusica.textContent = converterTempo(Math.floor(musica.duration));

  });
};

function tocarMusica() {
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
};

function pausarMusica() {
  musica.pause();
  document.querySelector('.botao-play').style.display = 'block';
  document.querySelector('.botao-pause').style.display = 'none';
};

function timeBarra() {
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent = converterTempo(Math.floor(musica.currentTime));
};

function converterTempo(segundos) {
  let campoMinuto = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if(campoSegundos < 10){
    campoSegundos = '0' + campoSegundos;
  }
  return campoMinuto+':'+campoSegundos;
  
}


