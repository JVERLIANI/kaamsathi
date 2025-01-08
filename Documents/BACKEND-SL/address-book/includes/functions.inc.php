<?php 
    function db_connect($config_file = "./config.ini"){
        static $connection;
        if(!$connection){
            $config = parse_ini_file($config_file);
            $connection = mysqli_connect($config['host'], $config['username'], $config['password'], $config['db_name'], $config['port']);
        }
        return $connection;
    }

    function dd($data){
        die(var_dump($data));
    }

    function db_query($query){
        $connection = db_connect();
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function db_select($select_query){
        $result = db_query($select_query);
        $rows = array();

        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }

        return $rows;
    }

    function construct_query_params($query){
        $str = "";
        $idx = 0;
        foreach($query as $key => $value){
            $str = ($idx > 0) ? $str."&$key=$value" : $str.="$key=$value";
            $idx++;
        }

        return $str;

        // return http_build_query($query);
    }

    function validateEmpty($value){
        return !empty(trim($value));
    }

    function sanitizeInput($value){
        return mysqli_real_escape_string(db_connect(), $value);
    }

    function insert($data, $tableName){
        $columns = array_keys($data);
        $columnStr = implode(", ", $columns);
        $values = array_values($data);
        $valueStr = "'".implode("', '", $values)."'";
        $sql = "INSERT INTO $tableName($columnStr) VALUES($valueStr)";
        // dd($sql);
        return db_query($sql);
    }

    function getInsertId(){
        return mysqli_insert_id(db_connect());
    }

    function delete_record($id){
        $sql = "DELETE FROM contacts WHERE id = $id";
        return db_query($sql);
    }

    function getImageName($image_name, $id){
        if(strstr($image_name,".")){
            return $image_name;
        }

        return "$id.$image_name";
    }

    function db_update($table, $data, $condition){
        $colVal = "";

        foreach($data as $key => $value){
            $colVal .= "$key='$value', ";
        }
        $colVal = rtrim($colVal,", ");

        $sql = "UPDATE $table SET $colVal WHERE $condition";
        return db_query($sql);
    }
?>