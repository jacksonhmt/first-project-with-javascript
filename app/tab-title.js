
$(function () {

    // title to calculator
    $("#calculator-modal").click(tabTitle("#calculator-modal", "Calculator"));

    // title to hash
    $("#hash-modal").click(tabTitle("#hash-modal", "Hash"));

    function tabTitle(idModal, title) {
        $(idModal).on('show.bs.modal', function (event) {
            document.getElementById("tab-title").innerHTML = title;
        });
        $(idModal).on('hidden.bs.modal', function (event) {
            document.getElementById("tab-title").innerHTML = "Home";
        });
    }

});