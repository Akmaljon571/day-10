import func from "./func.js";

export default function ( tbody, data) {
    let fragment = document.createDocumentFragment()

    data.forEach((key, son) => {
        fragment.append(func(key, son+1))
    });

    tbody.innerHTML = ''
    tbody.append(fragment)
    
}