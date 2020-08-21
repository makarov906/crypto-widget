const mountNode = document.getElementById("app");
if (!mountNode) {
  const div = document.createElement("div");
  div.id = "app";

  document.body.appendChild(div);
}
