document.getElementById("dateInput").addEventListener("change", function () {
    var input = this.value;
    var dataArray = input.split('-');
    document.getElementById('year').value = dataArray[0];
    document.getElementById('month').value = dataArray[1];
    document.getElementById('day').value = dataArray[2];
});