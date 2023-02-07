
const selectFontFace = document.querySelector('#FontFace');
const selectTextSpace = document.querySelector('#TextSpacing');
const generate = document.querySelector("#Generate");
let t = selectTextSpace.value;
generate.addEventListener('click', (event) => {

  const result = document.querySelector('#generatedCode');
  if (selectFontFace.value == "Select a font face" && !(selectTextSpace.value == "0")) {
    result.textContent = `javascript:(function(){var d=document,id='phltsbkmklt',el=d.getElementById(id),f=d.querySelectorAll('iframe'),i=0,l=f.length;if(el){function removeFromShadows(root){for(var el of root.querySelectorAll('*')){if(el.shadowRoot){el.shadowRoot.getElementById(id).remove();removeFromShadows(el.shadowRoot);}}}el.remove();if(l){for(i=0;i<l;i++){try{f[i].contentWindow.document.getElementById(id).remove();removeFromShadows(f[i].contentWindow.document);}catch(e){console.log(e)}}}removeFromShadows(d);}else{s=d.createElement('style');s.id=id;s.appendChild(d.createTextNode('*{line-height:1.5 !important;letter-spacing:${selectTextSpace.value}em !important;word-spacing:0.16em !important;}p{margin-bottom:2em !important;}'));function applyToShadows(root){for(var el of root.querySelectorAll('*')){if(el.shadowRoot){el.shadowRoot.appendChild(s.cloneNode(true));applyToShadows(el.shadowRoot);}}}d.getElementsByTagName('head')[0].appendChild(s);for(i=0;i<l;i++){try{f[i].contentWindow.document.getElementsByTagName('head')[0].appendChild(s.cloneNode(true));applyToShadows(f[i].contentWindow.document);}catch(e){console.log(e)}}applyToShadows(d);}})()`;
  }
  else if (selectTextSpace.value == "0" && !(selectFontFace.value == "Select a font face")) { result.textContent = `javascript:(function(){for(t=document.getElementsByTagName("*"),n=0;n<t.length;n++)t[n].style.fontFamily= "${selectFontFace.value}"})();`; }

  else if (!(selectTextSpace.value == "0") && !(selectFontFace.value == "Select a font face")) { result.textContent = `javascript:(function(){for(t=document.getElementsByTagName("*"),n=0;n<t.length;n++)t[n].style.fontFamily= "${selectFontFace.value}"})();javascript:(function(){var d=document,id='phltsbkmklt',el=d.getElementById(id),f=d.querySelectorAll('iframe'),i=0,l=f.length;if(el){function removeFromShadows(root){for(var el of root.querySelectorAll('*')){if(el.shadowRoot){el.shadowRoot.getElementById(id).remove();removeFromShadows(el.shadowRoot);}}}el.remove();if(l){for(i=0;i<l;i++){try{f[i].contentWindow.document.getElementById(id).remove();removeFromShadows(f[i].contentWindow.document);}catch(e){console.log(e)}}}removeFromShadows(d);}else{s=d.createElement('style');s.id=id;s.appendChild(d.createTextNode('*{line-height:1.5 !important;letter-spacing:${selectTextSpace.value}em !important;word-spacing:0.16em !important;}p{margin-bottom:2em !important;}'));function applyToShadows(root){for(var el of root.querySelectorAll('*')){if(el.shadowRoot){el.shadowRoot.appendChild(s.cloneNode(true));applyToShadows(el.shadowRoot);}}}d.getElementsByTagName('head')[0].appendChild(s);for(i=0;i<l;i++){try{f[i].contentWindow.document.getElementsByTagName('head')[0].appendChild(s.cloneNode(true));applyToShadows(f[i].contentWindow.document);}catch(e){console.log(e)}}applyToShadows(d);}})()`; }

  else { result.textContent = `Please select any of the above fields to generate bookmarklet.`; }

});
function copyNotification() {
  var x = document.getElementById("copyNotification");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function notification() {

  var x = document.getElementById("notification");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
function copyCode() { 
  // Get the text field
  var copyText = document.getElementById("generatedCode");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

}