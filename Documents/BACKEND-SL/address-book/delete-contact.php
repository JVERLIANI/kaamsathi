<?php 

    require_once("./includes/functions.inc.php");
    if(!$_POST){
        die("Hacking??");
    }else{
        if(isset($_POST["delete_id"])){
        
            if(delete_record($_POST["delete_id"])){
                header("Location: index.php?op=delete&status=success");
            }else{
                header("Location: index.php?op=delete&status=error");
            }
        }
    }
?>