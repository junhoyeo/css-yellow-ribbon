const dayOfIssue = new Date(2014, 4, 16);
const today = new Date();
const numberOfDaysPassed = Math
  .ceil((today - dayOfIssue) / 8.64e7)
  .toLocaleString('ko');

const paragraphElement = document.getElementById('paragraph');
paragraphElement.innerText = `세월호 참사 ${numberOfDaysPassed}일째`;
