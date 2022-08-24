$(document).ready(function(){       
        var scroll_pos = 20;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 800) {
                $(".scroll").css('background-color', 'black');
            // } else if (scroll_pos >= 900 && scroll_pos < 1000) {
                // $(".scroll").css('background-color', 'transparent');
            } else {
               $(".scroll").css('background-color', 'transparent');
                
            }
        });
    });

// $('#info').progressBar(
//     {
//     throttleTime: 100,
//     debounceTime: 200,
//     progressBarHeight: 25,
//     progressBarColor: '#34495E',
//     progressBarValueColor: 'orange',

    
//     });
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 20;
    document.documentElement.scrollTop = 0;
}

//   // key press block
//   document.onkeydown = function (e) {
//         return false;
// }


// dark mode
const hamburger = document.querySelector("#hamburger");
const checkbox = document.querySelector("#checkbox");
// Theme switcher functionality
checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});




let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
