export function carousel() {
    // Select the main carousel container
    const carousel = document.querySelector('.carousel');
    // Select the left and right arrow buttons
    const arrowBtn = document.querySelectorAll('.carousel-btn');
    // Get the width of the first card in the carousel
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;

    // Variables for drag functionality
    let isDragging = false, startX, startScrollLeft;

    // Function to update button states based on scroll position
    const updateButtonStates = () => {
        const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

        // Disable the "left" button if at the start
        if (carousel.scrollLeft <= 0) {
            document.getElementById("left").disabled = true;
        } else {
            document.getElementById("left").disabled = false;
        }

        // Disable the "right" button if at the end
        if (carousel.scrollLeft >= maxScrollLeft) {
            document.getElementById("right").disabled = true;
        } else {
            document.getElementById("right").disabled = false;
        }
    };

    // Add click event listeners to the arrow buttons
    arrowBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            // Scroll the carousel left or right by the width of one card
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;

            // Update the button states after scrolling
            setTimeout(updateButtonStates, 200); // Add delay for smooth scrolling
        });
    });

    // Start the drag operation
    const dragStart = (e) => {
        isDragging = true; // Set dragging state to true
        carousel.classList.add("dragging"); // Add a class to style the carousel while dragging
        startX = e.pageX; // Record the initial mouse position
        startScrollLeft = carousel.scrollLeft; // Record the initial scroll position
    };

    // Handle dragging the carousel
    const dragging = (e) => {
        if (!isDragging) return; // Do nothing if dragging is not active
        // Update the scroll position as the user drags
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    // Stop the drag operation
    const dragStop = () => {
        isDragging = false; // Set dragging state to false
        carousel.classList.remove("dragging"); // Remove the dragging class
        updateButtonStates(); // Update the button states after dragging
    };

    // Add event listeners for dragging functionality
    carousel.addEventListener("mousedown", dragStart); // Start dragging on mouse down
    carousel.addEventListener("mousemove", dragging); // Move the carousel as the mouse moves
    carousel.addEventListener("mouseup", dragStop); // Stop dragging on mouse up
    carousel.addEventListener("mouseleave", dragStop); // Stop dragging if mouse leaves the carousel

    // Initialize button states on load
    updateButtonStates();
}
