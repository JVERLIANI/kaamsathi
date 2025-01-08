<?php 
    require_once("./includes/functions.inc.php");

    $page = 1;
    if(isset($_GET['page'])){
        $page = (int) $_GET['page'];
    }

    $num_of_records_per_page = 5;
    if(isset($_GET['num_of_rec'])){
        $num_of_records_per_page = $_GET['num_of_rec'];
    }

    $sql = "SELECT COUNT(*) as total_num_of_records FROM contacts";
    $rows = db_select($sql);
    $total_num_of_records = $rows[0]["total_num_of_records"];

    $total_num_of_pages = (int)ceil($total_num_of_records / $num_of_records_per_page);

    if($page > $total_num_of_pages){
        die("No recordss to be shown as you exceeded the pages ! LINK TO FIRST AND LAST PAGE");
    }

    $offset = ($page - 1) * $num_of_records_per_page;

    $sql = "SELECT * FROM contacts LIMIT $offset, $num_of_records_per_page";
    $rows = db_select($sql);

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
</head>

<body>
    <!--NAVIGATION BAR-->
    <?php  require_once("./partials/_navbar.inc.php"); ?>
    <!--/NAVIGATION BAR-->

    <!-- Add a New Contact Link-->
    <div class="row mt50">
        <div class="col s12 right-align">
            <a class="btn waves-effect waves-light blue lighten-2" href="add-contact.html"><i
                    class="material-icons left">add</i> Add
                New</a>
        </div>
    </div>
    <!-- /Add a New Contact Link-->

    <!-- Table of Contacts -->
    <div class="row">
        <div class="col s12">
            <table class="highlight centered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Date Of Birth</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <?php foreach($rows as $row): ?>
                    <tr>
                        <td><img class="circle" src="images/users/<?= $row['image_name']; ?>" alt="" height="60%"></td>
                        <td><?= "{$row['first_name']} {$row['last_name']}"; ?></td>
                        <td><?= $row['email']; ?></td>
                        <td><?= date('d-F-Y', strtotime($row['birthdate'])); ?></td>
                        <td><?= $row['telephone']; ?></td>
                        <td><?= $row['address']; ?></td>
                        <td><a class="btn btn-floating green lighten-2"><i class="material-icons">edit</i></a></td>
                        <td><a class="btn btn-floating red lighten-2 modal-trigger" href="#deleteModal"><i class="material-icons">delete_forever</i></a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
    <!-- /Table of Contacts -->
    <!-- Pagination -->
    <div class="row">
        <div class="col s12">
            <ul class="pagination">

                <?php 
                    if($page === 1):
                ?>
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <?php else: ?>
                    <li>
                    <a href="http://localhost:9999/index.php?<?= construct_query_params(array_merge($_GET, ['page' => $page - 1])); ?>"><i class="material-icons">chevron_left</i></a>
                    </li>
                    <?php endif; ?>

                <?php for($i=1; $i<= $total_num_of_pages; $i++): ?>
                    <li class="<?= ($i === $page)? 'active' : ''?>"><a href="http://localhost:9999/index.php?<?= construct_query_params(array_merge($_GET, ['page' => $i])); ?>"><?= $i?></a></li>
                
                <?php endfor; ?>
                <?php
                    if($page === $total_num_of_pages):
                ?>
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                <?php else: ?>
                    <li>
                    <a href="http://localhost:9999/index.php?<?= construct_query_params(array_merge($_GET, ['page' => $page + 1])); ?>"><i class="material-icons">chevron_right</i></a>
                    </li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
    <!-- /Pagination -->
    <!-- Footer -->
    <?php  require_once("./partials/_footer.inc.php"); ?>
    <!-- /Footer -->
    <!-- Delete Modal Structure -->
    <div id="deleteModal" class="modal">
        <div class="modal-content">
            <h4>Delete Contact?</h4>
            <p>Are you sure you want to delete the record?</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close btn blue-grey lighten-2 waves-effect">Cancel</a>
            <a href="#!" class="modal-close btn waves-effect red lighten-2">Agree</a>
        </div>
    </div>
    <!-- /Delete Modal Structure -->
    <!--JQuery Library-->
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <!--Include Page Level Scripts-->
    <script src="js/pages/home.js"></script>
    <!--Custom JS-->
    <script src="js/custom.js" type="text/javascript"></script>
</body>

</html>