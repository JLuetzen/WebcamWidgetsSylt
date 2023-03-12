let processScroll =() => {
    let docElem = document.document.Element,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + ' %';

    document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);
