const body = document.querySelector('body');
const aside = document.querySelector('aside');

function asideMoving () {
  const arrow = aside.querySelector('.aside__arrow');
  arrow.addEventListener('click', toggleaside)
}

function toggleaside () {
  const logo = aside.querySelector('.aside__logo');
  const elements = aside.querySelector('.aside__elements');
  const support = aside.querySelector('.footer__support');
  const arrow = aside.querySelector('.aside__arrow');
  aside.classList.toggle('aside_hidden');
  logo.classList.toggle('aside__logo_hidden');
  elements.classList.toggle('aside__elements_hidden');
  support.classList.toggle('footer__support_hidden');
  arrow.classList.toggle('aside__arrow_hidden');
}

/* TODO:
  при клике на элемент меню, он открывается, а остальные закрываются
  надо переписать
*/

function asideSummary () {
  const summaryHTML = aside.querySelector('.aside__html');
  const summaryHTMLdoka = summaryHTML.querySelector('.aside__html-doka');
  const summaryHTMLlong = summaryHTML.querySelector('.aside__html-long');

  const summaryСSS = aside.querySelector('.aside__css');
  const summaryСSSdoka = summaryСSS.querySelector('.aside__css-doka');
  const summaryСSSlong = summaryСSS.querySelector('.aside__css-long');

  const summaryJS = aside.querySelector('.aside__js');
  const summaryJSdoka = summaryJS.querySelector('.aside__js-doka');
  const summaryJSlong = summaryJS.querySelector('.aside__js-long');

  function toggleAttrItems (item) {
    if (item.path[1].classList.contains('aside__html')) {
      summaryСSS.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__css')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__js')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryСSS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__html-doka')) {
      summaryСSS.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__html-long')) {
      summaryСSS.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__css-doka')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__css-long')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryJS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__js-doka')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryСSS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSlong.removeAttribute('open', 'open');
    } else if (item.path[1].classList.contains('aside__js-long')) {
      summaryHTML.removeAttribute('open', 'open');
      summaryСSS.removeAttribute('open', 'open');
      summaryHTMLdoka.removeAttribute('open', 'open');
      summaryHTMLlong.removeAttribute('open', 'open');
      summaryСSSdoka.removeAttribute('open', 'open');
      summaryСSSlong.removeAttribute('open', 'open');
      summaryJSdoka.removeAttribute('open', 'open');
    }
  }

  summaryHTML.addEventListener('click', toggleAttrItems);
  summaryСSS.addEventListener('click', toggleAttrItems);
  summaryJS.addEventListener('click', toggleAttrItems);

  summaryHTMLdoka.addEventListener('click', toggleAttrItems);
  summaryHTMLlong.addEventListener('click', toggleAttrItems);
  summaryСSSdoka.addEventListener('click', toggleAttrItems);
  summaryСSSlong.addEventListener('click', toggleAttrItems);
  summaryJSdoka.addEventListener('click', toggleAttrItems);
  summaryJSlong.addEventListener('click', toggleAttrItems);
}

if (body.contains(aside)) {
  asideMoving();
  asideSummary();
}
