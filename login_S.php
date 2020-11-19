<?php 
	session_start();
	session_destroy();
	session_start();
	if(isset($_POST["Submit"])){
	$userid="";
	$password="";
	$db = mysqli_connect('localhost','root','','pqrs') or die("Could not connect to tables");
	$userid=mysqli_real_escape_string($db,$_POST["userid"]);
	$password=mysqli_real_escape_string($db,$_POST["password"]);
	if(empty($userid)) echo "<script>window.open('login-S.php','_self');alert('Enter the username');</script>";
	if(empty($password)) echo "<script>alert('Enter the password');</script>";
		$query="select * from shopdetails where shopid='$userid' and shoppass='$password'";
		$conrows=mysqli_query($db,$query);
		$conrow=mysqli_fetch_array($conrows);
		$rows=mysqli_num_rows($conrows);
	if($rows==1)
	{	
		$_SESSION['id']=$userid;
		$_SESSION['name']=$conrow['name'];
		echo "<script>window.open('main_interface_pqrs.php','_self')</script>";
	}
	else
	{
		echo "<script>alert('Invalid user credentials')</script>";
	}
	}
?>
<html>
<head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css" rel="stylesheet">

        <!-- JQuery -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js"></script>
        <style>
        * {
          box-sizing: border-box;
          }
        .bg{
          background-image: url("https://papers.co/wallpaper/papers.co-vd52-abstract-dark-geometric-line-pattern-36-3840x2400-4k-wallpaper.jpg");
         background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
        }
        .bg1
        {
          width:40%;
          height:80%;
          background-color:rgba(248, 129, 157, 0.75);

        }
        .box{
          box-shadow:10px 10px 5px black;
          border-radius: 10px;
          padding: 50px;
          margin-left: 400px;
          margin-right: 90px;
        }
        .size{
          font-size: 20px;
        }
        input[type=submit] {
          width: 100%;
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        </style>
      </head>

<body class="bg" style="overflow:scroll">
<center>
<section id="contact" class="py-5">
    <section class="py-5  text-center">
      <div class="container">
        <div class="justify-content-center align-items-center">
          <div class="box bg1" id="intro section">
              <h3>LOGIN INTO THE WEBSITE</h3><br>
            <form action="login-S.php" method="post">
                <br>
                <br>
                <label class="size" for="name">Enter UserID</label><br>
                <input type="text" name="userid" placeholder="User Id">
                <br>
                <label class="size" for="password">Password:</label><br>
                <input type="password" name="password" placeholder="password"/>
                <br><br>
                
                  <button class="btn btn-white btn-md" name="Submit">Submit</button><br>
                <a href="homepage-S.php">
                  <button class="btn btn-white btn-md" type= button>Back</button><br>
                </a>
                <br>
                <br>
            </form>
            </div>
          </div>
        </div>
  </section>
  </center>
</body>
</html>
