var assert = require ("assert");

function creatTraitor () {

}

Discribe ("The board game Catan and how it operates", function () {
    describe (" the components", function () {
        describe (" Figures", function () {
            it ("traito can be created", function () {
            var traitorFigure = creatTraitor ();
            assert (typeof traitorFigure !== "undefined", "traitor")
            });
        });
    });
});


