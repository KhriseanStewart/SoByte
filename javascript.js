const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // Check if this button is already open
  const isOpen = this.classList.contains("is-open");

  // Close all accordions
  btns.forEach((btn) => {
    btn.classList.remove("is-open");
    const content = btn.nextElementSibling;
    content.style.maxHeight = null;
  });

  // If the clicked one was not open, open it
  if (!isOpen) {
    this.classList.add("is-open");
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));