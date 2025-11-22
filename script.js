
   
    function upDate(previewPic) {
       
        console.log("Đang di chuột vào ảnh:", previewPic.alt);

       
        var imageDiv = document.getElementById('image');

        
        imageDiv.innerHTML = previewPic.alt;

        
        imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    }

   
    function unDo() {
       
        var imageDiv = document.getElementById('image');

        
        imageDiv.style.backgroundImage = "url('')";

        
        imageDiv.innerHTML = "Hover over an image below to display here.";
    }
