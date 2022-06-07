<?php
	require_once('sys/ds.class.php');
	include_once "sys/config.php";
	require_once('sys/BD.class.php');
	$ds = new DataScience();
	$db = BD::conn();
	$userInfo = $ds->information();
	$ip = $userInfo->ip;
	$country = $userInfo->country_name;
	$current_action = "home_page";
	$coordenadas = '{"latitude":"'.$userInfo->latitude.'", "longitude":"'.$userInfo->longitude.'"}';
	$transaction = $db->prepare("INSERT INTO usuarios (ip,fecha,pais,accion,coordenadas) VALUES(:ip,NOW(),:pais,:accion,:coordenadas)");
    $transaction->bindParam(':ip', $ip);
    $transaction->bindParam(':pais', $country);
    $transaction->bindParam(':accion', $current_action);
    $transaction->bindParam(':coordenadas', $coordenadas);
    $transaction->execute();
?>