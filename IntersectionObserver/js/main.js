document.addEventListener('DOMContentLoaded', function(){
   
   var anim = document.querySelectorAll('p');

  
  var observer = new IntersectionObserver(callback);
  //observer.observe(anim);
  anim.forEach(e=>{
      observer.observe(e);
  })
});

var callback = function(entries, observer) { 
    entries.forEach(e => {
        if(e.isIntersecting === true){
            e.target.style.animation = `anim1 .75s forwards ease-out`;
        }else{
            e.target.style.animation = 'none';
        }
    });
  };