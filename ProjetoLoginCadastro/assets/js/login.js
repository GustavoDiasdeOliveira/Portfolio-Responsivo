const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () =>{
    const form = document.getElementById('login_form');
    if(mode.classList.contains('bi-moon-fill')) {
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-sun-fill');

        form.classList.add('dark');
        return
    }

    mode.classList.add('bi-moon-fill');
    mode.classList.remove('bi-sun-fill');
    form.classList.remove('dark');
});