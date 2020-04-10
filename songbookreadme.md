
Le [songbook.pdf](songbook.pdf) (version du 3 avril 2020).

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

# Mode d'emploi

Ce projet utilise le package `songs` du langage Latex pour générer le répertoire.
La documentation officielle du package est disponible [ici](http://mirrors.standaloneinstaller.com/ctan/macros/latex/contrib/songs/songs.pdf) et [là](http://songs.sourceforge.net/songsdoc/songs.html)

Le projet est accessible depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

### Compilation : comment générer le pdf ?

Le pdf est généré à partir de tous les fichiers dont le nom finit par `.tex`. Tous ces fichiers doivent respecter la syntaxe du langage informatique Latex. Si un de ces fichiers comporte une erreur de frappe ou de syntaxe, le pdf ne sera pas généré et overleaf affichera des erreurs. En cas de doutes concernant la syntaxe, se référer aux autres chansons déjà ajoutées.

L'étape de génération du pdf s'apelle aussi la *compilation*. Pour compiler, il suffit d'appuyer sur `CTRL + S` ou bien de cliquer sur le bouton vert `Recompiler`. Overleaf va alors afficher le pdf.

### Commentaires :  comment ignorer du code à la compilation ?

Si une seule ligne pose problème, c'est-à-dire qu'elle génère une erreur lors de la compilation, on peut l'ignorer en la faisant commencer par `%`. Toutes les lignes qui commencent par `%` seront ignorées lors de la compilation. On peut utiliser le `%` pour insérer des commentaires dans le code, pour mettre une remarque ou un rappel par exemple. 

## Comment ajouter une chanson ?

(Regarder d'abord dans [tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) si elle n'y est pas déjà) 

Ouvrir le projet overleaf depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj)

1) Créer un fichier `<chanson>.tex` dans un des repertoires de `songs`.
2) Copier le contenu d'une chanson qui existe ou bien regarder la section *Syntaxe d'une chanson* ci-dessous pour écrire les paroles.
3) Une fois les paroles écrites dans`<chanson>.tex`, il faut l'ajouter au fichier `songbook.tex` pour qu'elle soit incluse dans le répertoire. Pour cela chanson ajouter une ligne `\input{songs/*/*.tex}` dans le fichier `songbook.tex` là ou se trouvent les autres chansons. 
4) Appuyer sur le bouton `Recompiler` en vert, le répertoire sera généré si il n'y a pas d'erreur dans le code.

## Syntaxe d'une chanson

Une chanson doit commencer par `\beginsong{__titre__}[by={__auteur__}]` (remplacer `__titre__` et `__auteur__`) et doit finir par `\endsong`.

On peut découper les paroles en `\beginverse` `\endverse` ou bien `\beginchorus` et `\endchorus`.

On peut indiquer qu'une ligne se *répète* (ex. bis) avec `\rep{3}` ( x 3) en fin de ligne.

Pour rajouter les *accords*  placer `\[C]` au bon endroit dans les paroles.

Exemple: `\[E] When i fell in love with \[A]you`.

Le bémol se note `&` exemple `\[E&]`.

Exemple de chanson.
```
\beginsong{You are my sunshine}[by=Kimie]
\transpose{\shift}

\beginverse
\[A7]You are my \[D]sunshine my only sunshine 
\[D7]You make me \[G]happy when skies are \[D]grey
You'll never \[G]know dear how much i \[D] love you \[Bm]
\[A#]please don't \[E7]take my \[A7]sunshine a\[D]way

O oe ho'o kahi 
Ku'ulahulali
Ku'uho'ohau \[G] o li 
Ke \[Em]kalinei \[D]au 
Mai hele\[G]aku e noho \[D]mai \[Bm] \[A#]
E a\[E7]loha no hau ia \[D]oe
\endverse

\beginchorus
This little light of mine im gonna let it shine 
\[G]This little light of mine im gonna let it shine
This little light of mine im gonna let it \[D]shine
let it \[E]shine
Let it \[A]shine
Let it \[D]shine 
\endchorus
\endsong
```

### Transposition

On peut indiquer un capo avec `\capo{2}` (capo sur la deuxième). L'usage du capo apparaîtra dans la chanson mais cela n'affecte pas les notes affichées.

On peut transposer les notes avec `\transpose{n}`(remplacer *n* par 1, 2, 3 ...) pour transposer de *n* notes (en comptant les demi-tons).
On peut placer `\transpose{n}` après `\beginverse`, après `\beginchorus` ou bien `\beginsong` selon que l'on veut
transposer toute la chanson ou juste une partie.

On peut décider de transposer toutes les chansons du répertoire (sans modifier les fichiers `songs/*/<chanson>.tex` en ajoutant dans `songbook.tex` la commande suivante:

```\renewcommand{\shift}{n}```

(remplacer *n* par le nombre de notes à transposer en comptant les demi-tons).

### Personnalisation

Il est possible de générer un répertoire personnalisé qui contient uniquement certaines chansons (parmi toutes celles disponnible dans le projet). On peut aussi définir soit-même les valeurs de transposition pour chaque chanson.

Pour créer un répertoire personnalisé, créer un nouveau fichier `toto.tex` dans le répertoire `custoperso`.
Et le remplir en s'inspirant de `songbook.tex` comme suit:

```
\input{./struct/header.tex}

\title{Custo Perso de Toto}
\author{Titi}

\input{./struct/introduction.tex}
\songsection{Titi}
\begin{songs}{titlidx,authidx}
\input{./songs/withchords/AitutakiParadise.tex}
\input{./songs/withchords/YouAreMySunshine.tex}
\end{songs}

\input{./struct/foot.tex}
``` 
## Orthographe pour le tahitien

* Pour le tarava sur un 'a' : `\={a}`
* Pour le 'eta juste mettre le ': `'a`

# TODO
* Gérer les index et la tableofcontents
* Définir la classification de songs (guit/uke/nochords ou bien /anglais/francais/tahitien ? ou autre ? )
* Mettre des jolies couleurs
* Faire des transpositions automatiques, et personnalisables.
* Ajouter des liens pour les vidéos
* Mettre à jour le input path

