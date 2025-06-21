var Validar = {
	letrasYEspacios: function (inputId, errorSpanId) {
		const input = document.getElementById(inputId);
		const errorSpan = document.getElementById(errorSpanId);
		const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

		input.addEventListener('input', function () {
			if (input.value.trim() === "") {
				errorSpan.textContent = "Este campo es obligatorio.";
				input.classList.add("invalido");
			} else if (!regex.test(input.value)) {
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
			if (input.value.trim() === "") {
				errorSpan.textContent = "Este campo es obligatorio.";
				input.classList.add("invalido");
			} else if (!regex.test(input.value)) {
				errorSpan.textContent = "Correo electrónico inválido.";
				input.classList.add("invalido");
			} else {
				errorSpan.textContent = "";
				input.classList.remove("invalido");
			}
		});
	},

	password: function (inputId, errorSpanId) {
		const input = document.getElementById(inputId);
		const errorSpan = document.getElementById(errorSpanId);

		input.addEventListener('input', function () {
			if (input.value.trim() === "") {
				errorSpan.textContent = "Este campo es obligatorio.";
				input.classList.add("invalido");
			} else if (input.value.length < 6) {
				errorSpan.textContent = "La contraseña debe tener al menos 6 caracteres.";
				input.classList.add("invalido");
			} else {
				errorSpan.textContent = "";
				input.classList.remove("invalido");
			}
		});
	}
};
