describe('Chats Unit Tests', function(){
    var Chats;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Chats_) {
        Chats = _Chats_;
    }));

    it('can get an instance of my factory', inject(function(Chats) {
        expect(Chats).toBeDefined();
    }));

    it('has 5 chats', inject(function(Chats) {
        expect(Chats.all().length).toEqual(5);
    }));

    it('has Max as friend with id 1', inject(function(Chats) {
        var oneChat = {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&amp;s=460'
        };

        expect(Chats.get(1).name).toEqual(oneChat.name);
    }));
});

describe('Todo Unit Tests', function(){
    var Todos;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Todos_) {
        Todos = _Todos_;
    }));

    it('can get an instance of my factory', inject(function(Todos) {
        expect(Todos).toBeDefined();
    }));

    it('has 2 todos', inject(function(Todos) {
        expect(Todos.all().length).toEqual(2);
    }));

    it('has Pick up apples as Todo with id 1', inject(function(Todos) {
        var oneTodo = {
            id: '1',
            name: 'Pick up apples',
            done: false
        };

//        angular.forEach(Todos.all(), function(todo) {
//          console.log(todo);
//        });

        expect(Todos.get(oneTodo.id).name).toEqual(oneTodo.name);
    }));

    it('get todo at index 0', inject(function(Todos) {
    var oneTodo = {
                id: '1',
                name: 'Pick up apples',
                done: false
            };
                expect(Todos.getByIndex(0).name).toEqual(oneTodo.name);
        }));

    it('get todo at index 3', inject(function(Todos) {

            expect(Todos.getByIndex(3)).toEqual(null);
    }));
});