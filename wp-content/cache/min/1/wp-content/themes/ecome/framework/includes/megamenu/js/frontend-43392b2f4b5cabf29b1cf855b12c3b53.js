(function ($) {
  "use strict";
  function ecome_resizeMegamenu() {
    var window_size = jQuery("body").innerWidth();
    window_size += ecome_get_scrollbar_width();
    if (window_size > 991) {
      $(".ecome-menu-wapper").each(function () {
        if ($(this).length > 0) {
          var container = $(this);
          if (container != "undefined") {
            var container_width = 0,
              container_offset = container.offset();
            container_width = container.innerWidth();
            setTimeout(function () {
              $(".ecome-menu-wapper .item-megamenu").each(function (
                index,
                element
              ) {
                $(element)
                  .children(".megamenu")
                  .css({ "max-width": container_width + "px" });
                var sub_menu_width = $(element)
                    .children(".megamenu")
                    .outerWidth(),
                  item_width = $(element).outerWidth(),
                  container_left = container_offset.left,
                  container_right = container_left + container_width,
                  item_left = $(element).offset().left,
                  overflow_left =
                    sub_menu_width / 2 > item_left - container_left,
                  overflow_right =
                    sub_menu_width / 2 + item_left > container_right;
                $(element)
                  .children(".megamenu")
                  .css({
                    left: "-" + (sub_menu_width / 2 - item_width / 2) + "px",
                  });
                if (overflow_left) {
                  var left = item_left - container_left;
                  $(element)
                    .children(".megamenu")
                    .css({ left: -left + "px" });
                }
                if (overflow_right && !overflow_left) {
                  var left = item_left - container_left;
                  left = left - (container_width - sub_menu_width);
                  $(element)
                    .children(".megamenu")
                    .css({ left: -left + "px" });
                }
              });
            }, 100);
          }
        }
      });
    }
  }
  function ecome_auto_width_vertical_menu() {
    var full_width = parseInt($(".container").innerWidth()) - 30;
    $(".ecome-menu-wapper.vertical.support-mega-menu").each(function () {
      var menu_width = parseInt($(this).actual("width")),
        w = full_width - menu_width;
      if (w > 0) {
        $(this)
          .find(".megamenu")
          .each(function () {
            var style = $(this).attr("style");
            style = style == undefined ? "" : style;
            style = style + " max-width:" + w + "px;";
            $(this).attr("style", style);
          });
      }
    });
  }
  function ecome_get_scrollbar_width() {
    var $inner = jQuery('<div style="width:100%;height:200px;">test</div>'),
      $outer = jQuery(
        '<div style="width:200px;height:150px;position:absolute;top:0;left:0;visibility:hidden;overflow:hidden;"></div>'
      ).append($inner),
      inner = $inner[0],
      outer = $outer[0];
    jQuery("body").append(outer);
    var width1 = inner.offsetWidth;
    $outer.css("overflow", "scroll");
    var width2 = outer.clientWidth;
    $outer.remove();
    return width1 - width2;
  }
  function ecome_menuclone_all_menus() {
    if (
      !$(".ecome-menu-clone-wrap").length &&
      $(".ecome-clone-mobile-menu").length > 0
    ) {
      $("body").prepend(
        '<div class="ecome-menu-clone-wrap">' +
          '<div class="ecome-menu-panels-actions-wrap"><a class="ecome-menu-close-btn ecome-menu-close-panels" href="#">x</a></div>' +
          '<div class="ecome-menu-panels"></div>' +
          "</div>"
      );
    }
    var i = 0,
      panels_html_args = Array();
    if (
      !$(".ecome-menu-clone-wrap .ecome-menu-panels #ecome-menu-panel-main")
        .length
    ) {
      $(".ecome-menu-clone-wrap .ecome-menu-panels").append(
        '<div id="ecome-menu-panel-main" class="ecome-menu-panel ecome-menu-panel-main"><ul class="depth-01"></ul></div>'
      );
    }
    $(".ecome-clone-mobile-menu").each(function () {
      var $this = $(this),
        thisMenu = $this,
        this_menu_id = thisMenu.attr("id"),
        this_menu_clone_id = "ecome-menu-clone-" + this_menu_id;
      if (!$("#" + this_menu_clone_id).length) {
        var thisClone = $this.clone(!0);
        thisClone.find(".menu-item").addClass("clone-menu-item");
        thisClone.find("[id]").each(function () {
          thisClone
            .find('.vc_tta-panel-heading a[href="#' + $(this).attr("id") + '"]')
            .attr(
              "href",
              "#" +
                ecome_menuadd_string_prefix(
                  $(this).attr("id"),
                  "ecome-menu-clone-"
                )
            );
          thisClone
            .find(
              '.ecome-menu-tabs .tabs-link a[href="#' +
                $(this).attr("id") +
                '"]'
            )
            .attr(
              "href",
              "#" +
                ecome_menuadd_string_prefix(
                  $(this).attr("id"),
                  "ecome-menu-clone-"
                )
            );
          $(this).attr(
            "id",
            ecome_menuadd_string_prefix($(this).attr("id"), "ecome-menu-clone-")
          );
        });
        thisClone.find(".ecome-menu-menu").addClass("ecome-menu-menu-clone");
        var thisMainPanel = $(
          ".ecome-menu-clone-wrap .ecome-menu-panels #ecome-menu-panel-main ul"
        );
        thisMainPanel.append(thisClone.html());
        ecome_menu_insert_children_panels_html_by_elem(thisMainPanel, i);
      }
    });
  }
  function ecome_menu_insert_children_panels_html_by_elem($elem, i) {
    if ($elem.find(".menu-item-has-children").length) {
      $elem.find(".menu-item-has-children").each(function () {
        var thisChildItem = $(this);
        ecome_menu_insert_children_panels_html_by_elem(thisChildItem, i);
        var next_nav_target = "ecome-menu-panel-" + i;
        while ($("#" + next_nav_target).length) {
          i++;
          next_nav_target = "ecome-menu-panel-" + i;
        }
        thisChildItem.prepend(
          '<a class="ecome-menu-next-panel" href="#' +
            next_nav_target +
            '" data-target="#' +
            next_nav_target +
            '"></a>'
        );
        var sub_menu_html = $("<div>")
          .append(thisChildItem.find("> .submenu").clone())
          .html();
        thisChildItem.find("> .submenu").remove();
        $(".ecome-menu-clone-wrap .ecome-menu-panels").append(
          '<div id="' +
            next_nav_target +
            '" class="ecome-menu-panel ecome-menu-sub-panel ecome-menu-hidden">' +
            sub_menu_html +
            "</div>"
        );
      });
    }
  }
  function ecome_menuadd_string_prefix(str, prefix) {
    return prefix + str;
  }
  function ecome_menuget_url_var(key, url) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(url);
    return (result && result[1]) || "";
  }
  $(document).ready(function () {
    ecome_resizeMegamenu();
    $(document).on("click", ".menu-toggle", function () {
      $(".ecome-menu-clone-wrap").toggleClass("open");
      return !1;
    });
    $(document).on(
      "click",
      ".ecome-menu-clone-wrap .ecome-menu-close-panels",
      function () {
        $(".ecome-menu-clone-wrap").removeClass("open");
        return !1;
      }
    );
    $(document).on("click", function (event) {
      if (event.offsetX > $(".ecome-menu-clone-wrap").width())
        $(".ecome-menu-clone-wrap").removeClass("open");
    });

    $(document).on("click", ".open .menu-item-has-children", function (e) {
      var $this = $(".ecome-menu-next-panel"),
        thisItem = $this.closest(".menu-item"),
        thisPanel = $this.closest(".ecome-menu-panel"),
        target_id = $this.attr("href");
      if ($(target_id).length) {
        thisPanel.addClass("ecome-menu-sub-opened");
        $(target_id)
          .addClass("ecome-menu-panel-opened")
          .removeClass("ecome-menu-hidden")
          .attr("data-parent-panel", thisPanel.attr("id"));
        var item_title = thisItem.find(".ecome-menu-item-title").attr("title"),
          firstItemTitle = "";
        if (
          $(".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title")
            .length > 0
        ) {
          firstItemTitle = $(
            ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
          ).html();
        }
        if (typeof item_title != "undefined" && typeof item_title != !1) {
          if (
            !$(
              ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
            ).length
          ) {
            $(".ecome-menu-panels-actions-wrap").prepend(
              '<span class="ecome-menu-current-panel-title"></span>'
            );
          }
          $(
            ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
          ).html(item_title);
        } else {
          $(
            ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
          ).remove();
        }
        $(".ecome-menu-panels-actions-wrap .ecome-menu-prev-panel").remove();
        $(".ecome-menu-panels-actions-wrap").prepend(
          '<a data-prenttitle="' +
            firstItemTitle +
            '" class="ecome-menu-prev-panel" href="#' +
            thisPanel.attr("id") +
            '" data-cur-panel="' +
            target_id +
            '" data-target="#' +
            thisPanel.attr("id") +
            '"></a>'
        );
      }
      e.preventDefault();
    });

    $(document).on("click", ".ecome-menu-prev-panel", function (e) {
      var $this = $(this),
        cur_panel_id = $this.attr("data-cur-panel"),
        target_id = $this.attr("href");
      $(cur_panel_id)
        .removeClass("ecome-menu-panel-opened")
        .addClass("ecome-menu-hidden");
      $(target_id)
        .addClass("ecome-menu-panel-opened")
        .removeClass("ecome-menu-sub-opened");
      var new_parent_panel_id = $(target_id).attr("data-parent-panel");
      if (
        typeof new_parent_panel_id == "undefined" ||
        typeof new_parent_panel_id == !1
      ) {
        $(".ecome-menu-panels-actions-wrap .ecome-menu-prev-panel").remove();
        $(
          ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
        ).remove();
      } else {
        $(".ecome-menu-panels-actions-wrap .ecome-menu-prev-panel")
          .attr("href", "#" + new_parent_panel_id)
          .attr("data-cur-panel", target_id)
          .attr("data-target", "#" + new_parent_panel_id);
        var item_title = $("#" + new_parent_panel_id)
          .find('.ecome-menu-next-panel[data-target="' + target_id + '"]')
          .closest(".menu-item")
          .find(".ecome-menu-item-title")
          .attr("data-title");
        item_title = $(this).data("prenttitle");
        if (typeof item_title != "undefined" && typeof item_title != !1) {
          if (
            !$(
              ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
            ).length
          ) {
            $(".ecome-menu-panels-actions-wrap").prepend(
              '<span class="ecome-menu-current-panel-title"></span>'
            );
          }
          $(
            ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
          ).html(item_title);
        } else {
          $(
            ".ecome-menu-panels-actions-wrap .ecome-menu-current-panel-title"
          ).remove();
        }
      }
      e.preventDefault();
    });
  });
  $(document).on("resize", function () {
    ecome_resizeMegamenu();
    ecome_auto_width_vertical_menu();
  });
  $(document).ready(function () {
    ecome_auto_width_vertical_menu();
  });
  $(window).load(function () {
    ecome_menuclone_all_menus();
  });
})(jQuery);
