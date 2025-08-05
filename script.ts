const input = document.querySelector('.input') as HTMLInputElement;
const addBtn = document.querySelector('.addBtn') as HTMLButtonElement;
const ulList = document.querySelector('.ulList') as HTMLUListElement;

addBtn?.addEventListener('click', () => {
    let inputValue: string = input.value;
    // console.log(inputValue);
    
    if (!inputValue) {
       let aside = document.querySelector('.aside') as HTMLElement;
       let close = document.querySelector('.close') as HTMLSpanElement;
       addBtn.disabled = true;
       close.addEventListener('click', () => {
        aside.style.display = 'none';
        addBtn.disabled = false;
       })
       return aside.style.display = 'block'
    }
    // Creating elemnts
    let list: HTMLElement = document.createElement('li');
    let span: HTMLElement = document.createElement('span');
    let div : HTMLElement = document.createElement('div');
    let editBtn: HTMLElement = document.createElement('button');
    let deleteBtn: HTMLElement = document.createElement('button');
    // adding content
    span.textContent = inputValue;
    editBtn.textContent = 'edit';
    deleteBtn.textContent = 'delete';
    // append elements
    ulList.appendChild(list);
    list.appendChild(span);
    list.appendChild(div);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    editBtn.classList = 'editBtn';
    deleteBtn.classList = 'deleteBtn';

    // delete
    deleteBtn.addEventListener('click', () => {
        list.remove()
    })

    // editing Btn
    editBtn.addEventListener('click', () => {
        let saveBtn = document.createElement('button');
        span.setAttribute('contenteditable', 'true');
        span.style.border = '1px solid #000'
        span.style.borderRadius = '5px'
        span.style.padding = '0.3rem'
        saveBtn.textContent = 'save';
        saveBtn.classList = 'editBtn';
        editBtn.replaceWith(saveBtn);
        saveBtn.addEventListener('click', () => {
            span.setAttribute('contenteditable', 'false');
            span.style.border = 'none'
            span.style.padding = '0'
            saveBtn.replaceWith(editBtn);
        })
    })
    
    // clear input field
    input.value= ''
})