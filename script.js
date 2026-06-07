// Select the form
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const title = document.querySelector('input[type="text"]').value;
    const category = document.querySelectorAll("select")[0].value;
    const priority = document.querySelectorAll("select")[1].value;
    const dueDate = document.querySelector('input[type="date"]').value;
    const description = document.querySelector("textarea").value;

    // Validate required fields
    if (title.trim() === "" || description.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Show success message
    alert("Request Submitted Successfully!");

    console.log("Request Details");
    console.log("Title:", title);
    console.log("Category:", category);
    console.log("Priority:", priority);
    console.log("Due Date:", dueDate);
    console.log("Description:", description);

    // Reset form
    form.reset();
});
// Sidebar Menu Active Change

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(li => {
            li.classList.remove("active");
        });

        item.classList.add("active");
    });
});