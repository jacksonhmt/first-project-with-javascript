$(function () {
    var vez = 1;
    var vencedor = "";

    // CHECK HOUSES ALIKE
    function houseAlike(a, b, c) {
        var houseA = $("#house" + a);
        var houseB = $("#house" + b);
        var houseC = $("#house" + c);

        var bgA = $("#house" + a).css("background-image");
        var bgB = $("#house" + b).css("background-image");
        var bgC = $("#house" + c).css("background-image");

        if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
            if (bgA.indexOf("1.png") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        } else {
            return false;
        }
    }

    // CHECK GAME END
    function checkGameEnd() {
        if (houseAlike(1, 2, 3) ||
            houseAlike(4, 5, 6) ||
            houseAlike(7, 8, 9) ||
            houseAlike(1, 4, 7) ||
            houseAlike(2, 5, 8) ||
            houseAlike(3, 6, 9) ||
            houseAlike(1, 5, 9) ||
            houseAlike(3, 5, 7)) {
            $("#resultado").html('<h3 class="mt-4">The player ' + vencedor + " won!  " +
                '<img src="./../img/hash/winner-man.png" width="50px" class="ml-3"></img>' + "</h3>");
            $(".house").off("click");

            // MARK WINNER
            markWinner();
        }
    }

    $(".house").click(function () {
        var bg = $(this).css("background-image");
        showPlayerTime();
        if (bg == "none" || bg == "") {
            var fig = "url(./../img/hash/" + vez.toString() + ".png)";
            $(this).css("background", fig);
            vez = (vez == 1 ? 2 : 1);
            checkGameEnd();
        }
    });

    // SHOW PLAYER TIME
    function showPlayerTime() {
        if (vez == 1) {
            document.getElementById("playerOne").src = "";
            document.getElementById("playerTwo").src = "./../img/hash/mark.png";
        } else {
            document.getElementById("playerTwo").src = "";
            document.getElementById("playerOne").src = "./../img/hash/mark.png";
        }
    }

    // MARK WINNER IN THE PAGE
    function markWinner() {
        if (vencedor == 1) {
            document.getElementById("playerTwo").src = "";
            document.getElementById("playerOne").src = "./../img/hash/winner.png";
        } else {
            document.getElementById("playerOne").src = "";
            document.getElementById("playerTwo").src = "./../img/hash/winner.png";
        }
    }
});