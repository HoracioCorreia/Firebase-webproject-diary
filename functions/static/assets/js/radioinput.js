$('input[name="q1"]').change(function () {
    var q1data = $('input[name="q1"]:checked').val()
    document.getElementById('q1input').value = q1data;
});
$('input[name="q2"]').change(function () {
    var q2data = $('input[name="q2"]:checked').val()
    document.getElementById('q2input').value = q2data;
});
$('input[name="q3"]').change(function () {
    var q3data = $('input[name="q3"]:checked').val()
    document.getElementById('q3input').value = q3data;
});