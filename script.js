const container = document.getElementById('scrollBar');

const storedScrollPosition = localStorage.getItem('scrollPosition');
if (storedScrollPosition) {
    container.scrollLeft = storedScrollPosition;
}

container.addEventListener('scroll', function() {
    localStorage.setItem('scrollPosition', container.scrollLeft);
});
