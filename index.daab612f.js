var e=document.querySelector("table"),t=document.querySelector("tr"),n=document.querySelector("tbody"),a=document.createElement("form"),r=0;function l(e,t){var n=document.createElement("div");n.className="notification ".concat(e),n.setAttribute("data-qa","notification"),n.style.position="fixed",n.style.right="10px";var a=document.createElement("h2");a.className="title",a.textContent="error"===e?"Error":"Success";var l=document.createElement("p");l.textContent=t,n.appendChild(a),n.appendChild(l),document.body.appendChild(n),n.style.top="".concat(r*(n.offsetHeight+10),"px"),r++,setTimeout(function(){n.remove(),r--},2e3)}!function(){a.classList.add("new-employee-form");var t=!0,n=!1,r=void 0;try{for(var l,o=[{fieldType:"input",name:"name",type:"text",label:"Name: "},{fieldType:"input",name:"position",type:"text",label:"Position: "},{fieldType:"select",name:"office",label:"Office: ",options:["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"]},{fieldType:"input",name:"age",type:"number",label:"Age: "},{fieldType:"input",name:"salary",type:"number",label:"Salary: "}][Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var i=function(){var e=l.value,t=document.createElement("label");if(t.textContent=e.label,"input"===e.fieldType){var n=document.createElement("input");n.name=e.name,n.type=e.type,n.setAttribute("data-qa",e.name),n.style.marginLeft="16px",t.appendChild(n)}else{if("select"!==e.fieldType)return{v:void 0};var r=document.createElement("select");r.name=e.name,r.setAttribute("data-qa",e.name),e.options.forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,r.appendChild(t)}),t.appendChild(r)}a.appendChild(t)}();if("object"==(i&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i))return i.v}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}var c=document.createElement("button");c.textContent="Save to table",c.type="submit",a.appendChild(c),e.insertAdjacentElement("afterend",a)}(),a.addEventListener("submit",function(e){e.preventDefault();var t={},r=!1;a.querySelectorAll("label").forEach(function(e){var n=e.firstElementChild;if(n.value.trim()){if("name"===n.name&&n.value.trim().length<4){l("error","Name field must contain more than 4 characters!"),r=!0;return}if("age"===n.name&&(18>n.value.trim()||n.value.trim()>90)){l("error","Age must be from 18 to 90"),r=!0;return}}else{l("error","".concat(n.name.charAt(0).toUpperCase()+n.name.slice(1)," field can't be empty!")),r=!0;return}if("salary"===n.name){var a=parseFloat(n.value.trim());if(isNaN(a)){l("error","Salary must be a valid number.");return}t[n.name]="$".concat(parseFloat(a.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}else t[n.name]=n.value.trim()}),r||function(){var e=document.createElement("tr"),a=!0,r=!1,o=void 0;try{for(var i,c=Object.keys(t)[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var s=i.value,d=document.createElement("td");d.textContent=t[s],e.appendChild(d)}}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}n.appendChild(e),l("success","New employee was added successfully!")}()}),n.addEventListener("click",function(e){var t=e.target.closest("tr");t&&(n.querySelectorAll("tr").forEach(function(e){e.classList.remove("active")}),t.classList.add("active"))}),t.addEventListener("click",function(e){var a,r,l,o,i=e.target.closest("th");t.querySelectorAll("th").forEach(function(e,t){e===i&&(o=t)}),i&&(a=o,r=Array.from(n.querySelectorAll("tr")),l=t.querySelectorAll("th")[a].classList.contains("asc"),t.querySelectorAll("th").forEach(function(e,t){t!==a&&e.classList.remove("asc","desc")}),r.sort(function(e,t){var n=e.querySelectorAll("td")[a].innerText,r=t.querySelectorAll("td")[a].innerText,o=parseFloat(n.replace(/[$,]/g,"")),i=parseFloat(r.replace(/[$,]/g,""));return n.toString()===n&&r.toString()===r&&isNaN(o)&&isNaN(i)?l?r.localeCompare(n):n.localeCompare(r):l?i-o:o-i}),r.forEach(function(e){return n.appendChild(e)}),i.classList.contains("asc")?(i.classList.remove("asc"),i.classList.add("desc")):(i.classList.contains("desc")&&i.classList.remove("desc"),i.classList.add("asc")))}),n.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t){var n=document.createElement("input");n.value=t.textContent,n.classList.add("cell-input"),t.textContent="",t.appendChild(n),n.focus(),n.select(),n.addEventListener("blur",function(){t.textContent=n.value||t.textContent}),n.addEventListener("keydown",function(e){"Enter"===e.key&&(t.textContent=n.value||t.textContent)})}});
//# sourceMappingURL=index.daab612f.js.map
