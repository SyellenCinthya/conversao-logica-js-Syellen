// Declaração de variáveis
let teste1, teste2, teste3, mediaMB, mediaMbps;
const tempoFixo = 10;

// Entrada de dados (usando prompt e convertendo para número)
teste1 = Number(prompt("Digite os MB transferidos no Teste 1:"));
teste2 = Number(prompt("Digite os MB transferidos no Teste 2:"));
teste3 = Number(prompt("Digite os MB transferidos no Teste 3:"));

// Cálculos
mediaMB = (teste1 + teste2 + teste3) / 3;
mediaMbps = (mediaMB * 8) / tempoFixo;

// Saída de dados (Template Strings facilitam a exibição)
console.log(`
      RELATÓRIO DE VELOCIDADE        
Tempo de cada teste: ${tempoFixo} segundos
Consumo Médio: ${mediaMB.toFixed(2)} MB
Velocidade Média: ${mediaMbps.toFixed(2)} Mbps
`);

alert("Relatório gerado no Console (aperte F12)!");