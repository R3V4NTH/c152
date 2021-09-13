AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clicksCount: { type: "number", default: 0 }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function() {
    window.addEventListener("click", e => {
      this.data.clicksCount = this.data.clicksCount + 1;
      if (this.data.clicksCount === 1) {
        const rotation = { x: 0, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }
      else if (this.data.clicksCount === 2) {
        const rotation = { x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }
      else if (this.data.clicksCount === 3) {
        const rotation = { x: 0, y: -67, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }
      else if (this.data.clicksCount === 4) {
        const position = { x: 0, y: 50, z: 200 };
        this.el.setAttribute("rotation", rotation);
      }
      else if (this.data.clicksCount === 5) {
        const rotation = { x: 0, y: 50, z: 300 };
        this.el.setAttribute("rotation", rotation);
      }      
      else {
        const position = { x: 0, y: 50, z: 80 };
        const rotation = { x: 0, y: -100, z: 0 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
      }
    });
  }
});