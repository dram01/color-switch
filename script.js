const colorSwitchButton = document.getElementById('color-switch');

colorSwitchButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') document.body.classList.toggle('dark');
})