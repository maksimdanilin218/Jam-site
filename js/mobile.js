/*burger button*/
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
/*dark__theme*/
let checkbox = document.querySelector('.theme-checkbox')
if(localStorage.getItem('theme') == "true") {
    theme.setAttribute('href', 'css/dark.css')
    checkbox.checked = true
}
checkbox.onchange = function() {
    if(this.checked) {
        localStorage.setItem('theme', true)
        theme.setAttribute('href', 'css/dark.css')
    } else {
        localStorage.setItem('theme', false)
        theme.setAttribute('href', 'css/light.css')
    }
}
