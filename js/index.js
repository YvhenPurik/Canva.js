let colorContainer2 = 'white';
    let containet2 = document.getElementById('container2')

   
		var stage = new Konva.Stage({
        width: 600,
        height: 600,
        container: 'container',
        
      });
    var stage2 = new Konva.Stage({
        x:700,
        y:400,
        width: 600,
        height: 50,
        container: 'container2',
        
      });

      var layer = new Konva.Layer();

      var star = new Konva.Star({
        x: stage.width() / 2,
        y: stage.height() / 2,
        numPoints: 5,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
      });
      star.on('click', function() {
        containet2.style.backgroundColor = 'yellow'
        console.log('click on yellow star');
      });

      var star2 = new Konva.Star({
        x: 60,
        y: 100,
        numPoints: 5,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
      });
      star2.on('click', function() {
        containet2.style.backgroundColor = 'green'
        console.log('click on green star ');
      });

      var star3 = new Konva.Star({
        x: 200,
        y: 100,
        numPoints: 5,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 4
      });
      star3.on('click', function() {
        containet2.style.backgroundColor = 'blue'
        console.log('click on star blue');
      });
      var star4= new Konva.Star({
        x: 320,
        y: 100,
        numPoints: 5,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      });
      star4.on('click', function() {
        containet2.style.backgroundColor = 'red'
        console.log('click on star red');
      });
      var star5= new Konva.Star({
        x: 320,
        y: 200,
        numPoints: 5,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 4
      });
      star5.on('click', function() {
        containet2.style.backgroundColor = 'black'
        console.log('click on star black');
      });




    
     stage.on('click', function(e) {
        // e.target is a clicked Konva.Shape or current stage if you clicked on empty space
         // containet2.style.backgroundColor = 'white'
         if(e.target.content){
           containet2.style.backgroundColor = 'white'
         }
        console.log('clicked on', e.target);
        console.log(
          'usual click on ' + JSON.stringify(stage.getPointerPosition())
        );
      });

      // add the shape to the layer
      layer.add(star, star2, star3, star4, star5);

      // add the layer to the stage
      stage.add(layer);