$(document).ready(function() {

    console.log("Student: Mukhtarova Dana");
    console.log("Group: SE-2530");
    console.log("jQuery is ready!");


    //1

    $("#changeIdBtn").click(function() {
        $("#idExample").text("The text was changed using the ID selector.");
    });

    $("#changeClassBtn").click(function() {
        $(".classExample").html("<strong>The content was changed using the class selector.</strong>");
    });

    $("#changeTagBtn").click(function() {
        $("#selectorSection").find("p").css({
            "color": "#555555",
            "font-size": "16px"
        });
    });


    //2 - 1

    $("#hideBtn").click(function() {
        $("#visibilityText").hide();
    });

    $("#showBtn").click(function() {
        $("#visibilityText").show();
    });

    $("#toggleBtn").click(function() {
        $("#visibilityText").toggle();
    });


    //2 - 2

    $("#fadeInBtn").click(function() {
        $("#fadeImage").fadeIn(600);
    });

    $("#fadeOutBtn").click(function() {
        $("#fadeImage").fadeOut(600);
    });

    $("#fadeToggleBtn").click(function() {
        $("#fadeImage").fadeToggle(600);
    });


    //2 - 3

    $("#slideDownBtn").click(function() {
        $("#slidePanel").slideDown(500);
    });

    $("#slideUpBtn").click(function() {
        $("#slidePanel").slideUp(500);
    });

    $("#slideToggleBtn").click(function() {
        $("#slidePanel").slideToggle(500);
    });


    //3- 1

    let itemNumber = 2;

    $("#appendItemBtn").click(function() {
        itemNumber++;

        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });

    $("#prependItemBtn").click(function() {
        itemNumber++;

        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    $("#removeItemBtn").click(function() {
        $("#itemList li:last").remove();
    });


    //3 - 2

    $("#changeImageBtn").click(function() {
        $("#attributeImage").attr("src", "images/9d4e23a0e077589918de3255e7813637.jpg");
        $("#attributeImage").attr("alt", "Image 2");
    });

    $("#changeLinkBtn").click(function() {
        $("#dynamicLink").attr("href", "https://api.jquery.com/");

        $("#dynamicLink").text("Open jQuery API Documentation");
    });


    //3 - 3

    $("#nameInput").on("input", function() {
        let name = $(this).val();

        if (name === "") {
            $("#nameOutput").text("—");
        } else {
            $("#nameOutput").text(name);
        }
    });

    $("#emailInput").on("input", function() {
        let email = $(this).val();

        if (email === "") {
            $("#emailOutput").text("—");
        } else {
            $("#emailOutput").text(email);
        }
    });

    $("#liveForm").submit(function(event) {
        event.preventDefault();
    });


    //4 - 1

    $("#basicAnimateBtn").click(function() {
        $("#basicBox").stop(true).animate({
            width: "100px",
            height: "100px",
            left: "120px"
        }, 700);
    });

    $("#basicResetBtn").click(function() {
        $("#basicBox").stop(true).css({
            width: "60px",
            height: "60px",
            left: "0px",
            top: "0px"
        });
    });


    //4 - 2

    $("#sequenceAnimateBtn").click(function() {

        $("#sequenceBox").stop(true, true).css({
            width: "60px",
            height: "60px",
            left: "0px",
            top: "0px"
        });

        $("#sequenceBox")
            .animate({ left: "180px" }, 600)
            .animate({ top: "120px" }, 600)
            .animate({
                width: "30px",
                height: "30px"
            }, 500)
            .animate({
                left: "0px",
                top: "0px",
                width: "60px",
                height: "60px"
            }, 700);
    });


    //4 - 3

    $("#combinedAnimateBtn").click(function() {
        $("#combinedBox").stop(true).animate({
            left: "220px",
            width: "100px",
            height: "100px",
            opacity: 0.3
        }, 900);
    });

    $("#combinedResetBtn").click(function() {
        $("#combinedBox").stop(true).css({
            left: "0px",
            top: "0px",
            width: "60px",
            height: "60px",
            opacity: 1
        });
    });


    //5
    $(".accordion-question").click(function() {

        $(this).next(".accordion-answer").slideToggle(300);

        $(".accordion-question").not(this)
            .next(".accordion-answer")
            .slideUp(300);
    });

});