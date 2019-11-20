(function($, window, undefined) {
  "use strict"; //jshint :)

  //Placeholder Home page Effect
  var $searchPlaceholder = $(".seachPlaceholder");

  if ($searchPlaceholder.length > 0) {
    $searchPlaceholder.watermark(
      '<p class="placeholder-title">Enter Keywords</p> <p class="placeholder-subtitle"><small>Use comma (,) to enter more keywords</small></p>  ',
      { left: -2, top: 35, fallback: false }
    );
  }

  //Input File Triggers

  $("#file-trigger").on("click", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .find('input[type="file"]')
      .click();
  });

  $("#comment-file-trigger").on("click", function(e) {
    e.preventDefault();
    $('input[type="file"]').click();
  });

  //Dropw down menus Effect
  var dropdownMenu = function(elem) {
    $(elem)
      .on("mouseenter", function() {
        $(this)
          .find(">.dropdown-menu")
          .stop(true, true)
          .delay(200)
          .slideDown();
      })
      .on("mouseleave", function() {
        $(this)
          .find(">.dropdown-menu")
          .stop(true, true)
          .delay(200)
          .fadeOut();
      });
  };

  dropdownMenu("ul.nav li.dropdown");

  dropdownMenu("ul.user-interaction li.dropdown");

  //Range Slider Effects / contruction
  var $uiSlider = $(".noUiSlider");

  if ($uiSlider.length > 0) {
    $uiSlider.noUiSlider({
      range: [0, 100],
      start: [30, 70],
      step: 5,
      orientation: "horizontal",
      handles: 2,
      connect: true
    });
  }

  //Checkbox and Radio Styles

  (function() {
    // Custom checkbox and radios
    var setupLabel = function() {
      // Checkbox
      var checkBox = ".checkbox";
      var checkBoxInput = checkBox + " input[type='checkbox']";
      var checkBoxChecked = "checked";
      var checkBoxDisabled = "disabled";

      // Radio
      var radio = ".radio";
      var radioInput = radio + " input[type='radio']";
      var radioOn = "checked";
      var radioDisabled = "disabled";

      // Checkboxes
      if ($(checkBoxInput).length) {
        $(checkBox).each(function() {
          $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function() {
          $(this)
            .parent(checkBox)
            .addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function() {
          $(this)
            .parent(checkBox)
            .addClass(checkBoxDisabled);
        });
      }

      // Radios
      if ($(radioInput).length) {
        $(radio).each(function() {
          $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function() {
          $(this)
            .parent(radio)
            .addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function() {
          $(this)
            .parent(radio)
            .addClass(radioDisabled);
        });
      }
    };

    // First let's prepend icons (needed for effects)
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    $(".checkbox, .radio").on("click", function() {
      setupLabel();
    });
    setupLabel();
  })();

  //Portfolio effects Isotope // Filters

  (function() {
    var $portfolioContainer = $("#portfolio-container"),
      $filters = $("#filters");

    if ($portfolioContainer.length && $().isotope) {
      $portfolioContainer.imagesLoaded(function() {
        $portfolioContainer.isotope({
          // options...
          // resizable: false
          // itemSelector : '.element'
        });
      });

      $filters.find("a").click(function() {
        var $this = $(this),
          selector = $this.attr("data-filter");
        //checked if already has a class selected and do nothing
        if ($this.hasClass("selected")) {
          return false;
        }
        //checked if the one that i'm clickin doesn't have the class then find the one that has the class
        //and removed the class after that
        $this
          .parents($filters)
          .find(".selected")
          .removeClass("selected");
        //Just add the class selected to the new item
        $this.addClass("selected");

        $portfolioContainer.isotope({
          filter: selector
        });
        return false;
      });
    } //end if
    else {
      return;
    }
  })();
})(window.jQuery, window, undefined);
