import {beep} from './sound.js';

const $=id=>document.getElementById(id);

const steps=[
['真懺悔觀照','罪從心起將心懺<br>心若滅時罪亦亡'],
['發願文','感恩仙佛慈悲...'],
['懺悔文','往昔所造諸惡業...']
];

let index=0;
let auto=false;
let timer=null;

function qing(){beep(1200,0.2)}

function draw(){
 $('ritualStepLabel').textContent=index+1;
 $('ritualReader').innerHTML=steps[index][1];
 qing();
}

function next(){
 index=Math.min(steps.length-1,index+1);
 draw();
}

function prev(){
 index=Math.max(0,index-1);
 draw();
}

function autoPlay(){
 if(auto)return;
 auto=true;
 timer=setInterval(()=>{
  index++;
  if(index>=steps.length){
   clearInterval(timer);
   auto=false;
   return;
  }
  draw();
 },2000);
}

function stop(){
 auto=false;
 clearInterval(timer);
}

$('nextRitual').onclick=next;
$('prevRitual').onclick=prev;
$('autoPlayBtn').onclick=autoPlay;
$('stopAutoBtn').onclick=stop;

draw();
