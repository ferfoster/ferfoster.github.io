function calculateProposal() {
    // Obter os valores de entrada
    const currentRent = parseFloat(document.getElementById('currentRent').value);
    const iptu = parseFloat(document.getElementById('iptu').value);
    const insurancePercent = parseFloat(document.getElementById('insurancePercent').value);
    const availableBudget = parseFloat(document.getElementById('availableBudget').value);

    // Calcular valor total atual (Aluguel + IPTU)
    const currentTotal = currentRent + iptu;
    
    // Calcular o seguro no valor atual do aluguel
    const insuranceAmount = ((currentRent +iptu) * insurancePercent) / 100;

    // Calcular a proposta ajustada
    const targetTotal = availableBudget;
    const proposedRent = (targetTotal - iptu) / (1 + insurancePercent / 100);

    // Mostrar resultados
    document.getElementById('currentTotal').textContent = `Valor Atual (Aluguel + IPTU): R$ ${currentTotal.toFixed(2)}`;
    document.getElementById('insuranceAmount').textContent = `Valor do Seguro no Valor Atual: R$ ${insuranceAmount.toFixed(2)}`;
    document.getElementById('proposedRent').textContent = `Proposta de Aluguel para se Ajustar à Verba: R$ ${proposedRent.toFixed(2)}`;
}

function shareOnWhatsApp() {
    // Obter os resultados calculados
    const currentTotalText = document.getElementById('currentTotal').textContent;
    const insuranceAmountText = document.getElementById('insuranceAmount').textContent;
    const proposedRentText = document.getElementById('proposedRent').textContent;

    // Montar a mensagem para o WhatsApp
    const message = `Proposta de Locação:
${currentTotalText}
${insuranceAmountText}
${proposedRentText}`;

    // Criar o link para compartilhamento no WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Abrir o link em uma nova janela
    window.open(whatsappUrl, '_blank');
}