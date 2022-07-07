enum coresArcoIris {
  vermelho,
  laranja,
  amarelo,
  verde, 
  azul,
  anil,
  violenta,
};

const brilhaBrilha = ()  => {
  for (let index = 0; index < 7; index++) {
    const todasAsCores = coresArcoIris[index];
    console.log(todasAsCores);
  }
};

brilhaBrilha();
