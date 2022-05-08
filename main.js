import AjaxService from "/services/ajax.service.js";

const comp1_btn = document.getElementById("comp1");
const comp2_btn = document.getElementById("comp2");
const main = document.getElementById("main");
  

comp1_btn.addEventListener("click",  () => {
  main.innerHTML = "";
  console.log('comp1_btn clicked');
 AjaxService.loadComponent("component_one/one.component.html", "component_one/one.component.js", main);
});

comp2_btn.addEventListener("click", () => {
  main.innerHTML = "";
  console.log('comp2_btn clicked')
   AjaxService.loadComponent("component_two/two.component.html", "component_two/two.component.js", main);

});
