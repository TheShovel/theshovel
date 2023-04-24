

(function (ext) {

    // Function to render a 3D cube
    function renderCube(canvasId) {
      const canvas = document.getElementById(canvasId);
  
      // Check if WebGL is supported
      if (!canvas.getContext('webgl')) {
        alert('WebGL is not supported!');
        return;
      }
  
      // Call the renderCube function
      const gl = canvas.getContext('webgl');
      renderCube(gl);
    }
  
    // Define the Scratch extension block
    ext.render_cube = function (canvasId) {
      renderCube(canvasId);
    };
  
    // Describe the Scratch extension block
    var descriptor = {
      blocks: [
        [' ', 'render 3D cube on canvas %s', 'render_cube', 'my_canvas'],
      ],
    };
  
    // Register the Scratch extension block
    ScratchExtensions.register('3D Cube', descriptor, ext);
  })( {});