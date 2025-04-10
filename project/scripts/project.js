document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "images/hero1.webp",
      "images/hero2.webp",
      "images/hero3.webp",
      "images/hero4.webp",
      "images/hero5.webp",
      "images/hero6.webp",
      "images/hero7.webp",
      "images/hero8.webp",
      "images/hero9.webp",
      "images/hero10.webp",
      "images/hero11.webp",
      "images/hero12.webp",
      "images/hero13.webp",
      "images/hero14.webp",
      "images/hero15.webp"
    ];
  
    const slideshowEl = document.getElementById("slideshow");
  
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Slide ${index + 1}`;
      if (index === 0) {
        img.classList.add("active");
      }
      slideshowEl.appendChild(img);
    });
  
    let currentIndex = 0;
    const slides = slideshowEl.querySelectorAll("img");
    const slideInterval = 2000; 
  
    function showNextSlide() {
    
      slides[currentIndex].classList.remove("active");
      
      currentIndex = (currentIndex + 1) % slides.length;
     
      slides[currentIndex].classList.add("active");
    }
    setInterval(showNextSlide, slideInterval);
  });
  