<?php
    /*
        echo date("j") + "<br>";
        echo strtotime ("+1 day"), "\n";
    */
    $fecha_actual = date("d-m-Y", strtotime("- 1 days")); //sumo 1 día
    echo $fecha_actual;
    echo  "<br>";
    echo date("d-m-Y",strtotime($fecha_actual. "+ 1 week"));
    echo "<br>";
    echo date("d-m-Y", strtotime($fecha_actual. "+ 14 days"));
 ?>
