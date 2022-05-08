(() => {
  const innerCompt1_btn = document.getElementById("innerCompt1_btn");

  console.log("Estoy en componente 1");
  innerCompt1_btn.addEventListener("click", () => {
    console.log("innerCompt1_btn clicked");
  });
})();
