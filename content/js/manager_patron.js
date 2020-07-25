Pattmo("root", managerPassword({
	style : {
		bg : "blue",
		br: "0%"
	},

	login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
		user : "Pepito",
		password : "dabehifc", 
	},

	use_data_from_db : true,

	signUp : false,

	components : {
		userPage : "userPageMain.html", //Página a la que se accederá luego del login
		errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
	},

	config_dev : { //Para el desarrollador
		letters : false, //Quitar o poner letras 
		showPassword : false // Mostrar password
	}
}))
