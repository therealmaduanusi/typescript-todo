var input = document.querySelector('.input');
var addBtn = document.querySelector('.addBtn');
var ulList = document.querySelector('.ulList');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function () {
    var inputValue = input.value;
    // console.log(inputValue);
    if (!inputValue) {
        var aside_1 = document.querySelector('.aside');
        var close_1 = document.querySelector('.close');
        addBtn.disabled = true;
        close_1.addEventListener('click', function () {
            aside_1.style.display = 'none';
            addBtn.disabled = false;
        });
        return aside_1.style.display = 'block';
    }
    // Creating elemnts
    var list = document.createElement('li');
    var span = document.createElement('span');
    var div = document.createElement('div');
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');
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
    deleteBtn.addEventListener('click', function () {
        list.remove();
    });
    // editing Btn
    editBtn.addEventListener('click', function () {
        var saveBtn = document.createElement('button');
        span.setAttribute('contenteditable', 'true');
        span.style.border = '1px solid #000';
        span.style.borderRadius = '5px';
        span.style.padding = '0.3rem';
        saveBtn.textContent = 'save';
        saveBtn.classList = 'editBtn';
        editBtn.replaceWith(saveBtn);
        saveBtn.addEventListener('click', function () {
            span.setAttribute('contenteditable', 'false');
            span.style.border = 'none';
            span.style.padding = '0';
            saveBtn.replaceWith(editBtn);
        });
    });
    // clear input field
    input.value = '';
});
