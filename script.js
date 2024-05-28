function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText);
    document.getElementById('outputText').value = encryptedText;
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText);
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = 'Texto inválido para desencriptar';
    }
}

function copiar() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
