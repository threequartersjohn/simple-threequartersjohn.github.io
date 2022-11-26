function setColorTheme(value) {
    const root = document.documentElement;
    
    const themes = [`--dark`, '--gray', '--light'];

    root.style.setProperty('--bg-color', `var(${themes[value]}-bg-color)`)
    root.style.setProperty('--text-color', `var(${themes[value]}-text-color)`)
    root.style.setProperty('--accent-color', `var(${themes[value]}-accent-color)`)
}

function setSizeTheme(value) {
    const root = document.documentElement;

    console.log('doin stuff');
    
    const themes = [`--small`, '--medium', '--large'];

    root.style.setProperty('--font-size', `var(${themes[value]}-font-size)`)
}

document.addEventListener('DOMContentLoaded', function documentListener() {
    const themeToggler = document.getElementById('colorTheme');
    const sizeToggler = document.getElementById('sizeTheme');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        themeToggler.value = 2;
    }

    themeToggler.addEventListener('input', function setColorThemeListener({ target: { value } }) {
        setColorTheme(value)
    })

    sizeToggler.addEventListener('input', function setSizeThemeListener({ target: { value } }) {
        setSizeTheme(value)
    })
})