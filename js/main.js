
function get(id){
  return document.getElementById(id).value;
}
function LatexSong(title, author, content){
  this.title = title;
  this.author = author;
  this.content = content;
  this.toLatex = function () {
    var tex = "";
    tex += "\\beginsong{" + this.title + "}[by=" + this.author + "] \n\n\n";
    tex += this.content;
    tex += "\\endsong";
    return tex;
  }
}
function generate() {
  var texsong = new LatexSong("","","");
  texsong.title = get("title");
  texsong.author = get("author");
  texsong.content = get("content");

  document.getElementById("result").innerText = texsong.toLatex();
}
function addChord(){
  var content = document.getElementById("content");
  var pos = content.selectionStart;
  var lyrics = conntent.value;
  alert(lyrics);
  content.innerHTML += lyrics.substr(0, pos) + "\\[C]" + lyrics.substr(pos);
} 
