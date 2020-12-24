
const terminal_textarea = document.getElementById("terminal-textarea")
const termincommoninput= document.getElementsByClassName("terminal")
// const default_input_terminal = document.getElementById("default-input-term")
const writehere = document.getElementById("writehere")


let help = `

	help()<br>
	kill('username')<br>
	new('username')<br>
	list-accounts()<br>
	info('username')<br>
	new-config('username')<br>
	update-name('account':'username'->'new Name')<br>
	update-email('account':'email'->'new@email.com')<br>
	active-sessions()<br>
	main-user-active()<br>
	all-users()<br>
	cls <br>

	<br>press enter >> `

let first_command = false
writehere.onchange = function(){
	if (writehere.value.match(/help\(\)$/gim)){
		const input_newsub = document.createElement("div")
		input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"
		input_newsub.innerHTML = help
		terminal_textarea.appendChild(input_newsub)
	} else if (writehere.value.match(/cls/gim)){
		terminal_textarea.innerHTML = ""
		terminal_textarea.click()
		const input_newcl = document.createElement("input")
		input_newcl.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"
		terminal_textarea.appendChild(input_newcl)
		input_newcl.onchange = function(){
			if (input_newcl.value.match(/help\(\)$/gim)){
				const input_newsub = document.createElement("div")
				input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"
				input_newsub.innerHTML = help
				termincommoninput[termincommoninput.length - 1].remove()
				terminal_textarea.appendChild(input_newsub)
			} else if (input_newcl.value.match(/cls/gim)){
				terminal_textarea.innerHTML = ""
				terminal_textarea.click()
				const input_newcl = document.createElement("input")
				input_newcl.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"
				terminal_textarea.appendChild(input_newcl)
				termincommoninput[termincommoninput.length - 1].focus()
				input_newcl.onchange = function(){
					if (input_newcl.value.match(/help\(\)$/gim)){
						const input_newsub = document.createElement("div")
						input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"
						input_newsub.innerHTML = help
						termincommoninput[termincommoninput.length - 1].remove()
						terminal_textarea.appendChild(input_newsub)
					} else if (input_newcl.value.match(/cls/gim)){
						terminal_textarea.innerHTML = ""
						terminal_textarea.click()
						const input_newcl = document.createElement("input")
						input_newcl.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"
						terminal_textarea.appendChild(input_newcl)
						termincommoninput[termincommoninput.length - 1].focus()
					} else if (input_new.value.match(/all\-users\(\)/gim)){
				 		 $.post("./content/php/admin/process_terminal_commands.php", {command:"all-users"}).done(function(e){
					        	try{
						        	const input_newsubo = document.createElement("div")
									input_newsubo.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"

					        		let json = JSON.parse(e)
									termincommoninput[termincommoninput.length - 1].remove()
					        		Object.keys(json).map(function(e){
										input_newsubo.innerHTML += json[e] + "<br>"
										terminal_textarea.appendChild(input_newsubo)
					        		})
					        	}catch(e){
					        	}
					        })
				 	} else {
						const input_newsubk = document.createElement("div")
						input_newsubk.className = " p-2 alert-danger text-danger font-weight-bold col text-justify  rounded border-0 outline-none "
						input_newsubk.innerHTML = "Invalid command, you can use 'help()' for get list <span class='badge badge-warning'>Press Enter >></span>"
						termincommoninput[termincommoninput.length - 1].remove()
						terminal_textarea.appendChild(input_newsubk)
						termincommoninput[termincommoninput.length - 1].focus()
					}
				}
			} else if (writehere.value.match(/all\-users\(\)/gim)){
		 		 $.post("./content/php/admin/process_terminal_commands.php", {command:"all-users"}).done(function(e){
			        	try{
				        	const input_newsub = document.createElement("div")
							input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"

			        		let json = JSON.parse(e)
							termincommoninput[termincommoninput.length - 1].remove()
			        		Object.keys(json).map(function(e){
								input_newsub.innerHTML += json[e] + "<br>"
								terminal_textarea.appendChild(input_newsub)
			        		})
			        	}catch(e){
			        	}
			        })
		 	} else {
				const input_newsubk = document.createElement("div")
				input_newsubk.className = " p-2 alert-danger text-danger font-weight-bold col text-justify  rounded border-0 outline-none "
				input_newsubk.innerHTML = "Invalid command, you can use 'help()' for get list <span class='badge badge-warning'>Press Enter >></span>"
				termincommoninput[termincommoninput.length - 1].remove()
				terminal_textarea.appendChild(input_newsubk)
				termincommoninput[termincommoninput.length - 1].focus()
			}
		}
		termincommoninput[termincommoninput.length - 1].focus()
 	} else if (writehere.value.match(/all\-users\(\)/gim)){
 		 $.post("./content/php/admin/process_terminal_commands.php", {command:"all-users"}).done(function(e){
	        	try{
		        	const input_newsub = document.createElement("div")
					input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"

	        		let json = JSON.parse(e)
					termincommoninput[termincommoninput.length - 1].remove()
	        		Object.keys(json).map(function(e){
						input_newsub.innerHTML += json[e] + "<br>"
						terminal_textarea.appendChild(input_newsub)
	        		})
	        	}catch(e){
	        	}
	        })
 	} else {
		avichan = true
		const input_newsubk = document.createElement("div")
		input_newsubk.className = " p-2 alert-danger text-danger font-weight-bold col text-justify  rounded border-0 outline-none "
		input_newsubk.innerHTML = "Invalid command, you can use 'help()' for get list <span class='badge badge-warning'>Press Enter >></span>"
		termincommoninput[termincommoninput.length - 1].remove()
		terminal_textarea.appendChild(input_newsubk)
		termincommoninput[termincommoninput.length - 1].focus()
	}
}


let intextarea = false
terminal_textarea.onclick = function(){
	termincommoninput[termincommoninput.length - 1].focus()
	termincommoninput[termincommoninput.length - 1].click()
}

terminal_textarea.onpointerdown = function(){
	intextarea = true
	terminal_textarea.classList.add("border", "border-primary")

	termincommoninput[termincommoninput.length - 1].setAttribute("tab","-1")
	termincommoninput[termincommoninput.length - 1].focus()
	termincommoninput[termincommoninput.length - 1].click()
}

terminal_textarea.onpointerleave = function(){
	intextarea = false
	terminal_textarea.classList.remove("border", "border-primary")
}

terminal_textarea.onsubmit = function(e){
	e.preventDefault()
}

window.onkeydown = function(e){
	if (intextarea){
		if (e.key == "Enter"){
			writehere.setAttribute("placeholder", "")
			const input_new = document.createElement("input")
			input_new.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"

			let avichan = false	
			input_new.onchange = function(){
				if (input_new.value.match(/help\(\)$/gim)){
					const input_newsub = document.createElement("div")
					input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"
					input_newsub.innerHTML = help
					terminal_textarea.appendChild(input_newsub)
				} else if (input_new.value.match(/cls/gim)){
					terminal_textarea.innerHTML = ""
					terminal_textarea.click()
					const input_newcl = document.createElement("input")
					input_newcl.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"
					terminal_textarea.appendChild(input_newcl)
					input_newcl.onchange = function(){
						if (input_newcl.value.match(/help\(\)$/gim)){
							const input_newsub = document.createElement("div")
							input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"
							input_newsub.innerHTML = help
							termincommoninput[termincommoninput.length - 1].remove()
							terminal_textarea.appendChild(input_newsub)
						} else if (input_newcl.value.match(/cls/gim)){
							terminal_textarea.innerHTML = ""
							terminal_textarea.click()
							const input_newcl = document.createElement("input")
							input_newcl.className = "col p-2 rounded border-0 outline-none terminal bg-transparent"
							terminal_textarea.appendChild(input_newcl)
							termincommoninput[termincommoninput.length - 1].focus()
						} else if (input_new.value.match(/all\-users\(\)/gim)){
					 		 $.post("./content/php/admin/process_terminal_commands.php", {command:"all-users"}).done(function(e){
						        	try{
							        	const input_newsubo = document.createElement("div")
										input_newsubo.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"

						        		let json = JSON.parse(e)
										termincommoninput[termincommoninput.length - 1].remove()
						        		Object.keys(json).map(function(e){
											input_newsubo.innerHTML += json[e] + "<br>"
											terminal_textarea.appendChild(input_newsubo)
						        		})
						        	}catch(e){
						        	}
						        })
					 	} else {
							const input_newsubk = document.createElement("div")
							input_newsubk.className = " p-2 alert-danger text-danger font-weight-bold col text-justify  rounded border-0 outline-none "
							input_newsubk.innerHTML = "Invalid command, you can use 'help()' for get list <span class='badge badge-warning'>Press Enter >></span>"
							termincommoninput[termincommoninput.length - 1].remove()
							terminal_textarea.appendChild(input_newsubk)
							termincommoninput[termincommoninput.length - 1].focus()
						}
					}
					termincommoninput[termincommoninput.length - 1].focus()
			 	} else if (input_new.value.match(/all\-users\(\)/gim)){
			 		 $.post("./content/php/admin/process_terminal_commands.php", {command:"all-users"}).done(function(e){
				        	try{
					        	const input_newsub = document.createElement("div")
								input_newsub.className = " p-4 col text-justify  rounded border-0 outline-none bg-dark text-light"

				        		let json = JSON.parse(e)
								termincommoninput[termincommoninput.length - 1].remove()
				        		Object.keys(json).map(function(e){
									input_newsub.innerHTML += json[e] + "<br>"
									terminal_textarea.appendChild(input_newsub)
				        		})
				        	}catch(e){
				        	}
				        })
			 	} else {
					avichan = true
					const input_newsubk = document.createElement("div")
					input_newsubk.className = " p-2 alert-danger text-danger font-weight-bold col text-justify  rounded border-0 outline-none "
					input_newsubk.innerHTML = "Invalid command, you can use 'help()' for get list <span class='badge badge-warning'>Press Enter >></span>"
					termincommoninput[termincommoninput.length - 1].remove()
					terminal_textarea.appendChild(input_newsubk)
					termincommoninput[termincommoninput.length - 1].focus()
				}
			}
		
			if (avichan == false){
				terminal_textarea.appendChild(input_new)
			}

			if (terminal_textarea.children.length != 0){
				terminal_textarea.lastElementChild.focus()

				for (let x = 0; x < terminal_textarea.children.length; x++){
					if (x !== terminal_textarea.children.length - 1){
						terminal_textarea.children[x].setAttribute("disabled", "true")
						// terminal_textarea
					}
				}
			}

			if (!first_command){
				first_command = true
				termincommoninput[termincommoninput.length-1].remove()
			}
		}
	}
}




