export default function(array, className) {
    let menu = document.createElement('ul');
    menu.className = className;
    let listItems = '';
    for(let item of array) {
        listItems += '<li>'+ item +'</li>';
    };
    menu.innerHTML = listItems;
    return menu;
};