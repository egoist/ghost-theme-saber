var posts = document.querySelectorAll('.post-content');

Array.prototype.forEach.call(posts, function(el, i){
  var parsed = minEmoji(el.innerHTML);
  el.innerHTML = parsed;
});


