// header.js (already in your repo, shown here just for clarity)
console.log("sxm-single-text [CMS HEADER] script loaded");

(function () {
  if (typeof window.jQuery === "undefined") {
    console.error("❌ [CMS HEADER] jQuery is not available.");
    return;
  }

  var $ = window.jQuery;
  console.log("✔ [CMS HEADER] jQuery version:", $.fn.jquery);

  function closeAllPanels() {
    $(".sx-primary-item.sx-is-active").removeClass("sx-is-active");
    $(".sx-mega-panel.sx-open").removeClass("sx-open");
  }

  function openPanel(key) {
    closeAllPanels();
    if (!key) return;
    $('.sx-primary-item[data-mega="' + key + '"]').addClass("sx-is-active");
    $('.sx-mega-panel[data-panel="' + key + '"]').addClass("sx-open");
  }

  $(document).on("mouseenter", ".sx-primary-item.sx-has-mega", function () {
    var key = $(this).data("mega");
    openPanel(key);
  });

  $(document).on("mouseleave", ".sx-shell", function () {
    closeAllPanels();
  });

  $(document).on(
    "focusin",
    ".sx-primary-item.sx-has-mega .sx-primary-link",
    function () {
      var key = $(this).closest(".sx-primary-item").data("mega");
      openPanel(key);
    }
  );

  $(document).on("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeAllPanels();
    }
  });

  console.log("✅ [CMS HEADER] mega menu initialized");
})();
