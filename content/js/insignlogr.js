
function legends_info_logros(){
	const emerlegend = document.getElementsByClassName("emerlegend")
	for (let x  = 0; x < emerlegend.length; x++){
		emerlegend[x].style.pointer = "cursor"

		emerlegend[x].onpointerover = function(){
			emerlegend[x].style.cursor ="pointer"
		}
		emerlegend[x].onpointerout = function(){
			emerlegend[x].style.cursor = ""
		}
		// emerlegend[x].onpointerdown = function(){
		// 	emerlegend[x].animate([{
		// 		transform:"rotateY(0deg)"
		// 	},{
		// 		transform:"rotateY(360deg)"
		// 	}],{duration:400, iterations:1})
			
		// }
	}
}


legends_info_logros()

$(function () {
  $('[data-toggle="popover"]').popover()
})