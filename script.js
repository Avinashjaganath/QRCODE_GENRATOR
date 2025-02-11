function generateQR() {
    let qrText = document.getElementById("qr-text").value;
    let qrCodeDiv = document.getElementById("qr-code");
    qrCodeDiv.innerHTML = "";
    if (qrText.trim() !== "") {
        new QRCode(qrCodeDiv, {
            text: qrText,
            width: 128,
            height: 128
        });
    } else {
        alert("Please enter some text or URL");
    }
}