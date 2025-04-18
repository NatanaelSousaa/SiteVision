document.addEventListener("DOMContentLoaded", () => {
    // Menu Mobile Toggle
    const menuMobile = document.querySelector(".menu-mobile")
    const menu = document.querySelector(".menu")
  
    if (menuMobile) {
      menuMobile.addEventListener("click", () => {
        menu.classList.toggle("active")
        menuMobile.innerHTML = menu.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>'
      })
    }
  
    // Close menu when clicking on a menu item
    const menuItems = document.querySelectorAll(".menu a")
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.remove("active")
        menuMobile.innerHTML = '<i class="fas fa-bars"></i>'
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Back to top button
    const backToTop = document.querySelector(".back-to-top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
    })
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.offsetTop - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Animation on scroll effect for service cards
    const serviceCards = document.querySelectorAll(".service-card")
  
    const checkScroll = () => {
      serviceCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top
        const triggerBottom = window.innerHeight * 0.8
  
        if (cardTop < triggerBottom) {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }
      })
    }

    const testimonials = document.querySelectorAll('.testimonial-item');
    const controls = document.querySelectorAll('.control');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonials.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        controls[index].classList.add('active');
        currentTestimonial = index;
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Initialize testimonial slider
    testimonialInterval = setInterval(nextTestimonial, 5000);

  
    // Set initial state for service cards
    serviceCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Check scroll on load
    checkScroll()
  
    // Check scroll on scroll
    window.addEventListener("scroll", checkScroll)
  })
  
  