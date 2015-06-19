$.fn.col_format = function() {
    var s;
    var children = $(this).children();
    var cl = children.length;
    if ($(this).hasClass("row") === true) {
        for (var i = 0; i < cl; i++) {
            // Set Size
            if ((cl - 1) === 1) {
                s = 12;
            } else if ((cl - 1) === 2) {
                s = 6;
            } else if ((cl - 1) === 3) {
                s = 4;
            } else if ((cl - 1) === 4) {
                s = 3;
            } else if ((cl - 1) > 4) {
                s = 12;
            }
            // Do shit
            if ($(children[i]).hasClass("col") === true) {
                $(children[i]).toggleClass("col-md-" + s);
                $(children[i]).toggleClass("col");
            }
        }
    }
    return cl + " | " + s;
};