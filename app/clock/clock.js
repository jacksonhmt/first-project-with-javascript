var clock = document.getElementById('real-clock');
    
setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(10, 11));  
}, 1000);