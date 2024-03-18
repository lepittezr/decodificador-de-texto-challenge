document.addEventListener("DOMContentLoaded", function() {
    const btnCriptografar = document.getElementById("btn-criptografar");
    const btnDescriptografar = document.getElementById("btn-descriptografar");
    const textArea = document.getElementById("text-area");
    const resultArea = document.getElementById("result");
    const btnCopy = document.getElementById("btn-copy");

    btnCriptografar.addEventListener("click", function () {
        const textoOriginal = textArea.value;
        const textoCriptografado = criptografarTexto(textoOriginal);
        resultArea.value = textoCriptografado;
        textArea.value = "";
        btnCopy.disabled = false;
        btnDescriptografar.disabled = false;
    });

    btnDescriptografar.addEventListener("click", function() {
        const textoCriptografado = textArea.value;
        const textoDescriptografado = descriptografarTexto(textoCriptografado);
        resultArea.value = textoDescriptografado;
        btnCopy.disabled = false;
    });

    btnCopy.addEventListener("click", function() {
        const textToCopy = resultArea.value;
        navigator.clipboard.writeText(textToCopy); 
        alert("Texto copiado para a área de transferência!");
    });
});

function criptografarTexto(str) {
    const substituicaoCaracteres = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoCriptografado = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        textoCriptografado += substituicaoCaracteres[char.toLowerCase()] || char;
    }
    return textoCriptografado
}

function descriptografarTexto(str) {
    const substituicaoCaracteres = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDescriptografado = '';
    for (let i = 0; i < str.length;) {
        let found = false;

        for (const key in substituicaoCaracteres) {
            if (str.startsWith(key, i)) { 
                textoDescriptografado += substituicaoCaracteres[key]; 
                i += key.length; 
                found = true;
                break;
            }
        }
        if (!found) {
            textoDescriptografado += str[i]; 
            i++;
        }
    }
    return textoDescriptografado;
}