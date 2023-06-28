"use strict";
var W,H,L,r,a;
const {sin, cos, tan, PI, sqrt, random, floor, cell, round, abs} = Math;

var precision = 720;

function id(n){
    return document.getElementById(n)
}

function atan(x1,y1,x2,y2){
    let dx = x2 - x1;
    let dy = y2 - y1;
    if(dx==0){
        if(dy>=0){
            return PI/2;
        }
        else{
            return (3/2*PI);
        }
    }
    else if(dx>0){
        return Math.atan(dy/dx);
    }
    else{return PI+Math.atan(dy/dx);}
}

window.onload = function(){
    var cnv = document.getElementById("cnv");
    var ctx = cnv.getContext("2d");
    function init(){
        w = window.innerWidth;
        h = window.innerHeight;
        cnv.width = W;
        cnv.height = H;
        L = (W<H?W:H);
        ctx.fillStyle = "white";
        ctx.translate(W/2,H/2);
        
    }
    init();

    var R = 0;

    window.onresize = init;

    function animate(){
        ctx.save();
        r = (Math.tan(17*a)+1/Math.tan(17/a))*L/16;
        ctx.rotate(a);
        ctx.fillRect(r,0,1,1);
        ctx.restore();
        a += PI/precision;
        R++;
        if(R<precision/72){
            animate();
        }
        else{
            R = 0;
            window.requestAnimationFrame(animate);
        }
    }
    animate();

    for(let b of document
        .getElementsByTagName("input")){
            b.addEventListener("click")
            ,function() {
                a=0;
                ctx.clearRect(-W/2, -H/2, W);
                if(this.value=="low")
                precision = 720;
                else
                precision = 7200;

            }
        }
}