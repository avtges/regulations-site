define("header-view",["jquery","underscore","backbone","regs-dispatch"],function(e,t,n,r){var i=n.View.extend({el:".reg-header",initialize:function(){this.$activeEls=e("#menu, #site-header, #reg-content"),this.$tocLinks=e(".toc-nav-link")},events:{"click .toc-toggle":"openTOC","click .toc-nav-link":"toggleDrawer"},openTOC:function(t){t.preventDefault();var n=e(t.target),i=n.hasClass("open")?"close":"open";typeof this.$activeEls!="undefined"&&(r.trigger("toc:toggle",i+" toc"),n.toggleClass("open"),this.$activeEls.toggleClass("active"))},toggleDrawer:function(t){t.preventDefault();var n=e(t.target);this.$tocLinks.removeClass("current"),n.addClass("current"),r.trigger("toc:stateChange",n.attr("href"))}});return i});