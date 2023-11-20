<?php

class Sql {
  
    public $conn;

    public function __construct()
    {
        return $this -> conn = mysqli_connect("127.0.0.1", "root", "", "hcode_shop");
    }

    public function execQuery($string_query)
    {
        return mysqli_query($this->conn, $string_query);
    }


    public function select($string_query)
    {
        $result = $this->execQuery($string_query);

        $data = array();

        while ($row = mysqli_fetch_array($result)) {

            foreach ($row as $kay => $value) {
                $row[$kay] = utf8_encode($value);
            }

            array_push($data, $row);
        }

        unset($result);

        return($data);
    }

    public function __destruct()
    {
        mysqli_close($this->conn);
    }
    

};


?>