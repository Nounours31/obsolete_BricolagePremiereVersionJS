<html lang="fr">

<head>
  <meta charset="utf-8" />
  <!--
      La balise <meta> autorise d'autres valeurs utilisables dans vos projets :
        width
          largeur de fenêtre viewport (par exemple width="device-width")
        height
          hauteur de fenêtre viewport (par exemple height="device-height")
        initial-scale
          niveau de zoom initial (par exemple initial-scale="1.0")
        minimum-scale
          niveau de zoom minimal (par exemple minimum-scale="0.5")
        maximum-scale
          niveau de zoom maximal (par exemple maximum-scale="3.0"). Attention, la valeur "1.0" interdit le zoom et peut rendre vos pages inaccessibles
        user-scalable
          possibilité à l'utilisateur de zoomer (par exemple user-scalable="yes"). Attention, la valeur "no" interdit le zoom et peut rendre vos pages inaccessibles
    -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, shrink-to-fit=no" />
  <link rel="stylesheet" href="../CSS/BRILoggin.css" />
  <link rel="icon" type="image/png" href="../Images/BRILogo.png" />
  <title>Authentification sur le site du bricolage du CE DS</title>


  <style>
    /*======================
    404 page
=======================*/
    .page_404 {
      padding: 40px 0;
      background: #fff;
      font-family: 'Arvo', serif;
    }

    .page_404 img {
      width: 100%;
    }

    .four_zero_four_bg {
      <?php 
        if (isset($_GET) && isset ($_GET['status'])) {
          if ($_GET['status'] = 404) {
            print ('background-image: url(../image/BRIErreur404.png);');
            print ('height: 700px;');
          }
        }
        else {
          print ('background-image: url(../image/BRIErreurGenerique.png);');
          print ('height: 400px;');
        }
      ?>
      background-position: center;
    }


    .four_zero_four_bg h1 {
      font-size: 80px;
    }

    .four_zero_four_bg h3 {
      font-size: 80px;
    }

    .link_404 {
      color: #fff !important;
      padding: 10px 20px;
      background: #39ac31;
      margin: 20px 0;
      display: inline-block;
    }

    .contant_box_404 {
      margin-top: -50px;
    }
  </style>
</head>

<body id="StartBody" onclick="document.location='./BRIAuthentification.html'">
  <section class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center ">
                <?php 
                  if (isset($_GET) && isset ($_GET['status'])) {
                    print ($_GET['status']);
                  }
                  else {
                    print ('XxX');
                  }
                ?>
              </h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">
                Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>

</html>