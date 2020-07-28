<?php
if(isset($_COOKIE['logo'])){
  $logo = $_COOKIE['logo'];
  $logos = array(1, 2, 3, 4);

  if(!(in_array($logo, $logos))){
    $logo = 1;
  }
}else{
  $logo = 1;
}

if(isset($_COOKIE['fundo'])){
  $fundo = $_COOKIE['fundo'];
  $fundos = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

  if(!(in_array($fundo, $fundos)){
    $fundo = 1;
  }
}else{
  $fundo = 1;
}

if(isset($_COOKIE['topo'])){
  $topo = $_COOKIE['topo'];
  $topos = array(1, 2, 3);

  if(!(in_array($topo, $topos)){
    $topo = 1;
  }
}else{
  $topo = 1;
}

if($topo == 1){
  $cssTopo = "url(img/nuvens.png), url(img/fundo.png)";
}else{
  $cssTopo = "url(img/topos/$topo.gif)";
}