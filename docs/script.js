let person = [
	{ text:'Челяев Максим', image: 'max.jpg'},
	{ text:'Галицкий Вадим', image: 'vadim.jpg'},
	{ text:'Ткачев Денис', image: 'den.jpg'},
	{ text:'Пугачев Олег', image:'oleg.jpg'},
	{ text:'Рожков Евгений', image: 'john.jpg'},
	{ text:'Колотилин Константин', image: 'kost.png'},
    { text:'Безверхий Виталий', image: 'vital.jpg'},
	{ text:'Сынчиков Сергей', image: 'serg.jpg'}
];
let button = document.querySelector('.center-button');
let resultText = document.getElementById('resultText');
let resultImage = document.getElementById('resultImage');

	function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}
button.addEventListener('click', function () {
  let randomElement = getRandomElement(person);
  resultText.textContent = randomElement.text;
  resultImage.src = './images/' + randomElement.image;
  resultImage.style.display = 'block'; 
});
