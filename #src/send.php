<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom($_POST['formSubject'], 'Сайт Оман');
	//Кому отправить
	$mail->addAddress($_POST['adminEmail']);
	//Тема письма
	$mail->Subject = $_POST['projectName'];

	//Рука
	$hand = "Правая";
	//Тело письма
	$body = '<h1>Запрос на тур</h1>';

	if(trim(!empty($_POST['name2']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['tel2']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
	}
	if(trim(!empty($_POST['date2']))){
		$body.='<p><strong>Дата тура:</strong> '.$_POST['date'].'</p>';
	}


	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>