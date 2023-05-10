var akan = function(y, m, d, g) {
    var femaleNames = ["Akosua Born on Sunday", "Adwoa Born on Monday", "Abenaa Born on Tuesday", "Akua Born on Wedsday", "Yaa Born on Thursday", "Afua Born on Friday", "Ama Born on Surtuday"];
    var maleNames = ["Kwasi Born on Sunday", "Kudwo Born on Monday", "Kwabena Born on Tuesday", "Kwaku Born on Wedsday", "Yaw Born on Thursday", "Kofi Born on Friday", "Kwame Born on Surtuday"];
    var d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akan(y, m, d, g);
        alert("Your akan name is: " + result);
        document.getElementById("form").reset();
    });
});
