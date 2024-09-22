document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    // Preenche os campos do formulário de login com os dados recuperados
    if (name) {
        document.getElementById('name').value = name;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (password) {
        document.getElementById('password').value = password;
    }
});
