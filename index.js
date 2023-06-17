const el = document.getElementById('Networkmain');

const hiddenDiv = document.getElementById('networkss');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
    networkss.style.visibility = 'visible';
  });
  
  // ✅ (optionally) Hide DIV on mouse out
  el.addEventListener('mouseout', function handleMouseOut() {
    // 👇️ if you used visibility property to hide div
    networkss.style.visibility = 'hidden';
  });

 function referal(){
    document.getElementById('third').style.display='flex';
    document.getElementById('Leader').style.display='none';}
    function Leader(){
        document.getElementById('third').style.display='none';
        document.getElementById('Leader').style.display='flex';
        document.getElementById("referal").style.backgroundColor = 'white';
        document.getElementById("referal").style.cssText = `color:blue;`;}
