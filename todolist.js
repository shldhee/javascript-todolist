// TODO: refactoring code to functional
// TODO: Set singleton pattern for todolist
var todoObj = {
  todoList: [],
  idx: 0,

  render() {
    for(i = 0; i < this.todoList.length; i++) {
      console.log(
        "ID : " + this.todoList[i].id +
        " 할일 : " + this.todoList[i].item +
        " 상태 : " + this.todoList[i].progress
      );
    }
    console.log('-----------------------------');
    // var li = document.createElement('li');

    // for (var i = 0; i < this.todoList.length; i++) {
      // li.append('Todo : ' + o.item + ' , 진행상태 : ' + o.state);
      // document.getElementById("checkList").append(li);
    // }
  },

  changeTodo(id) {
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList[i].state = !this.todoList[i].state; // 상태만 바꾸지 progress는 바뀌지 않는다.
        break;
      }
    }
    this.render();
  },

  addTodo(item) {
    var newList = {
      id: this.idx++,
      item: item,
      state: false,
      progress: this.state ? '완료' : '진행중',
    };

    this.todoList.push(newList);
    this.render();
  },

  removeTodo(id) {
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList.splice(i,1);
        break;
      }
    }
    this.render();
  },

  init() {
    this.addTodo('밥먹기');
    this.addTodo('설거지하기');
    this.changeTodo(0);
  }
}

todoObj.init();
