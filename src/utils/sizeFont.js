// Para aumentar o tamanho da fonte
export const range = document.querySelector('.range1');
export const fontModification1 = document.querySelector('.fontModification1');
export const fontModification2 = document.querySelector('.fontModification2');
export const fontModification3 = document.querySelector('.fontModification3');
export const fontModification4 = document.querySelector('.fontModification4');

range.addEventListener('input', function () {
  const rangeValue = range.value;
  fontModification1.style.fontSize = rangeValue + 'px';
  fontModification2.style.fontSize = rangeValue + 'px';
  fontModification3.style.fontSize = rangeValue + 'px';
  fontModification4.style.fontSize = rangeValue + 'px';
});
