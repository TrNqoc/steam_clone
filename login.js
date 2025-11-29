// Redirect ONLY when user enters login.html
if (
  location.pathname.includes("login.html") &&
  localStorage.getItem("currentUser")
) {
  location.href = "./index.html";
}

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let existingUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!existingUser) {
    alert("Email hoặc mật khẩu sai!");
    return;
  }

  // Save user object (GIỐNG config.js)
  localStorage.setItem("currentUser", JSON.stringify(existingUser));

  alert("Đăng nhập thành công!");
  location.href = "./index.html";
});
