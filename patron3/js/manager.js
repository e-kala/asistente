//Pattmo puede ser llamado dentro de un fetch para importar datos de una api y usarlos en el objeto

let state_f = false // Login or SignUp
const loginbtn = document.getElementsByClassName("login-btn")[0]
const signupbtn = document.getElementsByClassName("signup-btn")[0]


loginbtn.onclick = () => state_f = false; //Activa modo login
signupbtn.onclick = () => state_f = true; //Activa modo registro


Pattmo("root", managerPassword({
	login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
		user : "Pepito",
		password : "dabehifc", 
	},

	signUp : state_f, // false significa que se usa como login y true para registro
	destiny : "usermain",

	consult : {
		to : "connect.php" //For
	},

	components : {
		userPage : "userPageMain.html", //Página a la que se accederá luego del login, usando AJAX
		errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
	},

	config_dev : { //Para el desarrollador
		alerts : true, //Mostrar alertas y consolas de login
		letters : false, //Quitar o poner letras 
		showPassword : false // Mostrar password en consola
	}
}))