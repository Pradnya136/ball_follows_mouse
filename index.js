document.addEventListener('mousemove', function(e) {
    const furBall = document.getElementById('furBall');
    const x = e.clientX - furBall.offsetWidth / 4;
    const y = e.clientY - furBall.offsetHeight / 4;
    furBall.style.transform = `translate(${x}px, ${y}px)`;
  });