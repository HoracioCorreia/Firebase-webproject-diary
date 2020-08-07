$(document).ready(function () {
    document.getElementById('original').style.display = 'unset'; 
    document.getElementById('thai').style.display = 'none'; 
    document.getElementById('japanese').style.display = 'none'; 
    document.getElementById('english').style.display = 'none'; 
});

function original() {
    document.getElementById('original').style.display = 'unset'; 
    document.getElementById('thai').style.display = 'none'; 
    document.getElementById('japanese').style.display = 'none'; 
    document.getElementById('english').style.display = 'none'; 
}
function thai() {
    document.getElementById('original').style.display = 'none'; 
    document.getElementById('thai').style.display = 'unset'; 
    document.getElementById('japanese').style.display = 'none'; 
    document.getElementById('english').style.display = 'none'; 
}
function japanese() {
    document.getElementById('original').style.display = 'none'; 
    document.getElementById('thai').style.display = 'none'; 
    document.getElementById('japanese').style.display = 'unset'; 
    document.getElementById('english').style.display = 'none'; 
}
function english() {
    document.getElementById('original').style.display = 'none'; 
    document.getElementById('thai').style.display = 'none'; 
    document.getElementById('japanese').style.display = 'none'; 
    document.getElementById('english').style.display = 'unset'; 
}    