const WISHLIST_KEY = "wishlist";
// Trả về danh sách user đã đăng ký
export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Lưu danh sách user
export function saveUsers(list) {
  localStorage.setItem("users", JSON.stringify(list));
}

// Ghi lại user đang đăng nhập
export function setCurrentUser(username) {
  localStorage.setItem("currentUser", username);
}

// Lấy user đang đăng nhập
export function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

// Logout
export function logoutUser() {
  localStorage.removeItem("currentUser");
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
}
