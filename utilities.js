document.addEventListener('mousemove', logKey);

function logKey(e) {
  let h = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${percentage(e.clientX/screen.width)}, ${percentage(e.clientY/screen.availHeight)}`;
console.log(h)
}

function percentage(x){
 return Math.round(100*x);
}