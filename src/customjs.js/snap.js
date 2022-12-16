// alert("workign")


function savetheimg(){
    console.log("saved");
    console.log(document.querySelector('.printMe'));
    html2canvas(document.querySelector('.printMe'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
            console.log(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });   
}

function wholePage()
{
    console.log("runniunt");
  html2canvas(document.body, {
      onrendered: function(canvas)  
      {
        var img = canvas.toDataURL();
        $("#result-image").attr('src', img).show();

        canvas.toBlob(function(blob) {
          saveAs(blob, "wholePage.png");
        });
      }
  });
  return false;
}