document.getElementById('cadastro_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !password || !confirmPassword) {
        alert('Preencha todos os campos.');
        return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert('Erro, digite a senha corretamente.');
        return;
    }

    // Salva os dados no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    //Carregamento do Botão Cadastro
    document.getElementById("cadastro_button").innerHTML = "Carregando...";
        setTimeout(() => {
            // Ação de login aqui
            alert("Cadastro concluído.");
            // Redireciona para o site.html após o login bem-sucedido
            window.location.href = "login.html";
        }, 5000);
});