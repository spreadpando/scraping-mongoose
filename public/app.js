$(document).on("click", ".post-comment", function (e) {
    let comment = $(".input-comment").val();
    let req = {
        body: comment,
        date: Date.now
    };
    $.post("/articles/" + $(this).data('article'), req, function (res) {
        location.reload(true);
    })
})