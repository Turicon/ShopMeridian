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
    input.closest("div").children("i").addClass("fa");
    input.siblings("i").addClass("fa");
    input.attr("data-active", 1);
  } else {
    input.attr("data-active", 0);
    input.siblings("i").removeClass("fa");
    input.closest("div").children("i").removeClass("fa");
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


// Number Input Mask

(function (jQuery, window, undefined) {
  "use strict";

  var matched, browser;

  jQuery.uaMatch = function (ua) {
      ua = ua.toLowerCase();

      var match = /(opr)[\/]([\w.]+)/.exec(ua) ||
          /(chrome)[ \/]([\w.]+)/.exec(ua) ||
          /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
          /(webkit)[ \/]([\w.]+)/.exec(ua) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
          /(msie) ([\w.]+)/.exec(ua) ||
          ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
          ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
          [];

      var platform_match = /(ipad)/.exec(ua) ||
          /(iphone)/.exec(ua) ||
          /(android)/.exec(ua) ||
          /(windows phone)/.exec(ua) ||
          /(win)/.exec(ua) ||
          /(mac)/.exec(ua) ||
          /(linux)/.exec(ua) ||
          /(cros)/i.exec(ua) ||
          [];

      return {
          browser: match[3] || match[1] || "",
          version: match[2] || "0",
          platform: platform_match[0] || ""
      };
  };

  matched = jQuery.uaMatch(window.navigator.userAgent);
  browser = {};

  if (matched.browser) {
      browser[matched.browser] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.version);
  }

  if (matched.platform) {
      browser[matched.platform] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (browser.android || browser.ipad || browser.iphone || browser["windows phone"]) {
      browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if (browser.cros || browser.mac || browser.linux || browser.win) {
      browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if (browser.chrome || browser.opr || browser.safari) {
      browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if (browser.rv) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if (browser.safari && browser.android) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;


  jQuery.browser = browser;
})(jQuery, window);


(function (a) { var b = (a.browser.msie ? "paste" : "input") + ".mask", c = window.orientation != undefined; a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn" }, a.fn.extend({ caret: function (a, b) { if (this.length != 0) { if (typeof a == "number") { b = typeof b == "number" ? b : a; return this.each(function () { if (this.setSelectionRange) this.setSelectionRange(a, b); else if (this.createTextRange) { var c = this.createTextRange(); c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select() } }) } if (this[0].setSelectionRange) a = this[0].selectionStart, b = this[0].selectionEnd; else if (document.selection && document.selection.createRange) { var c = document.selection.createRange(); a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length } return { begin: a, end: b } } }, unmask: function () { return this.trigger("unmask") }, mask: function (d, e) { if (!d && this.length > 0) { var f = a(this[0]); return f.data(a.mask.dataName)() } e = a.extend({ placeholder: "_", completed: null }, e); var g = a.mask.definitions, h = [], i = d.length, j = null, k = d.length; a.each(d.split(""), function (a, b) { b == "?" ? (k--, i = a) : g[b] ? (h.push(new RegExp(g[b])), j == null && (j = h.length - 1)) : h.push(null) }); return this.trigger("unmask").each(function () { function v(a) { var b = f.val(), c = -1; for (var d = 0, g = 0; d < k; d++)if (h[d]) { l[d] = e.placeholder; while (g++ < b.length) { var m = b.charAt(g - 1); if (h[d].test(m)) { l[d] = m, c = d; break } } if (g > b.length) break } else l[d] == b.charAt(g) && d != i && (g++, c = d); if (!a && c + 1 < i) f.val(""), t(0, k); else if (a || c + 1 >= i) u(), a || f.val(f.val().substring(0, c + 1)); return i ? d : j } function u() { return f.val(l.join("")).val() } function t(a, b) { for (var c = a; c < b && c < k; c++)h[c] && (l[c] = e.placeholder) } function s(a) { var b = a.which, c = f.caret(); if (a.ctrlKey || a.altKey || a.metaKey || b < 32) return !0; if (b) { c.end - c.begin != 0 && (t(c.begin, c.end), p(c.begin, c.end - 1)); var d = n(c.begin - 1); if (d < k) { var g = String.fromCharCode(b); if (h[d].test(g)) { q(d), l[d] = g, u(); var i = n(d); f.caret(i), e.completed && i >= k && e.completed.call(f) } } return !1 } } function r(a) { var b = a.which; if (b == 8 || b == 46 || c && b == 127) { var d = f.caret(), e = d.begin, g = d.end; g - e == 0 && (e = b != 46 ? o(e) : g = n(e - 1), g = b == 46 ? n(g) : g), t(e, g), p(e, g - 1); return !1 } if (b == 27) { f.val(m), f.caret(0, v()); return !1 } } function q(a) { for (var b = a, c = e.placeholder; b < k; b++)if (h[b]) { var d = n(b), f = l[b]; l[b] = c; if (d < k && h[d].test(f)) c = f; else break } } function p(a, b) { if (!(a < 0)) { for (var c = a, d = n(b); c < k; c++)if (h[c]) { if (d < k && h[c].test(l[d])) l[c] = l[d], l[d] = e.placeholder; else break; d = n(d) } u(), f.caret(Math.max(j, a)) } } function o(a) { while (--a >= 0 && !h[a]); return a } function n(a) { while (++a <= k && !h[a]); return a } var f = a(this), l = a.map(d.split(""), function (a, b) { if (a != "?") return g[a] ? e.placeholder : a }), m = f.val(); f.data(a.mask.dataName, function () { return a.map(l, function (a, b) { return h[b] && a != e.placeholder ? a : null }).join("") }), f.attr("readonly") || f.one("unmask", function () { f.unbind(".mask").removeData(a.mask.dataName) }).bind("focus.mask", function () { m = f.val(); var b = v(); u(); var c = function () { b == d.length ? f.caret(0, b) : f.caret(b) }; (a.browser.msie ? c : function () { setTimeout(c, 0) })() }).bind("blur.mask", function () { v(), f.val() != m && f.change() }).bind("keydown.mask", r).bind("keypress.mask", s).bind(b, function () { setTimeout(function () { f.caret(v(!0)) }, 0) }), v() }) } }) })(jQuery);

/*     My Javascript      */

$(function () {

  $("#phone").mask("(99) 999-99-99");


  $("#phone").on("blur", function () {
      var last = $(this).val().substr($(this).val().indexOf("-") + 1);

      if (last.length == 5) {
          var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

          var lastfour = last.substr(1, 4);

          var first = $(this).val().substr(0, 9);

          $(this).val(first + move + '-' + lastfour);
      }
  });
}); 