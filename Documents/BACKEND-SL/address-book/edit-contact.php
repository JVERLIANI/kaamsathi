<?php
require_once('./includes/functions.inc.php');

$error = false;

if(!isset($_GET['id'])){
    die("Wow you hacking !!!! damn !");
}

$id = $_GET["id"];
$sql = "SELECT * FROM contacts WHERE id = $id";
$row = db_select($sql)[0];

$imageName = getImageName($row["image_name"], $row['id']);

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

        if (isset($_FILES['pic']) && !empty($_FILES['pic']['name'])) {
            $og_image_name = $_FILES['pic']['name'];
            $tp = explode('.', $og_image_name);
            $ext = end($tp);
            $data['image_name'] = $ext;
            $img_file_path = $_FILES['pic']['tmp_name'];
        }



        if (db_update("contacts", $data, "id = $id")) {

            if (isset($_FILES['pic']) && !empty($_FILES['pic']['name'])) {
                unlink("images/users/$imageName");
                $img_name = "$id.$ext";
                move_uploaded_file($img_file_path, "images/users/$img_name");
            }
            header("Location: index.php?op=update&status=success");
        } else {
            header("Location: index.php?op=update&status=error");
        }
    } else {
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
            <h2>Update existing Contact</h2>
        </div>
        <div class="row">

            <?php if ($error): ?>
                <div class="materialert error">
                    <div class="material-icons">error_outline</div>
                    Oh! What a beautiful alert :)
                    <button type="button" class="close-alert">×</button>
                </div>
            <?php endif; ?>
        </div>
        <div class="row">
            <form class="col s12 formValidate" action="<?= $_SERVER['REQUEST_URI']; ?>" id="edit-contact-form" method="POST"
                enctype="multipart/form-data">
                <div class="row mb10">
                    <div class="input-field col s6">
                        <input id="first_name" name="first_name" type="text" class="validate"
                            data-error=".first_name_error" value="<?= $row['first_name'];?>" >
                        <label for="first_name">First Name</label>
                        <div class="first_name_error "></div>
                    </div>
                    <div class="input-field col s6">
                        <input id="last_name" name="last_name" type="text" class="validate"
                            data-error=".last_name_error" value="<?= $row['last_name'];?>">
                        <label for="last_name">Last Name</label>
                        <div class="last_name_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="input-field col s6">
                        <input id="email" name="email" type="email" class="validate" data-error=".email_error" value="<?= $row['email']; ?>">
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
                            data-error=".telephone_error" value="<?= $row['telephone']; ?>">
                        <label for="telephone">Telephone</label>
                        <div class="telephone_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="input-field col s12">
                        <textarea id="address" name="address" class="materialize-textarea"
                            data-error=".address_error"><?= $row['address']; ?></textarea>
                        <label for="address">Addess</label>
                        <div class="address_error "></div>
                    </div>
                </div>
                <div class="row mb10">
                    <div class="col s2">
                        <img id="temp_image" src="images/users/<?=$imageName;?>" alt="" style="max-width : 100%">
                    </div>
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
    <script src="js/pages/edit-contact.js"></script>
    <!--Custom JS-->
    <script src="js/custom.js" type="text/javascript"></script>

    <script>
        setBirthDate("<?=$row['birthdate'];?>");
    </script>
</body>

</html>