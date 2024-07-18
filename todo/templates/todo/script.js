document.addEventListener("DOMContentLoaded", function() {
    
    const tasks = document.querySelectorAll(".text");
    tasks.forEach(task => {
      const dueDateElement = task.querySelector("li:nth-child(3)");
      if (dueDateElement) {
        const dueDate = new Date(dueDateElement.textContent.replace("Due at: ", ""));
        const currentDate = new Date();
        if (currentDate > dueDate) {
          task.style.border = "2px solid red";
        }
      }
    });
  
   
    const sortLinks = document.querySelectorAll("a[href*='order=']");
    sortLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Sorting not yet implemented.");
      });
    });
  });