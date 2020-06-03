# La dernière version du [HimeneTatou.pdf](HimeneTatou.pdf)  (2 juin 2020).

# Introduction

Ce projet s'inspire directement du très bon [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) ainsi que du site collaboratif [paroles de webfenua](http://paroles.webfenua.com/list.php) qui permet à chacun de modifier les chansons.

Dans notre projet on essaye de combiner les deux idées: faire un joli pdf avec des chansons que tout le monde peut ajouter, corriger. Notamment on pourra le personnaliser en transposant les chansons pour les adapter à sa voix.

Pour participer il suffit de créer un compte overleaf en suivant [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

# [Mode d'emploi](modedemploi.md)

Présentation du répertoire:
```bash
├───songs/               dossier contenant toutes les chansons 
│   ├───nochords/        chansons sans les tablatures
│   │   └───chanson1.tex
│   └───withchords/      chansons avec les tablatures
│   │   └───chanson2.tex
├───custoperso/          dossier contenant les répertoires persos (listes de chansons avec transposition perso)
│   │   └───custopersodetoto.tex
└───struct/              ne pas toucher (structure du document)
└───songbook.tex         fichier principal (liste des chansons avec les paramètres de transposition)
```


* [Générer le pdf](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#g%C3%A9n%C3%A9rer-le-pdf)
* [Ajouter une chanson](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#ajouter-une-chanson)
* [Syntaxe d'une chanson](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#syntaxe-dune-chanson)
* [Transposer une ou toutes les chansons](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#transposer-une-ou-toutes-les-chansons)
* [Utiliser la notation solfege (Do re mi fa sol la si do)](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#utiliser-la-notation-solfege)
* [Faire un répertoire personnel](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#faire-un-répertoire-personnel)
* [Gérer les index](https://github.com/tahitoaa/songbookreadme/blob/master/modedemploi.md#gerer-les-index)

# [Chansons polynésiennes](poly.md)

# Liens utiles

  - Le site:            http://tahitiansongs.fr/ 
  
  contient également des tablatures de ukulele et surtout le répertoire qui inspiré ce projet qui contient une centaine de chansons :
  
  [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf)
  
  - Site collaboratif de paroles de chansons tahitiennes, beaucoup de chansons même rares, ou anciennes, mais les paroles
  sont souvent approximatives ou mal orthographiées: 
  
      http://paroles.webfenua.com/list.php
      
  - Application permettant d'extraire les notes de guitare ou ukulele depuis une vidéo youtube:
  
      https://chordify.net/
