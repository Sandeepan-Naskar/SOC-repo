//SO this is a bunch of php code I wrote studying from tutorials randomly so that I can make my comments section work but haven't figured how to use this code in an angular project yet

<?php
    date_default_timezone_set('India/Bangalore');
    //include 'comments.inc.php';
?>

<?php
echo "<form method='POST' action='".setComment($conn)."'>
        <input type='hidden' name='uid' value='Anonymous'>
        <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
        <textarea name='message'></textarea><br>
        <button type='submit' name='commentSubmit'>Comment</button>
    </form>";
?>

<?php
    function setComment($conn){
        if(isset($_POST['commentSubmit'])){
            $uid = $_POST['uid'];
            $date = $_POST['date'];
            $message = $_POST['message'];

            $sql = "INSERT INTO comments (uid, date, message) VALUES ('$uid','$date','$message')";
            $result = $conn->query($sql);   
        }
    }
?>

<?php
    $conn = mysqli_connect('localhost','root','','comments');
    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }
?>