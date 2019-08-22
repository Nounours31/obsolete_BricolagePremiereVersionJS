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
  <link rel="icon" type="image/png" href="./Images/BRILogo.png" />
  <title>Check browser first ... </title>
</head>

<body>
  Test PHP
  <?php 
    phpinfo();
  ?>
</body>
</html>