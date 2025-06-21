document.getElementById("galaxyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const color = document.getElementById("color").value.trim();
  const number = document.getElementById("number").value.trim();
  const hobby = document.getElementById("hobby").value.trim();

  localStorage.setItem("favColor", color);
  localStorage.setItem("favNumber", number);
  localStorage.setItem("favHobby", hobby);

  window.location.href = "galaxy.html";
});
