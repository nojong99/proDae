/**
 * @prettier
 */

document.addEventListener("DOMContentLoaded", () => {
  let studentDateData = document.querySelectorAll(".student-form-data");
  let signupRole = document.getElementById("signup-role");
  signupRole.selectedIndex = -1;

  signupRole.addEventListener("change", (e) => {
    if (e.target.value === "student") {
      for (let node of studentDateData) {
        if (node.classList.contains("hidden")) {
          node.classList.remove("hidden");
        }
      }
    } else {
      for (let node of studentDateData) {
        if (!node.classList.contains("hidden")) {
          node.classList.add("hidden");
        }
      }
    }
  });

  document
    .getElementById("signup-enter-date")
    .addEventListener("change", (e) => {
      let gradDate = new Date(e.target.value);
      gradDate.setFullYear(gradDate.getFullYear() + 4);
      document.getElementById(
        "signup-grad-date"
      ).value = `${gradDate.getFullYear()}-02`;
    });
});
