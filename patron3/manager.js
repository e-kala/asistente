//Pattmo puede ser llamado dentro de un fetch para importar datos de una api y usarlos en el objeto

Pattmo("root", managerPassword({
	style : {
		br: "0%"
	},

	login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
		user : "Pepito",
		password : "dabehifc", 
	},

	signUp : false, // false significa que se usa como login y true para registro
	destiny : "usermain",

	components : {
		userPage : "http://localhost:3000/userPageMain.html", //Página a la que se accederá luego del login, usando AJAX
		errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
	},

	config_dev : { //Para el desarrollador
		alerts : true, //Mostrar alertas y consolas de login
		letters : false, //Quitar o poner letras 
		showPassword : false // Mostrar password en consola
	}
}))


