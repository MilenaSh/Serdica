$(document).ready(function () {
    let $fileUpload = $('#image-file');

    function setSelectedFileName() {
        let $nameContainer = $('.selected-image-display');
        let fullPathArray = $fileUpload.val().split("\\");
        $nameContainer.html('');

        if (fullPathArray.length > 0) {
            $nameContainer.html(fullPathArray[fullPathArray.length - 1]);
        } else {
            $nameContainer.html($fileUpload.val());
        }
    }

    $fileUpload.on('change', setSelectedFileName);
})