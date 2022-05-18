export default function ({ UserIsm, UserFam, UserGuruh, UserJinsi }, counter) {
    let template = document.getElementById('template')
    let templateCopy = template.content.cloneNode(true)

    templateCopy.querySelector('.son').textContent = counter;
    templateCopy.querySelector('.ism').textContent = UserIsm;
    templateCopy.querySelector('.fam').textContent = UserFam;
    templateCopy.querySelector('.gr').textContent = UserGuruh;
    templateCopy.querySelector('.jns').textContent = UserJinsi;
    return templateCopy
}