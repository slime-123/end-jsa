
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
	window.location.href ='test1.html'
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
  