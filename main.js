
  

window.onload=function(){
 
   // $(function () {
      $('[data-toggle="popover"]').popover()
   //  })

$("#show_img_btn").on("click", 
function loadFont() {

   
 var canvas = document.createElement("canvas");
 canvas.width = 700;
 canvas.height = 700;
//  canvas.style.width = canvas.style.height = "100px";

 var ctx = canvas.getContext('2d');

//  function setupCanvas(canvas) {
   
//     var dpr = window.devicePixelRatio || 1;
   
//     var rect = canvas.getBoundingClientRect();
 
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
//     var ctx = canvas.getContext('2d');

//     ctx.scale(dpr, dpr);
//     return ctx;
//   }
 // var text = $("#the_text").text();


 // --------------------------------------VARIABLES------------------------------

 
 var inpText = document.getElementById("textcon").value;
 var selectedFont = document.getElementById("fontpick").value;
 var selectedWeight = "700";
 var selectedColor = document.getElementById("colorpick").value;
 var selectedAlign = "center";


 // --------------------------------------CTX------------------------------

 ctx.font =  selectedWeight + " 100px " + selectedFont;
 ctx.fillStyle = selectedColor;
 ctx.textAlign = selectedAlign;


 var array = inpText.split("/n ");
 var fontSize = 30;

 if (ctx.textAlign === "left") {
    var x = 20;    
 } else if (ctx.textAlign === "right") {
    var x = (canvas.width - 20)
 } else if (ctx.textAlign === "center") {
    var x = (canvas.width/2)
 }

 var y = canvas.height/2;

 for (var i = 0; i < array.length; i++) {
 ctx.fillText(array[i], x, y);
 y += (fontSize + 150);
 }
 var img = document.createElement("img");
 img.src=canvas.toDataURL();
 $("#show_img_here").append(img);

 window.scrollBy(0,700);
 scrolldelay = setTimeout(pageScroll,10);

//  $("body").append(canvas);

}
);

}

  


