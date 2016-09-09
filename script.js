
//Scroll Spy function - just used
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});




//Function: Disables hidden class (Shows article)
function showArticle() {
   $("#myCarousel").fadeIn(2000);
}



//Using: showArticle function
document.getElementById('show-article').onclick = function() {
   showArticle();
}





//Function: Disables the Start Match button on load
$(document).ready(function(){
$( "#show-article" ).button({disabled:true});
});




//Function: Disables the Final Preparation button on load
$(document).ready(function(){
$( "#train2" ).button({disabled:true});
});




//Function: Changes the width of the progress bar to 100 %
function fillProgressWidth() {
  $('#progress-bar1').width(100 + "%").attr('aria-valuenow', 100);
}

//Function: Changes the width of the progress bar to 88 %
function changeProgressWidth() {
  $('#progress-bar1').width(88 + "%").attr('aria-valuenow', 88);
}


//Function: Changes the label of the progress bar to 100 %
function fillProgressLabel() {
  $('#progress-bar1').html("100%");
}

//Function: Changes the label of the progress bar to 88 %
function changeProgressLabel() {
  $('#progress-bar1').html("88%");
}

//Function: Changes the Percents of the Training Attributes to 100 %
function fillPercentsSpans() {
  $(".percents").text("100%");
}

//Function: Changes the Percents of the Training Attributes to 88 %
function changePercentsSpans() {
  $(".percents").text("88%");
}


//Function: Shows the green improvement Arrows
function showArrows() {
  $( "#arrow1" ).css('display', 'block');
  $( "#arrow2" ).css('display', 'block');
}

//Function: Enabling Start Match button
function enableStartButton() {
  $('#show-article').removeAttr('disabled');
}

//Function: Enabling Final Preparation button
function enableFinalPreparationButton() {
  $('#train2').removeAttr('disabled');
}

//Using: First Training Process that changes the elements % to 88 and enables the Training 2 button
document.getElementById('train1').onclick = function() {
  changeProgressWidth();
  changeProgressLabel();
  changePercentsSpans();
  showArrows();
  enableFinalPreparationButton();
}

//Using: Second Training Process that changes the elements % to 100 and enables the Start Match button
document.getElementById('train2').onclick = function() {
  fillProgressWidth();
  fillProgressLabel();
  fillPercentsSpans();
  showArrows();
  enableStartButton();
}


//Functions: Previous, Next controls for the Carousel 
    function carouselPrevious() {
      $("#myCarousel").carousel("prev");
    }

    function carouselNext() {
       $("#myCarousel").carousel("next");
    }


//Using: Carousel control functions
    $(".left").click(function(){
        carouselPrevious();
    });




    $(".right").click(function(){
        carouselNext();
    });









//FUNCTIONS: DRAG AND DROP
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




//Event Handler: Drag End when Droppable div is Target
var $divDroppable = document.getElementById("droppable");
$divDroppable.addEventListener("dragend", function(event) {

  var id = event.target.id;

  if (id == "drag1") {
    event.dataTransfer.setData("Text", event.target.id);
    $("#drop-article").fadeIn(1400);
    document.getElementById("drop-article").innerHTML = "Name: Lionel Messi <br> Born: 1987";
    event.target.style.opacity = "1";
    $("#droppable").css("border", "1px solid #aaaaaa")
    $("#iframe1").fadeIn(1500);
    $("#iframe1-title").fadeIn(1500);
    
  } else if (id == "drag2") {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("drop-article").innerHTML = "Name: Luis Suarez <br> Born: 1987";
    event.target.style.opacity = "1";
    $("#drop-article").fadeIn(400);
    $("#droppable").css("border", "1px solid #aaaaaa")
    $("#iframe2").fadeIn(1500);
    $("#iframe2-title").fadeIn(1500);
  } else if (id =="drag3") {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("drop-article").innerHTML = "Name: Neymar Jr. <br> Born: 1992";
    event.target.style.opacity = "1";
    $("#drop-article").fadeIn(400);
    $("#droppable").css("border", "1px solid #aaaaaa")
    $("#iframe3").fadeIn(1500);
    $("#iframe3-title").fadeIn(1500);
  }
});


//Event Handler: Drag End when Draggable divs are Target
var $divDraggable1 = document.getElementById("draggable1");
$divDraggable1.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
  $("#drop-article").fadeOut(1200);
  $("#droppable").css("border", "1px solid #aaaaaa")
  $("#iframe1").fadeOut(1200);
  $("#iframe1-title").fadeOut(1200);
});

var $divDraggable2 = document.getElementById("draggable2");
$divDraggable2.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
  $("#drop-article").fadeOut(1200);
  $("#droppable").css("border", "1px solid #aaaaaa")
  $("#iframe2").fadeOut(1200);
  $("#iframe2-title").fadeOut(1200);  
});

var $divDraggable3 = document.getElementById("draggable3");
$divDraggable3.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
  $("#drop-article").fadeOut(1200);
  $("#droppable").css("border", "1px solid #aaaaaa")
  $("#iframe3").fadeOut(1200);
  $("#iframe3-title").fadeOut(1200);
});


/*

document.addEventListener("dragstart", function(event) {
    event.target.style.opacity = "0.4";
    document.getElementById("drop-article").innerHTML = "Please drop the selected element in the above container";
    $("#drop-article").fadeOut(200);
});
*/


//Event Handler: Drag Start
$divDraggable1.addEventListener("dragstart", function(event) {
    event.target.style.opacity = "0.4";
    document.getElementById("drop-article").innerHTML = "Please drop the selected element in the above container";
    $("#drop-article").fadeIn(400);
    $("#droppable").css("border", "2px dashed #ccc")
});


$divDraggable2.addEventListener("dragstart", function(event) {
    event.target.style.opacity = "0.4";
    document.getElementById("drop-article").innerHTML = "Please drop the selected element in the above container";
    $("#drop-article").fadeIn(400);
    $("#droppable").css("border", "2px dashed #ccc")
});


$divDraggable3.addEventListener("dragstart", function(event) {
    event.target.style.opacity = "0.4";
    document.getElementById("drop-article").innerHTML = "Please drop the selected element in the above container";
    $("#drop-article").fadeIn(400);
    $("#droppable").css("border", "2px dashed #ccc")
});


$divDroppable.addEventListener("dragstart", function(event) {
    event.target.style.opacity = "0.4";
    $("#droppable").css("border", "2px dashed #ccc")
});








// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('scorer-image1');
var img2 = document.getElementById('scorer-image2');
var img3 = document.getElementById('scorer-image3');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}




/*

    $('#overlay').click(function(e) {
      e.preventDefault();
      $('#overlay, #alertModalOuter').fadeOut(400, function() {
      $('#close').remove();
    });
});

*/