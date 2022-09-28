// Scroll Top Function

var goTop = document.getElementById("goTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Basket and Details JS

$(document).ready(function () {
  $(".details_color").on("click", "label", function () {
    var i = 0;
    var image_src = $(this).find("img")[0].src;
    $(".show").find("img").attr("src", image_src);

    $("#small-img-roll")
      .find(".show-small-img")
      .each(function () {
        i++;
        console.log($(this).attr("src"));
        $(this).attr("src", image_src);
      });
  });

  let i = $(".link-text span").text();
  if (i == 0) {
    $(".thereis-noproduct").css({ display: "block" });
    $("#carousel-wrapper").css({ display: "none" });
  } else {
    $(".thereis-noproduct").css({ display: "none" });
    $("#carousel-wrapper").css({ display: "flex" });
  }
});

$(".details_add").on("click", function () {
  let i = $(".shopcart-dropdown .count").text();
  // i++;
  console.log(i++);
  $(".shopcart-dropdown .count").text(i);

  if (i == 0) {
    $(".thereis-noproduc").css({ display: "block" });
    $("#carousel-wrapper").css({ display: "none" });
  } else {
    $(".thereis-noproduct").css({ display: "none" });
    $("#carousel-wrapper").css({ display: "flex" });
  }
});

$(".discount-code").on("keyup", "input", function () {
  if ($(this).val() != "") {
    $(".discount-code button").attr("disabled", false);
  } else {
    $(".discount-code button").attr("disabled", true);
  }
});

// Basket mini slider

$(document).ready(function () {
  $("#carousel-wrapper .basket-items").slick({
    vertical: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// INDEX JS
$(document).ready(function () {
  // let imgWidth = $(".category-samples img").width();
  // $(".category-samples img").css("height", imgWidth);

  // let itemsImgWidth = $(".items img").width() / 3.5;
  // $(".items img").css("height", itemsImgWidth);

  // let homeImgWidth = $(".single-home-img img").width() / 1.3;
  // $(".single-home-img  img").css("height", homeImgWidth);

  // $(window).on("resize", function () {
  //   let imgWidth = $(".category-samples img").width();
  //   $(".category-samples img").css("height", imgWidth);
  //   let itemsImgWidth = $(".items img").width() / 3.5;
  //   $(".items img").css("height", itemsImgWidth);

  //   let homeImgWidth = $(".single-home-img img").width() / 1.3;
  //   $(".single-home-img  img").css("height", homeImgWidth);
  //   let mainImgWidth = $(".main-slider img").width() / 2;
  //   $(".main-slider  img").css("height", mainImgWidth);
  // });

  $(".first-slider").slick({
    infinite: false,
    loop: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // tablet breakpoint
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 850, // tablet breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 576, // mobile breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 475, // mobile breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 425, // mobile breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".product_color").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 700, // tablet breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ]
  });

  $(".home-slider").slick({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    arrows: false,
  });

  $(".related-products").slick({
    slidesToShow: 4, // default desktop values
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200, // tablet breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980, // tablet breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// SIZE NOTIFY JS
$.prototype.notify = function () {
  $(this).toggleClass("notify");
};

// DETAILS PRODUCT SLIDER
$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: true,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="70%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2.5px;stroke: rgb(146, 146, 146);" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="70%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width:2.5px;stroke:rgb(146, 146, 146);" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});

// PRODUCT FILTER JS

$(function () {
  "use strict";

  $(".js-menu-toggle").click(function (e) {
    var $this = $(this);
    if ($("body").hasClass("show-sidebar")) {
      $("body").removeClass("show-sidebar");
      $this.removeClass("active");
    } else {
      $("body").addClass("show-sidebar");
      $this.addClass("active");
    }

    e.preventDefault();
  });

  // click outisde offcanvas
  $(document).mouseup(function (e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("show-sidebar")) {
        $("body").removeClass("show-sidebar");
        $("body").find(".js-menu-toggle").removeClass("active");
      }
    }
  });
});

// Price range JS

document.addEventListener("DOMContentLoaded", function () {
  // Showing tooltip for AVAILABLE COLORS
  $(function () {
    $('[data-tooltip="tooltip"]').tooltip();
  });

  // For Range Sliders
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");

  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");

  var amountLeft = document.getElementById("amount-left");
  var amountRight = document.getElementById("amount-right");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(
      parseInt(_this.value),
      parseInt(inputRight.value) - 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    amountLeft.innerText = parseInt(percent * 10);
  }
  setLeftValue();

  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(
      parseInt(_this.value),
      parseInt(inputLeft.value) + 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;

    amountRight.innerText = parseInt(percent * 10);
    thumbRight.style.right = 100 - percent + "%";
    range.style.right = 100 - percent + "%";
  }
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function () {
    thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function () {
    thumbLeft.classList.remove("active");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function () {
    thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function () {
    thumbRight.classList.remove("active");
  });
});

// HEADER STICKY JS

$(window).scroll(function () {
  let nav = $(".navbar-catalog");
  if ($(window).scrollTop() >= 100) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});

// DropDown and AddFavorite
$.prototype.addFavorite = function () {
  var input = $(this);
  var check = input.attr("data-active");
  if (check == 0) {
    input.siblings("i").addClass("fa");
    input.attr("data-active", 1);
    input.closest("div").children("i").addClass("fa");
  } else {
    input.attr("data-active", 0);
    input.siblings("i").removeClass("fa");
    input.closest("div").children("i").removeClass("fa");
    input.closest("div").children("i").addClass("fa");
    input.siblings("i").addClass("far");
  }
};
$(".dropdown-menu").on("click", function (event) {
  event.stopPropagation();
});

// Basket QUANTITY JS
$(document).ready(function () {
  var totalPoints = 0;
  $(".basket ul li")
    .find("input")
    .each(function () {
      totalPoints = totalPoints + parseInt($(this).val());
    });
  $(".shopcart-dropdown .count").text(totalPoints);
});

$(".basket-quantity input").val(1);
var quantity = $(".basket-quantity input").val();

$(".basket-quantity").on("click", ".decrease", function () {
  var quantity = $(this).next().val();
  if (quantity > 1) {
    $(this)
      .next()
      .val(parseInt(quantity) - 1);
    var totalPoints = 0;
    $(".basket ul li")
      .find("input")
      .each(function () {
        totalPoints = totalPoints + parseInt($(this).val());
      });
    $(".shopcart-dropdown .count").text(totalPoints);
  }
});

$(".basket-quantity").on("click", ".increase", function () {
  var quantity = $(this).prev().val();
  $(this)
    .prev()
    .val(parseInt(quantity) + 1);
  var totalPoints = 0;
  $(".basket ul li")
    .find("input")
    .each(function () {
      totalPoints = totalPoints + parseInt($(this).val());
    });
  $(".shopcart-dropdown .count").text(totalPoints);
});

$(".clear").on("click", ".remove", function () {
  $(this).parents("tr").remove();
});

$(".enter-price").keypress(function (evt) {
  if (evt.which == "0".charCodeAt(0) && $(this).val().trim() == "") {
    return false;
  }

  $(".basket-quantity").on("keyup", "input", function () {
    var quantity = $(this).val();
    var totalPoints = 0;
    $(".basket ul li")
      .find("input")
      .each(function () {
        if ($(this).val() != "") {
          totalPoints = totalPoints + parseInt($(this).val());
        }
      });
    $(".shopcart-dropdown .count").text(totalPoints);
  });

  $(".basket-quantity").on("keyup", "input", function () {
    var totalPoints = 0;
    $(".basket ul li")
      .find("input")
      .each(function () {
        totalPoints = totalPoints + parseInt($(this).val());
      });
    $(".shopcart-dropdown .count").text(totalPoints);
  });
});
