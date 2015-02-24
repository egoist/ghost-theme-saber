var posts = document.querySelectorAll('.post-content');
emojione.imagePathPNG = '/assets/lib/emojione/assets/png/';
Array.prototype.forEach.call(posts, function(el, i){
  var parsed = emojione.toImage(el.innerHTML);
  el.innerHTML = parsed;
});
