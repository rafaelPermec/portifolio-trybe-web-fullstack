enum funcionalidades {
  salvar,
  imprimir,
  abrir,
  visualizar,
  fechar,
};

const estudar: string = `${funcionalidades[2]}, ${funcionalidades[3]}, passar ${funcionalidades.fechar} horas lendo documentações, praticar por ${funcionalidades.fechar} horas, ${funcionalidades[0]}, ${funcionalidades[4]}`

console.log(estudar);
