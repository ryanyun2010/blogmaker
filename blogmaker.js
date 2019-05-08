
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


		document.getElementById("download").addEventListener('click',function(){
			var feeling = document.getElementById("feeling").value;
			var highpoint = document.getElementById("highpoint").value;
			var lowpoint = document.getElementById("lowpoint").value;
			var color = document.getElementById("color").value;

			var post = `<style>p{text-align:center;}p{padding:10px;font;size:25px;line-height:30px}</style><h1>${today}</h1><p style="background-color:${color}"> I am feeling ${feeling} today.<br>My highpoint was ${highpoint}.<br>My lowpoint was ${lowpoint}</p>`
download("blog.html",post)
});
document.getElementById("next1").addEventListener('click',function(){
	document.getElementById("q1").style.display="none";
	document.getElementById("q2").style.display="block"
});
document.getElementById("next2").addEventListener('click',function(){
	document.getElementById("q2").style.display="none";
	document.getElementById("q3").style.display="block"
});
document.getElementById("next3").addEventListener('click',function(){
	document.getElementById("q3").style.display="none";
	document.getElementById("q4").style.display="block"
});

document.getElementById("back2").addEventListener('click',function(){
	document.getElementById("q2").style.display="none";
	document.getElementById("q1").style.display="block"
});
document.getElementById("back3").addEventListener('click',function(){
	document.getElementById("q3").style.display="none";
	document.getElementById("q2").style.display="block"
});
document.getElementById("back4").addEventListener('click',function(){
	document.getElementById("q4").style.display="none";
	document.getElementById("q3").style.display="block"
});
