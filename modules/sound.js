export function beep(freq=1200,duration=0.2){
  let ctx=new (window.AudioContext||window.webkitAudioContext)();
  let osc=ctx.createOscillator();
  let gain=ctx.createGain();
  osc.frequency.value=freq;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime+duration);
}
