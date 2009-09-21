window.addEventListener('keydown',
 function (evt) {
   // U = 85
   if (evt.ctrlKey && evt.keyCode == 85) {
     if (evt.target.type && evt.target.type == 'text') {
       evt.target.value = '';
       evt.preventDefault();
     }
   }
}, true);
