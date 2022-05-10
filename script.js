// function draw(){
//     let canvas1 = document.getElementById('stockGraph')
//     if(canvas1.getContext){
//         let ctxCanvas1 = canvas1.getContext('2d');
//         // ctxCanvas1.fillStyle = 'rgb(200, 0, 0)';
//         // ctxCanvas1.fillRect(10, 10, 50, 50);
//         // ctxCanvas1.fillStyle = 'rgba(0, 0, 200, 0.5)';
//         // ctxCanvas1.fillRect(30, 30, 50, 50);

//         // ctxCanvas1.fillRect(25, 25, 100, 100);
//         // ctxCanvas1.clearRect(45, 45, 60, 60);
//         // ctxCanvas1.strokeRect(50, 50, 50, 50);

//         // ctxCanvas1.beginPath();
//         // ctxCanvas1.moveTo(75, 50);
//         // ctxCanvas1.lineTo(100, 75);
//         // ctxCanvas1.lineTo(100, 25);
//         // ctxCanvas1.fill();

//         ctxCanvas1.beginPath();
//         ctxCanvas1.arc(75, 75, 50, 0, Math.PI * 2, true);
        
//         ctxCanvas1.moveTo(110, 75);
//         ctxCanvas1.arc(75, 75, 35, 0, Math.PI, false)

//         ctxCanvas1.moveTo(65, 65);
//         ctxCanvas1.arc(60, 65, 5, 0, Math.PI * 2, true)

//         ctxCanvas1.moveTo(95, 65);
//         ctxCanvas1.arc(90, 65, 5, 0, Math.PI * 2, true)
//         ctxCanvas1.stroke();

//     };
// };

function draw(){
    let ctxCanvas1 = document.getElementById('stockGraph').getContext('2d');
    let img = new Image();
    img.onload = function(){
        ctxCanvas1.drawImage(img, 0, 0);
        ctxCanvas1.beginPath();
        ctxCanvas1.moveTo(30, 96);
        ctxCanvas1.lineTo(70, 66);
        ctxCanvas1.lineTo(103, 76);
        ctxCanvas1.lineTo(170, 15);
        ctxCanvas1.stroke();
    };
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCB8oQq9A1fIxpcLPfWl-Pnssjx6_nS_xI9JzYjkghSsrCAsRqTWKzC0vCPmXnSh4fIhU&usqp=CAU'
};