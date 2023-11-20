<?php

require_once 'assets/inc/Slim/Slim/Slim.php';
require_once 'assets/inc/configuration.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get(
    '/',
    function () {
       require_once("view/index.php");
    }
);

$app->get(
    '/videos',
    function () {
       require_once("view/videos.php");
    }
);

$app->get(
    '/shop',
    function () {
       require_once("view/shop.php");
    }
);

$app -> get('/produtos', function() {
    $sql = new Sql();
    $data = $sql->select("SELECT * FROM tb_produtos WHERE preco_promorcional > 0 ORDER BY preco_promorcional DESC LIMIT 3;");

    json_encode($data);
}
);

$app->run();
