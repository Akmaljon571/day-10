import { ism, fam, guruh, jinsi, form, tbody } from "./let.js";
import replace from "./replace.js";
import UserName from "./UserName.js";

let storage = window.localStorage
let sap = storage.getItem('data')
let data;

if (sap) {
    data = JSON.parse(sap)
} else{
    data = []
}


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    
    let newObj = new UserName(ism.value, fam.value, guruh.value, jinsi.value)
    
    data.push(newObj)
    storage.setItem('data', JSON.stringify(data))
    replace(tbody, data)

    ism.value = '';
    fam.value = '';
    guruh.value = '';
    jinsi.value = '';
})
replace(tbody, data)
