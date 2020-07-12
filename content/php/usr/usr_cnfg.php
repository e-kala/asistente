<?
//cargar configuración del usuario
/*
 * cuando el usuario inicie sesión->ejecutará la consulta automaticamente
 * la consulta podria ejecutarse if(inició sesion){ejecuta json}
 * o detectar con js si se inició sesión directamente
 * cargará la configuración desde la db consultando un dato json
 * el dato json deberá ser interpretado por js
 * 
 * 
 * 
 * 
 * 
*/

    class usr_cnfg{
        public $usuario;

        

        public function configuracion(){

            $conectar = new conexion();
	        $conexion = $conectar->conectar();
            $usuario = $_SESSION['user'];

            $consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
            $cnf_result = $conexion->query($consulta_cnf);
            $fila = $cnf_result->fetch_object();

            $data_cnf = $fila->usr_config;// obtiene configuracion en json
            //$json = json_decode($data_cnf, TRUE); //lo convierte DE json A array
            
            $array = ["usuario" => $usuario]; //crea un array con el usuario
            //array_push($array, $json);
            $json_user = json_encode($array); //convierte el array con el usuario a json
            
            return $json_user . $data_cnf;


        }
    }

    $usr_cnfg = new usr_cnfg();
    echo "<script>console.log('".$usr_cnfg->configuracion()."')</script>"

/*
    obtener json
    json usrConf[{mode : dark}]

*/
?>