const inputWidth = document.getElementById('inputWidth');
const inputLength = document.getElementById('inputLength');
const inputAngle = document.getElementById('inputAngle');
const submitButton = document.getElementById('submitButton');
let text = document.getElementById('text');

submitButton.addEventListener('click', function () {
   function calcArea() {
      const calcWidth = parseFloat(inputWidth.value);
      const calcLength = parseFloat(inputLength.value);
      const calcAngle = parseFloat(inputAngle.value);
      if (isNaN(calcWidth) || isNaN(calcLength) && isNaN(calcAngle)) {
         text.innerHTML = 'Vă rugăm să completați toate câmpurile.';
         text.style.color = 'red';
      } else if (calcAngle === 90 || isNaN(calcAngle)) {
         const area = calcWidth * calcLength;
         text.innerHTML = 'Aria dreptunghiului cu lungimea ' + calcWidth + ' și lățimea ' + calcLength + ' este ' + area + '.';
         text.style.color = 'white';
      } else {
         const calcInRadians = (Math.PI / 180) * calcAngle;
         const area = (1 / 2) * calcWidth * calcLength * Math.sin(calcInRadians);
         text.innerHTML = 'Aria triunghiului cu lungimea ' + calcWidth + ', lățimea ' + calcLength + ' și unghiul ' + calcAngle + ' este ' + area + '.';
         text.style.color = 'white';
      }
   }

   calcArea();
});


