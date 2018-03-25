var clock = document.getElementById('real-clock');
    
setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
}, 1000);

