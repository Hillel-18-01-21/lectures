$(function () {
    let todoItems = [];

    function addItem(value, id = Date.now()) {
        todoItems.push({
            id,
            title: value,
            completed: false
        });
    }

    function onAddItem() {
        const $input = $('#todo-input');
        const item = $input.val();
        addItem(item);
        $input.val('');
        renderItems(todoItems);
    }

    function onItemCheckout(id) {
        const index = todoItems.findIndex(e => e.id == id);
        todoItems[index].completed = !todoItems[index].completed;
        renderItems(todoItems);

        // todoItems = todoItems.filter(e => e.id != id)
        // renderItems(todoItems);

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todoItems[index]),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(e => {
            alert('Item was updated successfully!');
        }).catch(e => {
            todoItems[index].completed = !todoItems[index].completed;
            renderItems(todoItems);
            alert('Something went wrong');
        });
    }

    function init() {
        $('#add-btn').on('click', onAddItem);
        $('#todo-input').on('keypress', e => {
            if (e.which == 13) {
                onAddItem();
            }
        });

        loadToDoList();
        $('#list').on('click', '.list-group-item .form-check-input', e => {
            const id = $(e.currentTarget).parent().parent().attr('data-id');
            onItemCheckout(id);
        });
    }

    function renderItems(items) {
        const $list = $('#list');
        $list.empty();

        items.forEach((e, i) => {
            const $li = $(`<li class="list-group-item d-flex ${e.completed ? 'completed' : ''}" data-id="${e.id}">
                <div class="form-check ms-2">
                    <input type="checkbox" class="form-check-input" ${e.completed ? 'checked' : ''}>
                </div>
                <div class="ms-2 me-auto">
                   ${i + 1} ${e.title}
                </div>
            </li>`);
            $list.append($li);

        });
    }

    function loadToDoList() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                json.slice(0, 10).forEach(e => {
                    addItem(e.title, e.id);
                });
                renderItems(todoItems);
            });
    }

    init();
});

// JQuery summery
// 1 - $ -> jQuery 
// 2 - $('selector') - выборка
// 3 - $('html') - jquery-collection -> document.createElement().innerHTML
// 4 - $('selector').val('some text').addClass('class-name').fadeIn() - chaining
// 5 - $('selector').on('event', 'target', handler) - events delegation
// 6 - $('selector').{animationType}() <- don't use