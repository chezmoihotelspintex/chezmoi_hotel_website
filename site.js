//========================================================================================//
// .............................NAVBAR.............................
//========================================================================================//
var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

// control code for navbar menulist on smaller screen device
function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

// fixed navbar when "scroll top" exceeds 50px
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".top-header").addClass("fixed-navbar");
  } else {
    $(".top-header").removeClass("fixed-navbar");
  }
});

// Add class "active" to the clicked navbar link and remove it from the previously active link
const navLinks = document.querySelectorAll(".nav-menu-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("clicked"); // Debugging log
  });
});

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let current = document.querySelector("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//========================================================================================//
// ...................................... CAROUSEL ......................................
//========================================================================================//
$(document).ready(function () {
  // Home Section Carousel
  $(".home-section-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    navText: [
      "<i class = 'fa fa-chevron-left'></i>",
      "<i class = 'fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Room Section Carousel
  $(".room-section-carousel").owlCarousel({
    // autoplay: true,
    // loop: true,
    rewind: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      "<i class = 'fa fa-chevron-left'></i>",
      "<i class = 'fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
        margin: 10,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Gallery Section Carousel
  $(".gallery-section-carousel").owlCarousel({
    rewind: true,
    // loop: true,
    margin: 3,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    navText: [
      "<i class = 'fa fa-chevron-left'></i>",
      "<i class = 'fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});

//========================================================================================//
// .........................ROOM SECTION & ROOM DETAILS IN MODAL VIEW.....................
//========================================================================================//
// Scroll to room when "Book Now" button on "Navbar" or "Home page" is clicked
function scrollToRooms() {
  const roomsSection = document.getElementById("rooms");
  roomsSection.scrollIntoView();
}
// ----------------------------------------------------------> end

// ROOM CARD HIGHLIGHT EFFECT ON MOUSE ENTER & MOUSE LEAVE
const roomCards = document.querySelectorAll(".room-card");
roomCards.forEach(function (roomCard) {
  // On mouse enter
  roomCard.addEventListener("mouseenter", function addHighlight(event) {
    roomCard.classList.add("room-card-effect");
  });
  // On mouse leave
  roomCard.addEventListener("mouseleave", function removeHighlight(event) {
    roomCard.classList.remove("room-card-effect");
  });
});
// ----------------------------------------------------------> end

// Open room details in modal
const rooms = document.querySelectorAll(".room-details-btn");
const roomType = document.getElementById("roomModalLabel");
const roomDescription = document.querySelector(".room-carousel-text");

const roomTextDescription =
  "Fully furnished with everything you need to make your stay comfortable";

const roomImg = document.querySelector(".room-img");

rooms.forEach(function (room) {
  room.addEventListener("click", function () {
    if (room.value === "suite") {
      roomType.textContent = "Suite";
      roomDescription.textContent = roomTextDescription;
      roomImg.src = "images/room_suite.jpg";
    } else if (room.value === "executive") {
      roomType.textContent = "Executive";
      roomDescription.textContent = roomTextDescription;
      roomImg.src = "images/room_executive.jpg";
    } else if (room.value === "standard") {
      roomType.textContent = "Standard";
      roomDescription.textContent = roomTextDescription;
      roomImg.src = "images/room_standard.jpg";
    } else if (room.value === "standard-mini") {
      roomType.textContent = "Standard Mini";
      roomDescription.textContent = roomTextDescription;
      roomImg.src = "images/room_standard_mini.jpg";
    }
  });
});

// getting current date & disabling past date on booking engine date picker
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

// copy-right year
const copyRightYear = document.querySelector(".year");
copyRightYear.innerHTML = year;
// ----------------------------------------------------------> end
