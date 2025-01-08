<?php
require_once('./includes/functions.inc.php');

$error = false;

if (!empty($_POST)) {
    // You are here because of form submit . 
    $first_name = sanitizeInput($_POST['first_name']);
    $last_name = sanitizeInput($_POST['last_name']);
    $address = sanitizeInput($_POST['address']);
    $telephone = sanitizeInput($_POST['telephone']);
    $birthdate = sanitizeInput($_POST['birthdate']);
    $email = sanitizeInput($_POST['email']);

    if (validateEmpty($first_name) && validateEmpty($last_name) && validateEmpty($address) && validateEmpty($telephone) && validateEmpty($birthdate) && validateEmpty($email)) {
        $data['first_name'] = $first_name;
        $data['last_name'] = $last_name;
        $data['address'] = $address;
        $data['birthdate'] = date('Y-m-d', strtotime($birthdate));
        $data['email'] = $email;
        $data['telephone'] = $telephone;
        // $data['image_name'] = 'dummy.jpg';

        if(isset($_FILES['pic'])){
            $og_image_name = $_FILES['pic']['name'];
            $tp = explode('.', $og_image_name);
            $ext = end($tp);
            $data['image_name'] = $ext;
            $img_file_path = $_FILES['pic']['tmp_name'];
        }


        
        if(insert($data, "contacts")){

            if(isset($_FILES['pic'])){
                $id = getInsertId();
                $imageNameToBeSaved = "$id.$ext";
                move_uploaded_file($img_file_path, "images/users/$imageNameToBeSaved");
            }
            header("Location: index.php?op=add&status=success");
        }else{
            header("Location: index.php?op=add&status=error");
        }
    }else{
        $error = true;
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />

    <!--Import Csutom CSS-->
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Add Contact</title>
</head>

<body>
    <!--NAVIGATION BAR-->
    <?php require_once('./partials/_navbar.inc.php'); ?>
    <!--/NAVIGATION BAR-->
    <div class="container">
        <div class="row mt50">
            <h2>Add New Contact</h2>
        </div>
        <div class="row">

        <?php if($error):?>
        <div class="materialert error">
                <div class="material-icons">error_outline</div>
                Oh! What a beautiful alert :)
                <button type="button" class="close-alert">×</button>
            </div>
        <?php endif; ?>
        </div>
        <div class="row">
            <form class="col s12 formValidate" action="<?= $_SERVER['PHP_SELF'];?>" id="add-contact-form" method="POST"
                enctype="multipart/form-data">
                <div class="row mb10">
                    <div class="input-field col s6">
                        <input id="first_name" name="first_name" type="text" class="validate"
                            data-error=".first_name_error">
                        <label for="first_name">First Name</label>
                        <div class="first_name_error "></div>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" name="last_name" type="text" class="validate"
                            data-error=".last_name_error">
                        <label for="last_name">Last Name</label>
                        <div class="last_name_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="input-field col s6">
                        <input id="email" name="email" type="email" class="validate" data-error=".email_error">
                        <label for="email">Email</label>
                        <div class="email_error "></div>
                    </div>
                    <div class="input-field col s6">
                        <input id="birthdate" name="birthdate" type="text" class="datepicker"
                            data-error=".birthday_error">
                        <label for="birthdate">Birthdate</label>
                        <div class="birthday_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="input-field col s12">
                        <input id="telephone" name="telephone" type="tel" class="validate"
                            data-error=".telephone_error">
                        <label for="telephone">Telephone</label>
                        <div class="telephone_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="input-field col s12">
                        <textarea id="address" name="address" class="materialize-textarea"
                            data-error=".address_error"></textarea>
                        <label for="address">Addess</label>
                        <div class="address_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="file-field input-field col s12">
                        <div class="btn">
                            <span>Image</span>
                            <input type="file" name="pic" id="pic" data-error=".pic_error">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload Your Image">
                        </div>
                        <div class="pic_error "></div>
                    </div>
                </div>
                <button class="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
    <?php require_once('./partials/_footer.inc.php'); ?>
    <!--JQuery Library-->
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <!--JQuery Validation Plugin-->
    <script src="vendors/jquery-validation/validation.min.js" type="text/javascript"></script>
    <script src="vendors/jquery-validation/additional-methods.min.js" type="text/javascript"></script>
    <!--Include Page Level Scripts-->
    <script src="js/pages/add-contact.js"></script>
    <!--Custom JS-->
    <script src="js/custom.js" type="text/javascript"></script>
</body>

</html>