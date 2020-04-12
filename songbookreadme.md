
Le [songbook.pdf](songbook.pdf) (version du 11 avril 2020).

# Introduction

Ce projet s'inspire directement du très bon [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) ainsi que du site collaboratif [paroles de webfenua](http://paroles.webfenua.com/list.php) qui permet à chacun de modifier les chansons.

Dans notre projet on essaye de combiner les deux idées: faire un joli pdf avec des chansons que tout le monde peut ajouter, corriger, . notamment on pourra le personnaliser en transposant les chansons pour les adapter à sa voix.

Pour participer il suffit de créer un compte overleaf en suivant [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

Liens utiles:

  - Le site:            http://tahitiansongs.fr/ 
  
  contient également des tablatures de ukulele et surtout le répertoire qui inspiré ce projet qui contient une centaine de chansons :
  
  [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf)
  
  - Site collaboratif de paroles de chansons tahitiennes, beaucoup de chansons même rares, ou anciennes, mais les paroles
  sont souvent approximatives ou mal orthographiées: 
  
      http://paroles.webfenua.com/list.php
      
  - Application permettant d'extraire les notes de guitare ou ukulele depuis une vidéo youtube:
  
      https://chordify.net/


Les chansons sont stockées dans `songs`. Chaque dossier dqns `songs` correspond à une section dans le songbook.
Le fichier principal est `songbook.tex` qui liste les chansons à inclure. Il est généré automatiquement par le script `makemain.py` ou bien avec la commande `make`, mais on peut le modifier pour vérifier qu'une chanson compile.

# [Mode d'emploi](modedemploi.md)

* [Générer le pdf](##generer-le-pdf)
* [Ajouter une chanson](##ajouter-une-chanson)
* [Syntaxe d'une chanson](##syntaxe-dune-chanson)
* [Transposer une ou toutes les chansons](##transposer-une-ou-toutes-les-chansons)
* [Faire un répertoire personnel](##faire-un-répertoire-personnel)

# [Paroles en tahitien](tahitien.md)

# TODO
* Gérer les index et la tableofcontents
* Définir la classification de songs (guit/uke/nochords ou bien /anglais/francais/tahitien ? ou autre ? )
* Mettre des jolies couleurs
* Faire des transpositions automatiques, et personnalisables.
* Ajouter des liens pour les vidéos
* Mettre à jour le input path

