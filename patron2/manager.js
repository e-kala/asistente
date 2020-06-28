//Pattmo puede ser llamado dentro de un fetch para importar datos de una api y usarlos en el objeto

Pattmo("root", managerPassword({
	login : { //Esto será información solicitada del servidor pero para dar el ejemplo pongo yo los datos directos 
		user : "Pepito",
		password : "dabehifc", 
	},
	//Cuando el usuario se loguee bien, se destruirá la caja de login, se disparará una consulta a la base de datos y se cargará la información del usuario en la web en el div especificado que en este caso he llamado id="usermain". Nota: Esto funciona con bases de datos No relaciones por ahora, pero estoy trabajando para que se ajuste a sql, pero puedes echarle un ojo a todo el código igual

	databaseConsult : {
		db : "https://randomuser.me/api/", //Api online de ejemplo pero aqui debería ir la db
		html_destiny : "usermain", //Div destino donde se cargara en el html los datos de la db,
	},

	components : {
		errorPage : "tryexcess.html" //Página de error, con opciones de ayuda, etc., esta saldrá cuando se alcance el máximo de intentos permitidos
	},

	config_dev : { //Para el desarrollador
		letters : false, //Quitar o poner letras 
		showPassword : false // Mostrar password
	}
}))













