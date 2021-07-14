<?php

// Битрикс24 по вебхуку

$name = $_POST['name-11'];
$phone = $_POST['tel-10'];
$email = $_POST['email'];
$product = $_POST['product'];
$price = $_POST['price'];




// формируем URL в переменной $queryUrl
$queryUrl = 'https://bxpro.bitrix24.ua/rest/11/5ennh5juzir2rle6/crm.lead.add.json'; // Добавить лид → добавить сделку deal.add
// формируем параметры для создания лида в переменной $queryData
$queryData = http_build_query(array(
  'fields' => array(
    'TITLE' => 'Заявка с сайта KievOpt от '.$phone,
    'NAME' => $name,
    'PHONE' => Array("n0" => Array("VALUE" => $phone, "VALUE_TYPE" => "WORK")),
    'EMAIL' => Array("n0" => Array("VALUE" => $email, "VALUE_TYPE" => "WORK")),
    'COMMENTS' => $product,
    'SOURCE_ID' => 'WEB',
    'UTM_SOURCE' => $_POST['utm_source'],
    'UTM_MEDIUM' => $_POST['utm_medium'],
    'HTTP_HOST' => $_SERVER['HTTP_HOST'],
    'UTM_CAMPAIGN' => $_POST['utm_campaign'],
    'UTM_CONTENT' => $_POST['utm_content'],
    'UTM_TERM' => $_POST['utm_term'],
    'OPPORTUNITY' => $price,		
    'CURRENCY_ID' => 'UAH',
  ),
  'params' => array("REGISTER_SONET_EVENT" => "Y")
));
// обращаемся к Битрикс24 при помощи функции curl_exec
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_POST => 1,
  CURLOPT_HEADER => 0,
  CURLOPT_RETURNTRANSFER => 1,
  CURLOPT_URL => $queryUrl,
  CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, 1);
if (array_key_exists('error', $result)) echo "Ошибка при сохранении лида: ".$result['error_description']."<br/>";

if ($curl) {
  echo '<center><p class="success"><b>Мы получили Вашу заявку! Спасибо!</b></p></center>';
} else {
  echo '<center><p class="fail">Ошибка. Попробойте позже!</p></center>';
}

// Битрикс24 по вебхуку конец

?>