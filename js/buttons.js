var dtkshow = document.getElementById('dtkShowParallax'),
    dtkhide = document.getElementById('dtkHideParallax'),
    dtkitem = document.getElementById('dtkParallaxFrame');

dtkshow.addEventListener('click', function() {
   dtkitem.style.display = "block";
   dtkhide.className = '';
   dtkshow.className = 'disabled';
});

dtkhide.addEventListener('click', function() {
    dtkitem.style.display = "none";
   dtkhide.className = 'disabled';
   dtkshow.className = '';
});
