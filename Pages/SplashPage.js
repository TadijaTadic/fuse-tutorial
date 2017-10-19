function goToHomePage() {
    router.push("home");
}

function backButtonClicked() {
    router.getRoute(function(route) {
        console.log(route[0]);
    });
}

module.exports = {
    backButtonClicked: backButtonClicked,
    goToHomePage: goToHomePage
}
