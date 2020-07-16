    <title>Asistente</title>

    <!-- Required meta tags -->
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alyssaxuu/flowy/flowy.min.css">
    <link rel="stylesheet" type="text/css" href="./content/style/otros.css">
    <link href="https://fonts.googleapis.com/css2?family=Fondamento&display=swap" rel="stylesheet">
	
	<link rel="stylesheet" type="text/css" href="./content/style/patron.css">
    <link rel="stylesheet" type="text/css" href="./content/style/css.css">
    
    
    <link rel="stylesheet" type="text/css" href="./content/js/alertifyjs/css/alertify.css">
    <link rel="stylesheet" type="text/css" href="./content/js/alertifyjs/css/themes/default.css">

    <link rel="stylesheet" type="text/css" href="./content/js/alertifyjs/alertify.js">
    <script type="text/javascript">
        let usuariop = ""
        function getDevicePixelRatio() {
            var mediaQuery;
            var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (window.devicePixelRatio !== undefined && !is_firefox) {
                return window.devicePixelRatio;
            } else if (window.matchMedia) {
                mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                  (min--moz-device-pixel-ratio: 1.5),\
                  (-o-min-device-pixel-ratio: 3/2),\
                  (min-resolution: 1.5dppx)";
                if (window.matchMedia(mediaQuery).matches) {
                    return 1.5;
                }
                mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
                  (min--moz-device-pixel-ratio: 2),\
                  (-o-min-device-pixel-ratio: 2/1),\
                  (min-resolution: 2dppx)";
                if (window.matchMedia(mediaQuery).matches) {
                    return 2;
                }
                mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
                  (min--moz-device-pixel-ratio: 0.75),\
                  (-o-min-device-pixel-ratio: 3/4),\
                  (min-resolution: 0.75dppx)";
                if (window.matchMedia(mediaQuery).matches) {
                    return 0.7;
                }
            } else {
                return 1;
            }
        }

    </script>