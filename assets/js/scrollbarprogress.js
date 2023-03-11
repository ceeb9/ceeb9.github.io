document.addEventListener('DOMContentLoaded', function () {
    self.addEventListener('scroll', function() {
        winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progress = document.documentElement.scrollTop/winHeight * 100;
        
        if (progress <= 2) {
            document.getElementById('scrollbar-inner').style.height = `2%`
        }
        else {
            document.getElementById('scrollbar-inner').style.height = `${progress}%`
        }
    });
});
