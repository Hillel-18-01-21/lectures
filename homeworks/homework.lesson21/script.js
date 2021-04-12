$(function () {
    const todoItems = [];

    function addItem(value) {
        todoItems.push({
            id: Date.now(),
            title: value
        });
    }

    function onAddItem() {
        const $input = $('#todo-input');
        const item = $input.val();
        addItem(item);
        $input.val('');
        renderItems(todoItems);
    }

    function init() {
        $('#add-btn').on('click', onAddItem);
        $('#todo-input').on('keypress', e => {
            if (e.which == 13) {
                onAddItem();
            }
        });

        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(json => {
        //         json.slice(0, 10).forEach(e => {
        //             addItem(e.title);
        //         });
        //         renderItems(todoItems);
        //     });
        $('#list').on('click', '.list-group-item', console.log);
    }

    function renderItems(items) {
        const $list = $('#list');
        $list.empty();

        items.forEach(e => {
            const $li = $(`<li class="list-group-item" data-id="${e.id}">${e.title}</li>`);
            $list.append($li);

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