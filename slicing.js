function draw(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.drawImage(document.getElementById('source'),
    500, 500, 600, 600, 300, 300, 87, 104);

    ctx.drawImage(document.getElementById('frame'),
    0, 0);
};