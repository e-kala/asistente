<?php
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

    // include '../conexion.php';

    class usr_cnfg{
        public $usuario;

        public function configuracion(){
            // session_start();
            
            $conectar = new conexion();
			$conexion = $conectar->conectar();
            
            if(isset($_SESSION['user'])){
                $usuario = $_SESSION['user'];
                $consulta_cnf = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario'";
                $cnf_result = $conexion->query($consulta_cnf);
                $fila = $cnf_result->fetch_object();
    
                $data_cnf = $fila->usr_config;// obtiene configuracion en json
                //$json = json_decode($data_cnf, TRUE); //lo convierte DE json A array
                
                $array = ["usuario" => $usuario]; //crea un array con el usuario
                //array_push($array, $json);
                $json_user = json_encode($array, TRUE); //convierte el array con el usuario a json
                
                echo "<div id='cng' style='position:fixed;' value='"."[".$json_user ."," . $data_cnf . "]"."'></div>";
                
            }

        }
    }

    $usr_cnfg = new usr_cnfg();
    $usr_cnfg->configuracion();
   

?>



<script type="text/javascript">
    const anim = (obj) => {
        obj.animate([{
            opacity:0
        },{
            opacity:1
        }],{duration:400, iterations:1})
    }
    for(let x = 0; x < modulos.length; x++){
        modulos[x].style.display = "block"
        // anim(modulos[x])
    }

   

    if (modsdown !== undefined) {
        modsdown.style.display = "block"
        // anim(modsdown)
    }

    const headerr = document.getElementsByClassName("header-home-asistent")[0]
    headerr.style.display = "flex"

    const load_gif = document.getElementById("loadingg")
    if (load_gif !== undefined && load_gif !== null) load_gif.style.display = "none"

    const getcnf = document.getElementById("cng")
    let jsonst = getcnf.getAttribute("value")
    let json = JSON.parse(jsonst)
    console.log(json)
    alma_config = json
    if (json[1].mode === "dark"){
        dark()
    } else {
        ligth()
    }
</script>   