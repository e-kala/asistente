class Imitate{
	constructor(){
		this.pass = ""
	}

	imitate(){
		let vari;
		function impp(im){
	     vari = im
	    }
		$.post("./content/php/consults_info/pass_patt_imit.php", {d:""}).done(function(e){
			let cube_child = document.getElementsByClassName("cube_child")
			let extract = e.split("")
			let num_to_record = [];
			extract = extract.map( function(o,i){
				let x = ""
				if (o === "a") x = 0
				if (o === "b") x = 1	
				if (o === "c") x = 2
				if (o === "d") x = 3
				if (o === "e") x = 4
				if (o === "f") x = 5
				if (o === "g") x = 6
				if (o === "h") x = 7
				if (o === "i") x = 8
				return x
			})

			setInterval(function(){
				let counte = -1
				let interval = setInterval(function(){
					if (counte < extract.length){
						counte += 1
					} else if (counte === extract.length) {
						clearInterval(interval)
					} else {
						counte = 0
					}
					if (document.getElementsByClassName("cube_child")[extract[counte]] !== undefined){
						document.getElementsByClassName("cube_child")[extract[counte]].click()
					}
				}, 100)
			}, 2000)

		})
		return vari;
	}

	patter_imitate(){
		const div_main = document.createElement("div")
		div_main.className = "p-3 m-3 d-flex flex-wrap"
		div_main.style.width = "250px"
		div_main.style.webkitWidth = "250px";
		div_main.style.MozWidth = "250px";
		div_main.style.msWidth = "250px";
		div_main.style.oWidth = "250px";

		div_main.style.height = "250px"
		div_main.style.webkitHeight = "250px";
		div_main.style.MozHeight = "250px";
		div_main.style.msHeight = "250px";
		div_main.style.oHeight = "250px";

		div_main.style.background = ""
		div_main.style.webkitBackground = "";
		div_main.style.MozBackground = "";
		div_main.style.msBackground = "";
		div_main.style.oBackground = "";

		let abc = ["a","b","c","d","e","f","g","h","i"]
		for (let x = 0; x < abc.length; x++){
			const cube_child = document.createElement("div")
			cube_child.classList.add("cube_child")
			cube_child.name = abc[x]
			cube_child.innerHTML = abc[x]
			cube_child.style.color = "transparent"
			cube_child.style.webkitColor = "transparent";
			cube_child.style.MozColor = "transparent";
			cube_child.style.msColor = "transparent";
			cube_child.style.oColor = "transparent";

			cube_child.style.userSelect = "none"
			cube_child.style.webkitUserSelect = "none";
			cube_child.style.MozUserSelect = "none";
			cube_child.style.msUserSelect = "none";
			cube_child.style.oUserSelect = "none";

			cube_child.ondragstart = function(){ 
				return false
			}

			cube_child.style.padding = "20px"
			cube_child.style.webkitPadding = "20px";
			cube_child.style.MozPadding = "20px";
			cube_child.style.msPadding = "20px";
			cube_child.style.oPadding = "20px";

			cube_child.style.paddingTop = "0px"
			cube_child.style.webkitTop = "0px";
			cube_child.style.MozTop = "0px";
			cube_child.style.msTop = "0px";
			cube_child.style.oTop = "0px";

			cube_child.style.margin = "5px"
			cube_child.style.webkitMargin = "5px";
			cube_child.style.MozMargin = "5px";
			cube_child.style.msMargin = "5px";
			cube_child.style.oMargin = "5px";

			cube_child.style.width = "28%"
			cube_child.style.webkitWidth = "28%";
			cube_child.style.MozWidth = "28%";
			cube_child.style.msWidth = "28%";
			cube_child.style.oWidth = "28%";

			cube_child.style.height = "auto"
			cube_child.style.webkitHeight = "auto";
			cube_child.style.MozHeight = "auto";
			cube_child.style.msHeight = "auto";
			cube_child.style.oHeight = "auto";

			cube_child.style.background = "#dbdbdb"
			cube_child.style.webkitBackground = "#dbdbdb";
			cube_child.style.MozBackground = "#dbdbdb";
			cube_child.style.msBackground = "#dbdbdb";
			cube_child.style.oBackground = "#dbdbdb";

			cube_child.style.borderRadius = "10px"
			cube_child.style.webkitBorderRadius = "10px";
			cube_child.style.MozBorderRadius = "10px";
			cube_child.style.msBorderRadius = "10px";
			cube_child.style.oBorderRadius = "10px";

			cube_child.onclick = function(e){
				cube_child.animate([{
					background:"#ff0155",
					transform:"scale(0.8)"
				},{
					background:"#dbdbdb",
					transform:"scale(1)"
				}],{duration:700, iterations:1})
			}

			div_main.appendChild(cube_child)
		}
		let res = this.imitate()
		return div_main;
	}

	run(){
		const patte_div = document.getElementById("patte")
		patte_div.appendChild(this.patter_imitate())
	}
}

const patron_replica = new Imitate()
patron_replica.run()