function calculateProposal() {
    // Obter os valores de entrada
    const currentRent = parseFloat(document.getElementById('currentRent').value);
    const iptu = parseFloat(document.getElementById('iptu').value);
    const insurancePercent = parseFloat(document.getElementById('insurancePercent').value);
    const availableBudget = parseFloat(document.getElementById('availableBudget').value);

    // Calcular valores atuais
    const currentTotal = currentRent + iptu;
    const insuranceAmountCurrent = (currentRent * insurancePercent) / 100;
    const totalWithInsuranceCurrent = currentTotal + insuranceAmountCurrent;

    // Calcular a proposta ajustada
    const targetTotal = availableBudget;
    const proposedRent = (targetTotal - iptu) / (1 + insurancePercent / 100);
    const insuranceAmountProposed = (proposedRent * insurancePercent) / 100;
    const totalWithInsuranceProposed = proposedRent + iptu + insuranceAmountProposed;

    // Mostrar resultados na página
    document.getElementById('currentTotal').textContent = `Valor Atual (Aluguel + IPTU + Seguro): R$ ${totalWithInsuranceCurrent.toFixed(2)}`;
    document.getElementById('insuranceAmount').textContent = `Seguro no valor atual: R$ ${insuranceAmountCurrent.toFixed(2)}`;
    document.getElementById('proposedRent').innerHTML = `
        <strong>Proposta Ajustada:</strong><br>
        Aluguel Novo: R$ ${proposedRent.toFixed(2)}<br>
        IPTU: R$ ${iptu.toFixed(2)}<br>
        Seguro no novo valor: R$ ${insuranceAmountProposed.toFixed(2)}<br>
        <strong>Total: R$ ${totalWithInsuranceProposed.toFixed(2)}</strong>
    `;
}

// Função para compartilhar no WhatsApp
function shareOnWhatsApp() {
    // Obter os resultados calculados a partir dos elementos na página
    const currentTotalText = document.getElementById('currentTotal').textContent;
    const insuranceAmountText = document.getElementById('insuranceAmount').textContent;
    const proposedRentText = document.getElementById('proposedRent').textContent;

    // Montar a mensagem formatada para WhatsApp
    const message = `${currentTotalText}\n${insuranceAmountText}\n\n${proposedRentText}`;

    // Criar o link para compartilhamento no WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Abrir o link em uma nova janela
    window.open(whatsappUrl, '_blank');
}