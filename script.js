function over(element) {
    document.getElementById("my").addEventListener("mouseover", function(){this.play();})
}
    
function out(element) {
    document.getElementById("my").addEventListener("mouseout", function(){this.pause();})
}