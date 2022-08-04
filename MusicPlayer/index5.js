import {Songs} from './Api2.js'
import {loadsongs} from './index2.js';
const searchinput=document.getElementById("searchinput");
const searchbtn=document.getElementById("searchbtn");
const selections=document.getElementById("selections");
searchbtn.addEventListener('click',()=>{
    const value=searchinput.value;
    const store=Songs.filter((val,ind)=>{
        return val.title===value;
    })
    console.log(store);
    loadsongs(store[0]);

})

Songs.map((val)=>{
    selections.innerHTML+=`<option value=${val.title}>${val.title}</option> `;
})
selections.addEventListener('click',(e)=>{
   const  output = selections.options[selections.selectedIndex].innerHTML;
    searchinput.value=output
    console.log(output);
})


