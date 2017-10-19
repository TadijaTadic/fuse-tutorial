var Observable = require("FuseJS/Observable");
var ShouldExit = Observable(false);
var Exit = require("Exit");

function activated() {
    ShouldExit.value = true;
    console.log("Activated");
}

function deactivated() {
    ShouldExit.value = false;
    console.log("deActivated");
}

function btnExitClick() {
    Exit.exit();
}

module.exports = {
    activated: activated,
    ShouldExit, ShouldExit,
    deactivated: deactivated,
    btnExitClick: btnExitClick
}
