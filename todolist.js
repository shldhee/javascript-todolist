// TODO: refactoring code to functional
// TODO: Set singleton pattern for todolist
var todoObj = {
  todoList: [],
  idx: 0,

  render() {
    // for(i = 0; i < this.todoList.length; i++) {
    //   console.log(
    //     "ID : " + this.todoList[i].id +
    //     ", 할일 : " + this.todoList[i].item +
    //     ", 상태 : " + this.todoList[i].state
    //   );
    // }
    // console.log('-----------------------------');
    // var li = document.createElement('li');
    // for (var i = 0; i < this.todoList.length; i++) {
    //   li.append('Todo : ' + this.todoList[i].item + ' , 진행상태 : ' + this.todoList[i].state);
    //   document.getElementById("checkList").append(li);
    // }

    var checkList = document.querySelector("#checkList");
    checkList.innerHTML = "";

    for (var i = 0; i < this.todoList.length; i++) {
      var li = document.createElement('li');
      li.append('Id : ' + this.todoList[i].id + ' , Todo : ' + this.todoList[i].item + ' , 진행상태 : ' + this.todoList[i].state);
      checkList.append(li);
    }
    document.querySelector('.container').append(checkList);
  },

  changeTodo(id) {
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList[i].state = !this.todoList[i].state;
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
      // progress: this.state ? '완료' : '진행중',
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
  }
}

todoObj.init();
