var Validar = {
    letrasYEspacios: function (inputId, errorSpanId) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(errorSpanId);
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$/;

        input.addEventListener('input', function () {
            if (!regex.test(input.value)) {
                errorSpan.textContent = "Solo letras y espacios permitidos.";
                input.classList.add("invalido");
            } else {
                errorSpan.textContent = "";
                input.classList.remove("invalido");
            }
        });
    },

    email: function (inputId, errorSpanId) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(errorSpanId);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        input.addEventListener('input', function () {
            if (!regex.test(input.value)) {
                errorSpan.textContent = "Correo electrónico inválido.";
                input.classList.add("invalido");
            } else {
                errorSpan.textContent = "";
                input.classList.remove("invalido");
            }
        });
    }

    // Aquí podrías agregar más: password, teléfono, etc.
};
