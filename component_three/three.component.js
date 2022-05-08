(() => {
  const innerCompt3_btn = document.getElementById("innerCompt3_btn");

  console.log("Estoy en componente 3");
  innerCompt3_btn.addEventListener("click", () => {
    console.log("innerCompt3_btn clicked");
  });
})();
