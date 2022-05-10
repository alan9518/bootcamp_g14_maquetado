function draw(){
    let canvas1 = document.getElementById('stockGraph')
    if(canvas1.getContext){
        let ctxCanvas1 = canvas1.getContext('2d');
        // ctxCanvas1.fillStyle = 'rgb(200, 0, 0)';
        // ctxCanvas1.fillRect(10, 10, 50, 50);
        // ctxCanvas1.fillStyle = 'rgba(0, 0, 200, 0.5)';
        // ctxCanvas1.fillRect(30, 30, 50, 50);

        // ctxCanvas1.fillRect(25, 25, 100, 100);
        // ctxCanvas1.clearRect(45, 45, 60, 60);
        // ctxCanvas1.strokeRect(50, 50, 50, 50);

        ctxCanvas1.beginPath();
        ctxCanvas1.moveTo(75, 50);
        ctxCanvas1.lineTo(100, 75);
        ctxCanvas1.lineTo(100, 25);
        ctxCanvas1.fill();

    };
};

// function draw() {
//     var canvas = document.getElementById('tutorial');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');
//       ctx.fillStyle = 'rgb(200, 0, 0)';
//     ctx.fillRect(10, 10, 50, 50);

//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//     ctx.fillRect(30, 30, 50, 50);
    
//     }
//   }