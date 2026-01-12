
let track = document.getElementById("track");
let index = 0;
let maxSlides = 4; 

document.getElementById("next").onclick = moveNext;
document.getElementById("prev").onclick = movePrev;

function moveNext() {
    index++;
    if(index > maxSlides) index = 0;
    track.style.transform = `translateX(-${index * 280}px)`;
}

function movePrev() {
    index--;
    if(index < 0) index = maxSlides;
    track.style.transform = `translateX(-${index * 280}px)`;
}
setInterval(moveNext, 3000);
function funcation(icon) {
    if(icon.classList.contains("fa-heart-o")) {
        icon.classList.remove("fa-heart-o");
        icon.classList.add("fa-heart");
    } else {
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-heart-o");
    }
}


var splide = new Splide('.splide', {
    perPage: 3,
    cover: true,
    height: '10rem',
    lazyLoad: 'nearby',

    breakpoints: {
        768: {
            perPage: 2,
            height: '8rem',
        },
        480: {
            perPage: 1,
            height: '6rem',
        }
    }
});



splide.mount();
document.querySelectorAll(".faq-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq-item button").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
    }

  });

});


function funcation(icon) {
    if (icon.classList.contains("fa-heart-o")) {
        icon.classList.remove("fa-heart-o");
        icon.classList.add("fa-heart");
    } else {
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-heart-o");
    }
}



function changepicture(img) {
    document.getElementById("girlchang").src = img.src;
    localStorage.setItem("lastImage", img.src);
}
window.onload = function() {
    let savedImage = localStorage.getItem("lastImage");
    if (savedImage) {
        document.getElementById("girlchang").src = savedImage;
    }
};
    

$('.gallery-list-item').click(function () {
  $(this).addClass('active-item')
         .siblings()
         .removeClass('active-item');

  let value = $(this).attr('data-filter');

  if (value === 'all') {
    $('.filter').show(300);
  } else {
    $('.filter').not('.' + value).hide(300);
    $('.filter').filter('.' + value).show(300);
  }
});

$(window).scroll(function () {
  let position = $(this).scrollTop();

  if (position >= 4300) {
    $('.card-1').addClass('moveFromLeft');
    $('.card-2').addClass('moveFromBottom');
    $('.card-3').addClass('moveFromRight');
  } else {
    $('.card-1').removeClass('moveFromLeft');
    $('.card-2').removeClass('moveFromBottom');
    $('.card-3').removeClass('moveFromRight');
  }
});









