var clock = document.getElementById('real-clock');
    
setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 11));  
}, 1000);