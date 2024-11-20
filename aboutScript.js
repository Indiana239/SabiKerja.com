let currentTestimonial = 0;

// Function to display the correct testimonial based on the index
function showTestimonial(index) {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, i) => {
    testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// Move to the previous testimonial
function prevTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Move to the next testimonial
function nextTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Initialize the first testimonial on page load
document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(currentTestimonial);
});
