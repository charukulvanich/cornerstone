$("a[data-parent='#accordion']").on("click", function() {
    var active = $(this).attr("href");
    active = $(active);
    $(".collapse").each(function() {
        if (!$(this).is(active)) {
            $(this).collapse('hide');
        }
    });
});