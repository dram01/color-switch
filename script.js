const colorSwitchButton = document.getElementById('color-switch');

colorSwitchButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
})