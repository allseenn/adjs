function getDiv() {
    const div = document.querySelectorAll('div');
    return Array.from(div).filter(el => el.getAttribute('data-active') === 'true');
}

console.log(getDiv());