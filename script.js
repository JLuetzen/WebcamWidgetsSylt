
let processScroll =() => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';

        console.log('Top: ' + scrollTop + ' / Bottom: ' + scrollBottom + ' / InnerHeight: ' + window.innerHeight)

    document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);
}

document.addEventListener('scroll', processScroll);
