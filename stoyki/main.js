//window.onload = function () {


//var i = document.getElementById('comp');
//console.log(i.src);
	// i.onmousedown = function() {
		// this.setAttribute('src','img/tested_pc_1.png');
	// }

	// i.onmouseup = function() {
		// this.setAttribute('src','img/tested_pc.png');
	// }
	
	
//}	

$(document).ready(function(){
  $("img").bind("click", function() {
      var src = ($(this).attr("src") === "img/tested_pc.png")
                    ? "img/tested_pc_1.png" 
                    : "img/tested_pc.png";
      $(this).attr("src", src);
	});
});


	