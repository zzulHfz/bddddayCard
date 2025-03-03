const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.tutel');
let timeoutId;

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500); 
});

heartSeal.style.transition = 'opacity 0.3s ease';