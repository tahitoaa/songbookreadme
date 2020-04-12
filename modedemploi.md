# Mode d'emploi

* [Générer le pdf](##generer-le-pdf)
* [Ajouter une chanson](##ajouter-une-chanson)
* [Syntaxe d'une chanson](##syntaxe-dune-chanson)
* [Transposer une ou toutes les chansons](##transposer-une-ou-toutes-les-chansons)
* [Faire un répertoire personnel](##faire-un-répertoire-personnel)

Ce projet utilise le package `songs` du langage Latex pour générer le répertoire.
La documentation officielle du package est disponible [ici](http://mirrors.standaloneinstaller.com/ctan/macros/latex/contrib/songs/songs.pdf) et [là](http://songs.sourceforge.net/songsdoc/songs.html)

Le projet est accessible depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj).

## Générer le pdf 

Le pdf est généré à partir de tous les fichiers dont le nom finit par `.tex`. Tous ces fichiers doivent respecter la syntaxe du langage informatique Latex. Si un de ces fichiers comporte une erreur de frappe ou de syntaxe, le pdf ne sera pas généré et overleaf affichera des erreurs. En cas de doutes concernant la syntaxe, se référer aux autres chansons déjà ajoutées.

L'étape de génération du pdf s'apelle aussi la *compilation*. 

Pour compiler:
* en haut à gauche `Menu` > `Document principal` > `songbook.tex`;
* appuyer sur `CTRL + S` ou bien de cliquer sur le bouton vert `Recompiler`. 

Overleaf va alors afficher le pdf.

Si une seule ligne pose problème, c'est-à-dire qu'elle génère une erreur lors de la compilation, on peut l'ignorer en la faisant commencer par `%`. Toutes les lignes qui commencent par `%` seront ignorées lors de la compilation. On peut utiliser le `%` pour insérer des commentaires dans le code, pour mettre une remarque ou un rappel par exemple. 

```
% Cette ligne n'apparait pas dans le pdf
Cette ligne apparait dans le pdf
```

## Ajouter une chanson

(Regarder d'abord dans [tahitiansongs](http://tahitiansongs.fr/wp-content/uploads/2011/11/carnet_de_chants2.pdf) si elle n'y est pas déjà) 

Ouvrir le projet overleaf depuis [ce lien](https://fr.overleaf.com/9457921969mhjkwjdnycqj)

1) Créer un fichier `<chanson>.tex` dans un des repertoires de `songs`.
2) Copier le contenu d'une chanson qui existe ou bien regarder la section *Syntaxe d'une chanson* ci-dessous pour écrire les paroles.
3) Une fois les paroles écrites dans`<chanson>.tex`, il faut l'ajouter au fichier `songbook.tex` pour qu'elle soit incluse dans le répertoire. Pour cela chanson ajouter une ligne `\input{songs/*/*.tex}` dans le fichier `songbook.tex` là ou se trouvent les autres chansons. 
4) Appuyer sur le bouton `Recompiler` en vert, le répertoire sera généré si il n'y a pas d'erreur dans le code.

## Syntaxe d'une chanson

Une chanson doit commencer par 
```
\beginsong{Titre de la Chanson}[by={Toto le chanteur de la chanson}]
\transpose{\shift}
``` 
et doit finir par 
```
\endsong
```
.

On peut découper les paroles en `\beginverse` `\endverse` ou bien `\beginchorus` et `\endchorus`.

On peut indiquer qu'une ligne se *répète* (ex. bis) avec `\rep{3}` ( x 3) en fin de ligne.

Pour rajouter les *accords*  placer `\[C]` au bon endroit dans les paroles.

Exemple: `\[E] When i fell in love with \[A]you`.

Le bémol se note `&` exemple `\[E&]`.

Exemple de chanson : 
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

### Transposer une ou toutes les chansons

On peut indiquer un capo avec `\capo{2}` (capo sur la deuxième). L'usage du capo apparaîtra dans la chanson mais cela n'affecte pas les notes affichées.

#### Transposer les notes à l'intérieur d'une chanson

On peut transposer les notes d'une chanon (fichier `<chansons>.tex`).
Attention la chanson sera transposée dans tous le répertoire principal.

Utiliser `\transpose{n}`(remplacer *n* par 1, 2, 3 ...) pour transposer de *n* notes (en comptant les demi-tons).
On peut placer `\transpose{n}` après `\beginverse`, après `\beginchorus` ou bien `\beginsong` selon que l'on veut
transposer toute la chanson ou juste une partie.

#### Transposer toutes les chansons du répertoire 

On peut décider de transposer toutes les chansons du répertoire (sans modifier les fichiers `songs/*/<chanson>.tex`).
Pour cela, modifier la ligne 2 de `songbook.tex` en remplacant le 0 par le nombre de notes à transposer:
```
\input{./struct/header.tex}
\renewcommand{\shift}{0}
\input{./struct/introduction.tex}
```
(en comptant les demi-tons).

Pour transposer uniquement certaines chansons de manières différentes, adaptée à sa voix et à la chanson, se référer à [Faire un répertoire personnel](###faire-un-repertoire-personnel) ci-dessous.

### Faire un répertoire personnel

Il est possible de générer un répertoire personnalisé qui contient:
 * uniquement certaines chansons (parmi toutes celles disponnible dans le projet);
 * les valeurs de transposition personnelles pour chaque chanson.

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
