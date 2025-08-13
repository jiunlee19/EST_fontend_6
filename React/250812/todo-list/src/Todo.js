class Todo {
    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    //class 안이라서 function changeState의 function 생략 가능
    changeState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem() {
        this.todoList.push();
    }
    getItems() {
        return this.todoList;
    }
    // getLeftTodoCount(){
    //   return
    // }
}
