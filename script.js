document.addEventListener("DOMContentLoaded", function() {
    const butterfly = document.getElementById("butterfly-container");
    const wings = document.getElementById("wings");
  
    // Set initial position and speed
    let x = 0;
    let y = 0;
    let speedX = 2;
    let speedY = 2;

    function flapWings () {
      let toggleValue = 1;

      setInterval(() => {          
          toggleValue = toggleValue === 1 ? 2 : 1;
          if(toggleValue === 1) {
            wings.style.display = "none";
          }
          if(toggleValue === 2){
            wings.style.display = "block";
          }
      }, 1000); 
      
    }
  
    function updatePosition() {
      // Update position
      x += speedX;
      y += speedY;
  
      // Get window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      // Bounce off the edges
      if (x + butterfly.clientWidth > windowWidth || x < 0) {
        speedX = -speedX;
      }
  
      if (y + butterfly.clientHeight > windowHeight || y < 0) {
        speedY = -speedY;
      }
  
      // Set new position
      butterfly.style.left = x + "px";
      butterfly.style.top = y + "px";
    }
  
    function animate() {
      updatePosition();
      requestAnimationFrame(animate);
    }
  
    // Start the animation
    animate();
    flapWings();
  });
  


// STYLE SCREEN BACKGROUND
document.body.style.background = "#222";

//STYLE BUTTERFLY
butterfly.style.width = '16px';
butterfly.style.height = '80px';
butterfly.style.border = 'solid 2px';
butterfly.style.borderColor = 'white';
butterfly.style.borderRadius = '10px';
butterfly.style.position = 'absolute';

// 