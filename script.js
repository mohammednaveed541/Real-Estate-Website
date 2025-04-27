/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[ data-navbar]")
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]")

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"))

/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]")

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})

/**
 * Add to favorite button toggle
 */

const /**{NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]")

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active")
  })
})

/**
 * Animate on scroll functionality
 */
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll("[data-aos]")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate")
        } else {
          // Uncomment the line below if you want elements to animate again when scrolling back up
          // entry.target.classList.remove('aos-animate');
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animateElements.forEach((element) => {
    observer.observe(element)

    // Add delay if specified
    const delay = element.getAttribute("data-aos-delay")
    if (delay) {
      element.style.transitionDelay = `${delay}ms`
    }
  })
})

/**
 * Video play button functionality
 */
const playBtn = document.querySelector(".play-btn")
if (playBtn) {
  playBtn.addEventListener("click", () => {
    // This would normally open a video modal
    alert("Video player would open here in the full implementation")
  })
}

/**
 * Neon text effect for highlights
 */
const highlights = document.querySelectorAll(".highlight")
highlights.forEach((highlight) => {
  highlight.style.animation = `neonPulse ${Math.random() * 1 + 1.5}s infinite alternate`
})

/**
 * Hover effects for cards
 */
const cards = document.querySelectorAll(".card")
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
    card.style.boxShadow = "0 10px 25px rgba(0, 194, 255, 0.3)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "var(--shadow-2)"
  })
})
