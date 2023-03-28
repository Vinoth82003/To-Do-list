
const input = document.querySelector('input');
const display = document.querySelector('.display');
const add = document.querySelector('.button');
const clear = document.querySelector('.clear');


function addNewItem(listElement, itemInput) {
    var listItem = document.createElement('li');
    var listItemCheckbox = document.createElement('input');
    var listItemLabel = document.createElement('label');
    var deleteButton = document.createElement('button');

    listItemCheckbox.type = 'checkbox';

    deleteButton.className = 'delete';
    deleteButton.innerHTML = 'Delete';
   

    listItemLabel.innerText = itemInput;

    listElement.appendChild(listItem);
    listItem.appendChild(listItemCheckbox);
    listItem.appendChild(listItemLabel);
    listItem.appendChild(deleteButton);

    document.getElementById('input').value = '';
    document.getElementById('input').focus();


    const check_Boxs = document.querySelectorAll('input[type="checkbox"]');

    console.log(check_Boxs);
    check_Boxs.forEach(e => {
        e.addEventListener('change',function (a) {
            const parent = a.target.parentNode;
            if (a.target.checked) {
                parent.classList.add('active');
            }else{
                parent.classList.remove('active');
            }
        });
    });


    const delete_btn = document.querySelectorAll('.delete');

    console.log(delete_btn);
    delete_btn.forEach(e => {
        e.addEventListener('click',function(){
            this.parentNode.remove();
        })
    });

   
}


add.addEventListener('click',function(){
    const itemInput = input.value;
    const listElement = display;
    if (itemInput === '') {
        alert('empty input..!');
    }else{
        addNewItem(listElement, itemInput);
    }
    
    
});

clear.addEventListener('click',function(){
    var childs = display.childElementCount;
    console.log(childs);
    for(let i = 0; i<childs; i++){
        display.removeChild(display.firstElementChild);
        console.log(i);
    }
});

document.onkeypress = function () {
    if (event.key === 'Enter') {
        const itemInput = input.value;
    const listElement = display;
    if (itemInput === '') {
        alert('empty input..!');
    }else{
        addNewItem(listElement, itemInput);
    }
    }
}


