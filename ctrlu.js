window.addEventListener('keydown',
 function (evt) {
   // U = 85
   // I = 73
   // i = 105
   if (evt.ctrlKey && evt.keyCode == 85) {
     window.alert('hi');
     evt.preventDefault();
   }
}, true);
