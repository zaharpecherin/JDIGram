$(document).ready(function() {
    console.log('qwertyy')
});

function show_post_image_preview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_preview').attr('src', e.target.result);
            $('#image_preview').css("width", "100%", "height", "100%");
            console.log('ds')
            console.log(input.files[0].name)
            $('#post_image_label').text(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    }
}