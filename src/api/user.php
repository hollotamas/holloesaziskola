<?php
require("connect.php");

$email = "";
$pass = "";
if (!empty($_REQUEST['email'])) {
  if (filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
    $email = $_REQUEST['email'];
  }
} else {
  echo "Nincs email";
}
if (!empty($_REQUEST['pass'])) {
  $pass = $_REQUEST['pass'];
}

function encrypt($input, $rounds = 10) {
  $option = [
    'cost' => $rounds
  ];
  return password_hash($input, PASSWORD_BCRYPT, $option);
}

// $pass = encrypt('Aniko823');
// $sql = "INSERT INTO `user`(`name`, `email`, `password`, `iskola`, `helyseg`, `jogosultsag`)
//         VALUES ('Holló Tamás', 'hollotomi@gmail.com', '$pass', 'Batsányi János Gimnázium', 'Tapolca', 1)";
//
// $result = $link->query($sql);
// if ($result === TRUE) {
//   echo "<br />".$pass;
// } else {
//   echo "<br />No insert";
// }

$sql = "SELECT password FROM user
        WHERE email='$email'";

$result = $link->query($sql);
$pass = $result->fetch_assoc();
print_r($pass);

if (password_verify('Aniko823', $pass['password'])) {
  echo "<br />OK";
} else {
  echo "<br />False";
}



 ?>
