
  //  import AjaxService from "/services/ajax.service.js";

  
(() => { 
    
  let ajaxService;
  
    let innerCompt2_btn = document.getElementById("innerCompt2_btn");
    const component2_content = document.getElementById("component2-content");
    
    innerCompt2_btn.addEventListener("click",  async() => {
      await import('/services/ajax.service.js').then( ajax => ajaxService = ajax.default);
      
        await ajaxService.loadComponent("component_three/three.component.html", "component_three/three.component.js", component2_content);
      console.log('innerCompt2_btn clicked');
    });

})();
