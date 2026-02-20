// Função para calcular a média (equivalente à sua função real calcular_media_ping)
function calcularMediaPing(p1, p2, p3) {
    return (p1 + p2 + p3) / 3;
}

let continuar = 's';

while (continuar.toLowerCase() === 's') {
    console.log("\n--- CÁLCULO DE PING ---");

    let ping1 = parseFloat(prompt("Digite o valor do primeiro ping (ms):"));
    let ping2 = parseFloat(prompt("Digite o valor do segundo ping (ms):"));
    let ping3 = parseFloat(prompt("Digite o valor do terceiro ping (ms):"));

    let mediaPing = calcularMediaPing(ping1, ping2, ping3);

    let mensagem = `\n> A média de tempo de resposta é: ${mediaPing.toFixed(2)} ms`;
    console.log(mensagem);
    alert(mensagem);

    continuar = prompt("Deseja realizar outro cálculo? (s/n):");
}

console.log("\nPrograma finalizado. Até logo!");
alert("Programa finalizado. Até logo!");