<?php
require("connect.php");


echo "<h5>Helló worldecske!!!</h5>";
if(defined("CRYPT_BLOWFISH") && CRYPT_BLOWFISH) {
  echo "CRYPT_BLOWFISH is enabled!";
} else {
  echo "CRYPT_BLOWFISH is NOT enabled!";
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
        WHERE email='hollotomi@gmail.com'";

$result = $link->query($sql);
$pass = $result->fetch_assoc();
print_r($pass);

if (password_verify('Aniko822', $pass['password'])) {
  echo "<br />OK";
} else {
  echo "<br />False";
}



 ?>
