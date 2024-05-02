var btnScrollToTop = document.getElementById("btnScrollToTop");

// fazendo com que o botão role para o topo da página
btnScrollToTop.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    // definindo a rolagem
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
        return false;
    }

    // Exibir a mensagem de sucesso
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Retorna falso para evitar o envio do formulário sem os campos preenchidos
    return false;
}

function submitForm() {
    if (validateForm()) {
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.style.display = "block";
        });
    }
}



document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menuToggle");
    var menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function() {
        console.log("Menu toggle clicked");
        menu.classList.toggle("active");
        console.log("Menu active:", menu.classList.contains("active"));
    });

    // Fechar o menu ao clicar em qualquer lugar fora dele
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            console.log("Menu closed");
        }
    });
});
