
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn5')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }
  const buttonQuery = document.querySelector('drop2');
  function myDrop2(){
	// window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	window.location.href ='home7.html'
	// window.location.href('D:\lập trình\bài cuối khóa lập trình JSB07\end1.html')
  }
  const btnQuery = document.querySelector('btn1');
  function backTomain(){
	window.location.href ='home1.html'
  }
  const btn2Query = document.querySelector('btn2');
  function introDuce(){
	window.location.href ='home2.html'
  }
  const btn3query = document.querySelector('btn3')
  function item(){
	window.location.href = 'home3.html'

  }
  const drop3query = document.querySelector('drop3')
  function myDrop3(){
	window.location.href='home4.html'
  }
  const btn4query = document.querySelector('btn4')
  function shop(){
	window.location.href='home5.html'
  }
  const drop1query = document.querySelector('drop1')
  function myDrop1(){
	window.location.href='home6.html'
  }
  const logoutquery = document.querySelector('logout')
  function logoutButton(){
	window.location.href='signUp.html'
  }
  const APP_ID = 'cf26e7b2c25b5acd18ed5c3e836fb235';
  const DEFAULT_VALUE = '--';
  const searchInput = document.querySelector('#search-input');
  const cityName = document.querySelector('.city-name');
  const weatherState = document.querySelector('.weather-state');
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  
  
  const sunrise = document.querySelector('.sunrise');
  const sunset = document.querySelector('.sunset');
  const humidity = document.querySelector('.humidity');
  const windSpeed = document.querySelector('.wind-speed');
  
  
  searchInput.addEventListener('change', (e) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
          .then(async res => {
              const data = await res.json();
              console.log('[Search Input]', data);
              cityName.innerHTML = data.name || DEFAULT_VALUE;
              weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
              weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
              temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
  
              sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
              sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
              humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
              windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
          });
  });
