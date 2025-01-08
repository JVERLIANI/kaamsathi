<?php
function db_connect($config_file = "./config.ini") {
  static $connection;
  if(! $connection) {

    $config= parse_ini_file($config_file);
    $connection = mysqli_connect($config['host'], $config['username'], $config['password'], $config['db_name'], $config['port']);
  }
  return $connection;
}

function dd($data)  {
  die(var_dump($data));
}

function db_query($query) {
  $connection = db_connect();
  $result = mysqli_query($connection, $query);
  return $result;
}

function db_select($select_query) {
  $result = db_query($select_query);
  $rows = array();

  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  return $rows;
}

function construct_query_params($query) {
  $str = "";
  $idx = 0;
  foreach($query as $key=>$value) {
    $str = ($idx > 0) ? $str . "&$key=$value" : $str.= "$key=$value";
    $idx++;
  }
  return $str;
}
?>