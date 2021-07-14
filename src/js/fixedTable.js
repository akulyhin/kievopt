var endElements = whatWidth();

function whatWidth () {
    if ($(window).width() < 991) {
        return 2750;
    }
    else if ($(window).width() > 991) {
        return 2600;
    }
}

var offSet = offSetWidth();

function offSetWidth () {
    if ($(window).width() < 1400) {
        return 250;
    }

    else if ($(window).width() > 1400) {
        return 470;
    }
}

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: endElements}});

// build scenes

var revealElements = document.getElementsByClassName("table-trigger");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: offSet,										 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(".table-fixed", "active-table") // add class toggle
                    // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);

}


var revealElements = document.getElementsByClassName("table-triggerRF");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: offSet,										 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(".table-fixedRF", "active-table") // add class toggle
                    // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);

}

