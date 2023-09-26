const getElement=e=>document.querySelector(e),getVal=e=>getElement(e).value,setVal=(e,t)=>getElement(e).value=t,getHtml=e=>getElement(e).innerHTML,setHtml=(e,t)=>getElement(e).innerHTML=t,clear=e=>{setVal(e,""),setHtml(e,"")},addClass=(e,t)=>getElement(e).classList.add(t),removeClass=(e,t)=>getElement(e).classList.remove(t),setAttr=(e,t,l)=>getElement(e).setAttribute(t,l),removeAttr=(e,t)=>getElement(e).removeAttribute(t),filterTable=(e,t)=>{var l,n,s,r,a;for(r=0,l=getVal(e).toUpperCase(),n=getElement(t).getElementsByTagName("tr");r<n.length;r++){s=n[r].getElementsByTagName("td");let o=!1;for(count=0;count<s.length;count++)if(s[count]&&(a=s[count].textContent||s[count].innerText).toUpperCase().indexOf(l)>-1){o=!0;continue}o?n[r].style.display="":n[r].style.display="none"}},filterDrop=(e,t)=>{let l=getElement(e).value.toUpperCase(),n=getElement(t).getElementsByTagName("div"),s=0;for(s=0;s<n.length;s++)getHtml(n[s]).toUpperCase().indexOf(l)>-1?n[s].style.display="":n[s].style.display="none"},showPassword=e=>{let t=getElement(e);if("text"==t.getAttribute("type")){t.setAttribute("type","password");return}t.setAttribute("type","text")},passText=(e,t)=>{let l=getHtml(e);setVal(t,l)},copyToClipboard=e=>{navigator.clipboard.writeText(e).then(function(){alert("Text copied to clipboard")}).catch(function(e){console.error("Failed to copy text: ",e)})};