$(document).ready(function()
{
var wordCounts = {};
$("#screen2").keyup(
    function() {
    alert("hello bc!");
    var matches = this.value.match(/\b/g);
    wordCounts[this.id]= matches ? matches.length/2 : 0;
    var finalCount = 0;
    $.each(wordCounts, 
        function(k, v) {
        finalCount += v;
    }
    );
    alert("hello fuckers");
    $('#display_count').html(finalCount);
}
);
}); 