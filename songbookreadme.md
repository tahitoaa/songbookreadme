# Répertoire Collaboratif (songbook-collab)

Ce répertoire s'inspire directement du très bon [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) ainsi que du site collaboratif [paroles de webfenua](http://paroles.webfenua.com/list.php) qui permet à chacun de modifier les chansons. Dans notre projet on essaye de combiner les deux idées: faire un joli pdf avec des chansons que tout le monde peut ajouter.

Pour participer il suffit de créer un compte overleaf en suivant [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

Il ne s'agit pas de recopier les paroles déjà présente dans le [carnet de chant tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf), mais plutôt de mettre les dernières nouveautés ou d'inclure les accords dans des chansons disponnible sur [paroles.webfenua](http://paroles.webfenua.com/list.php). De plus, on ne se restreint pas uniquement aux chansons tahitiennes toutes les langues/genres étant les bienvenues.

Les chansons sont stockées dans `songs`. Chaque dossier dqns `songs` correspond à une section dans le songbook.
Le fichier principal est `songbook.tex` qui liste les chansons à inclure. Il est généré automatiquement par le script `makemain.py` ou bien avec la commande `make`, mais on peut le modifier pour vérifier qu'une chanson compile.

# TODO
* Gérer les index et la tableofcontents
* Définir la classification de songs

# Mode d'emploi

Ce projet utilise le package `songs` du langage Latex pour générer le répertoire.
La documentation officielle du package est disponible ici: http://mirrors.standaloneinstaller.com/ctan/macros/latex/contrib/songs/songs.pdf
 ou bien là : http://songs.sourceforge.net/songsdoc/songs.html
## Ajouter une chanson

Ouvrir le projet depuis overleaf: https://fr.overleaf.com/9457921969mhjkwjdnycqj

* Créer un fichier `<chanson>.tex` dans un des repertoires de `songs`.
* Copier le contenu d'une chanson qui existe ou bien regarder la section *Syntaxe d'une chanson* ci-dessous pour écrire les paroles.
* Une fois les paroles écrites dans`<chanson>.tex`, il faut l'ajouter au fichier `songbook.tex` pour qu'elle soit incluse dans le répertoire. Pour cela chanson ajouter une ligne `\input{songs/*/*.tex}` dans le fichier `songbook.tex` là ou se trouvent les autres chansons. 
* Appuyer sur le bouton `Recompiler` en vert, le répertoire sera généré si il n'y a pas d'erreur dans le code.

## Syntaxe d'une chanson

Les paroles d'une chanson doivent êtres écrites entre: `\beginsong{__titre__}[by={__auteur__}]` et `\endsong`, en remplacant bien `__titre__` et `__auteur__`.

On peut découper les paroles en `\beginverse` `\endverse` ou bien `\beginchorus` et `\endchorus`.

On peut indiquer qu'une ligne se *répète* (ex. bis) avec `\rep{3}` ( x 3) en fin de ligne.

Pour rajouter les *accords*  placer `\[C]` au bon endroit dans les paroles.

Exemple: `\[E] When i fell in love with \[A]you`.

Le bémol se note `&` exemple `\[E&]`.

## Orthographe pour le tahitien

* Pour le tarava sur un 'a' : `\={a}`
* Pour le 'eta juste mettre le ': `'a`
