Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'TOGGLING BETWEEN SHOWING AND EDITING STATES',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Learn next step!',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Get some Profit!',
        isCompleted: false
    }
];