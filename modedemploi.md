# Mode d'emploi

* [Générer le pdf](#generer-le-pdf)
* [Ajouter une chanson](#ajouter-une-chanson)
* [Syntaxe d'une chanson](#syntaxe-dune-chanson)
* [Transposer une ou toutes les chansons](#transposer-une-ou-toutes-les-chansons)
* [Faire un répertoire personnel](#faire-un-répertoire-personnel)
* [Utiliser la notation solfege (Do re mi fa sol la si do)](#utiliser-la-notation-solfege)
* [Gérer les index](#gerer-les-indexes)
* [Retour au Readme](songbookreadme.md)

( Pour les personnes qui connaissent Latex: ce projet utilise le package `songs` du langage Latex pour générer le répertoire.
La documentation officielle du package est disponible [ici](http://mirrors.standaloneinstaller.com/ctan/macros/latex/contrib/songs/songs.pdf) et [là](http://songs.sourceforge.net/songsdoc/songs.html) )

Le projet est accessible depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

Les chansons sont stockées dans `songs`. Chaque dossier dans `songs` correspond à une section dans le songbook.
Le fichier principal est `songbook.tex` qui liste les chansons à inclure. 
Il est regénéré automatiquement (plus ou moins régulièrement) pour inclure TOUTES les chansons contenues dans songs.

Il y a deux choses à faire:
  1) Ecrire une chanson (paroles avec ou sans les notes)
  2) L'ajouter au fichier principal (`songbook.tex` par défaut ou bien un fichier perso dans `\curstoperso`)

L'idée est d'écrire *une seule version de la chanson*  puis de la réutiliser dans les pdf de tout le monde en pouvant les transposer selon les préférences de chacun (sans changer les notes du fichier original).

# Générer le pdf 

Le pdf est généré à partir de tous les fichiers dont le nom finit par `.tex`. Tous ces fichiers doivent respecter la syntaxe du langage informatique Latex. Si un de ces fichiers comporte une erreur de frappe ou de syntaxe, le pdf ne sera pas généré et overleaf affichera des erreurs. En cas de doutes concernant la syntaxe, se référer aux autres chansons déjà ajoutées.

L'étape de génération du pdf s'apelle aussi la *compilation*. 

Pour compiler:
* en haut à gauche `Menu` > `Document principal` > `songbook.tex` (ou  bien n'importe quel fichier dans `\custoperso` pour voir les pdf des autres gens);
* appuyer sur `CTRL + S` ou bien de cliquer sur le bouton vert `Recompiler`. 

Overleaf va alors afficher le pdf.

# Ajouter une chanson

(Regarder d'abord dans [tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) si elle n'y est pas déjà) 

Ouvrir le projet overleaf depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj)

1) Créer un fichier `TitreDeLaChansonToto.tex` dans un des repertoires de `songs`.

2) Copier le contenu d'une chanson qui existe ou bien regarder la section *Syntaxe d'une chanson* ci-dessous pour écrire les paroles.

3) Une fois les paroles écrites dans`TitreDeLaChansonToto.tex`, il faut l'ajouter au fichier `songbook.tex` pour qu'elle soit incluse dans le répertoire. Pour cela chanson ajouter une ligne `\chanson{TitreDeLaChansonToto.tex}{0}` dans le fichier `songbook.tex` là ou se trouvent les autres chansons. Si je mets *2* au lieu de *0*, la chanson aparaitra transposée de 2 notes (ou demi-tons) dans le pdf (mais cela ne change pas les notes dans le fichier `TitreDeLaChansonToto.tex`.

4) `Menu` > `Document principal` > `songbook.tex` puis appuyer sur le bouton `Recompiler` en vert, le répertoire sera généré si il n'y a pas d'erreur dans le code. 

Chercher votre chanson dans le pdf.
**Attention la chanson ne sera pas dans les index !**

Si vous avez votre propre carnet de chant dans `\custoperso` (cf. [Faire un répertoire personnel](#faire-un-répertoire-personnel)) alors il faut remplacer `songbook.tex` par `custototo.tex`

# Syntaxe d'une chanson

Une chanson doit commencer par 
```latex
\beginsong{Titre de la Chanson}[by={Toto le chanteur de la chanson}]
\transpose{\shift}
``` 
et doit finir par 
```latex
\endsong
```
.

On peut découper les paroles en `\beginverse` `\endverse` ou bien `\beginchorus` et `\endchorus`.

On peut indiquer qu'une ligne se *répète* (ex. bis) avec `\rep{3}` ( x 3) en fin de ligne.

Pour rajouter les *accords*  placer `\[C]` au bon endroit dans les paroles.

Exemple: `\[E] When i fell in love with \[A]you`.

Le bémol se note `&` exemple `\[E&]`.

Exemple de chanson : 
```latex
\beginsong{You are my sunshine}[by=Kimie]
\transpose{\shift}

\beginverse
\[A7]You are my \[D]sunshine my only sunshine 
\[D7]You make me \[G]happy when skies are \[D]grey
You'll never \[G]know dear how much i \[D] love you \[Bm]
\[A#]please don't \[E7]take my \[A7]sunshine a\[D]way
\endverse

\beginverse
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


## Les commentaires

Si une seule ligne pose problème, c'est-à-dire qu'elle génère une erreur lors de la compilation, on peut l'ignorer en la faisant commencer par `%`. Toutes les lignes qui commencent par `%` seront ignorées lors de la compilation. On peut utiliser le `%` pour insérer des commentaires dans le code, pour mettre une remarque ou un rappel par exemple. 

```latex
% Cette ligne n'apparait pas dans le pdf
Cette ligne apparait dans le pdf

% On peut utiliser les % pour ajouter des commentaires dans le code
% sans qu'il ne soit visible dans le pdf

Pa la li          % Ceci est aussi un commentaire (a partir du pourcent)
Pa la la          % pas dormir
```

### Suggestion de commentaires
 Ce serait sympa de mettre en commentaire au début d'une chanson des informations comme :
 * qui a écrit ajouté cette chanson (ou un pseudo rigolo);
 * un lien vers une vidéo de la chanson (Plus tard j'essairai de faire apparâitre le lien dans le pdf);
 * Des remarques comme, des doutes sur certaines paroles ou certaines notes;
 * N'importe quelle info potentiellement utile.
 
 Exemple:
 ```latex
 \beginsong{You are my sunshine}[by=Kimie]
\transpose{\shift}

% Ajouté par Toto
% Vidéo (ou lien audio) www.youtubedetoto.com/chansondetoto
% Doute sur toutes les paroles et sur certaines notes

\beginverse
\[A7]You are my \[D]sunshine my only sunshine 
...
 ```
# Transposer une ou toutes les chansons

On peut indiquer un capo avec `\capo{2}` (capo sur la deuxième). L'usage du capo apparaîtra dans la chanson mais cela n'affecte pas les notes affichées.

## Transposer les notes à l'intérieur d'une chanson

On peut transposer les notes d'une chanon (fichier `<chansons>.tex`).
Attention la chanson sera transposée dans tout le répertoire principal.

Utiliser `\transpose{n}`(remplacer *n* par 1, 2, 3 ...) pour transposer de *n* notes (en comptant les demi-tons).
On peut placer `\transpose{n}` après `\beginverse`, après `\beginchorus` ou bien `\beginsong` selon que l'on veut
transposer toute la chanson ou juste une partie.

## Transposer toutes les chansons du répertoire 

On peut décider de transposer **TOUTES** les chansons du répertoire (sans modifier les fichiers `songs/*/<chanson>.tex`).
Pour cela, modifier la ligne 2 de `songbook.tex` en remplacant le *n* par le nombre de notes à transposer:
```latex
\input{./struct/header.tex}
\renewcommand{\shift}{n}
\input{./struct/introduction.tex}
...
```
(en comptant les demi-tons).

Pour transposer uniquement certaines chansons de manières différentes, adaptée à sa voix et à la chanson, se référer à [Faire un répertoire personnel](###faire-un-repertoire-personnel) ci-dessous.

# Faire un répertoire personnel

Il est possible de générer un répertoire personnalisé qui contient:
 * uniquement certaines chansons (parmi toutes celles disponnible dans le projet);
 * les valeurs de transposition personnelles pour chaque chanson.

Pour créer un répertoire personnalisé, créer un nouveau fichier `custototo.tex` dans le répertoire `custoperso`.
Et le remplir en s'inspirant de `songbook.tex` comme suit:

```latex
\input{./struct/header.tex}
\title{Custo Perso de Toto}
\author{Titi}
\maketitle
%% \input{./struct/introduction.tex}
\songsection{Titi}
\begin{songs}{titlidx,authidx}
\chanson{NomDeLaChanson1.tex}{0}
\chanson{NomDeLaChanson2.tex}{3}
\end{songs}
\songsection{tata}
\begin{songs}{titlidx,authidx}
\chanson{NomDeLaChanson3.tex}{0}
\end{songs}
\input{./struct/foot.tex}
```

La chanson2 sera transposée de 3 notes. Les autres ne seront pas transposées (transposés de 0).

Pour compiler ce répertoire perso:
* en haut à gauche `Menu` > `Document principal` > `custototo.tex`;
* appuyer sur `CTRL + S` ou bien de cliquer sur le bouton vert `Recompiler`.

# Utiliser la notation solfege

## Pour écrire les paroles

Par défaut, on utilise la notation `A B C D E F G` pour l'écriture des notes.

On peut choisir d'écrire une chanson en utilisant les notes solfège `LA SI DO RE MI FA SOL` en ajoutant la ligne `\notenames`:

```latex
\beginsong{Ua here au ia oe}[by={cez}]

% Pour ecrire des notes en francais
% (dans cette chanson uniquement)
% aoujter la ligne suivante avant le \transpose

\notenames{LA}{SI}{DO}{RE}{MI}{FA}{SOL}

\transpose{\shift}
```

## Pour changer l'affichage des notes dans le pdf

Dans le fichier de custo perso (ex: dans `custodetoto.tex`), ajouter cette ligne:

```latex
\notenamesout{LA}{SI}{DO}{RE}{MI}{FA}{SOL}
```
avant la premiere section de chanson.

# Gérer les index

# [Retour au Readme](songbookreadme.md)
