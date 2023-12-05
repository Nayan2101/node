<?php 
$conn = mysqli_connect("localhost","root","nayan","assignment") or die("Connection Failed");
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql) or die("SQL Query Failed.");
$row = mysqli_fetch_assoc($result);
mysqli_close($conn);
// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($row);
?>