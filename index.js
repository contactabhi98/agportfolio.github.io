window.onload = function() {
    var span1 = document.querySelector('.my-itro-one');
    var span2 = document.querySelector('.my-itro-two');
  
    function toggleVisibility() {
      if (span1.style.display === 'none') {
        span1.style.display = 'inline';
        span2.style.display = 'none';
      } else {
        span1.style.display = 'none';
        span2.style.display = 'inline';
      }
    }
  
    setInterval(toggleVisibility, 2000); // Toggle every 2 seconds (2000 milliseconds)
  };

  function toggleAside() {
    var asideContainer = document.getElementById("asideContainer");
    asideContainer.style.display = (asideContainer.style.display === "none" || asideContainer.style.display === "") ? "block" : "none";

    var toggleIcon = document.getElementById("toggleIcon");

    if (toggleIcon.classList.contains("fa-arrow-right")) {
      // Switch to left arrow icon
      toggleIcon.classList.remove("fa-arrow-right");
      toggleIcon.classList.add("fa-arrow-left");
    } else {
      // Switch to right arrow icon
      toggleIcon.classList.remove("fa-arrow-left");
      toggleIcon.classList.add("fa-arrow-right");
    }
  }

  function downloadCV() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var cvURL = '/home/lt-399/Desktop/my_portfolio/assets/Abhishek_Resume.pdf';
    
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = cvURL;
    link.target = '_blank';
    // Set the download attribute with the desired file name
    link.download = '/home/lt-399/Desktop/my_portfolio/assets/Abhishek_Resume.pdf'; // Change 'Your_CV.pdf' to the desired file name
    
    // Programmatically trigger the click event to start the download
    link.click();
  }

  function handleScroll(event) {
    console.log(event)
    // Add scrolling class to the section container when the user starts scrolling
    event.target.classList.add('scrolling');
  }