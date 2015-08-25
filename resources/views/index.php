<!DOCTYPE html>
<html>
<head>
    <title>Lumen</title>

    <script src="/modules/js/angular.js"></script>
    <script src="/modules/js/angular-route.js"></script>
    <script src="/modules/js/jquery.js"></script>
    <script src="/assets/js/app.js"></script>

    <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <link href="/bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet" type="text/css">

    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: #333;
            /*display: table;*/
            font-weight: 100;
            font-family: 'Lato';
        }
        .title {
            font-size: 96px;
            margin-bottom: 40px;
        }

        .quote {
            font-size: 24px;
        }
    </style>
</head>
<body ng-app="myApp">
    <div ng-view></div>

<!--<div class="container">-->
<!--    <div class="content">-->
<!--        <div class="title">Lumen.</div>-->
<!--    </div>-->
<!--</div>-->
</body>
</html>