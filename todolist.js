// TODO: refactoring code to functional
// TODO: Set singleton pattern for todolist
var todoObj = {
  todoList: new Array(),
  idx: 0,
  
  todo() {

  },

  render(o) {
    var li = document.createElement('li');

    // for (var i = 0; i < this.todoList.length; i++) {
      li.append('Todo : ' + o.item + ' , 진행상태 : ' + o.state);
      document.getElementById("checkList").append(li);
    // }
  },

  change(item) {
    for (var i = 0; i < todoList.length; i++) {
      for (var key in todoList[i]) {
        if (item === todoList[i][key]) {
          todoList[i].state = !todoList[i].state;
          render();
          return;
        }
      }
    }
  },

  addTodo(item) {
    var newList = {
      id: this.idx++,
      item: item,
      state: false,
      progress: this.state ? '완료' : '진행중',
    };

    this.todoList.push(newList);
    this.render(newList);
  },

  todoView() {
    // Todo에게 밥먹기 추가 요청
  },

  todoItem(task) {
    this.id = this.idx++;
    this.task = task;
    this.state = false;
  },

  init() {
    this.addTodo('밥먹기');
    this.addTodo('설거지하기');
  }
}

todoObj.init();
