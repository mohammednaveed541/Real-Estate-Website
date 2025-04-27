// This file contains JavaScript functionality for the rent page, handling interactions related to rental listings.

document.addEventListener("DOMContentLoaded", () => {
  const rentalCards = document.querySelectorAll(".rental-card")

  rentalCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Logic to handle rental card click, e.g., show details
      const rentalId = card.getAttribute("data-rental-id")
      alert(`You clicked on rental ID: ${rentalId}`)
    })
  })

  const filterForm = document.querySelector("#filter-form")
  if (filterForm) {
    filterForm.addEventListener("submit", (event) => {
      event.preventDefault()
      // Logic to filter rental listings based on user input
      const filters = new FormData(filterForm)
      console.log("Filters applied:", Object.fromEntries(filters))
    })
  }
})
