// TODO: refactoring code to functional
// TODO: Set singleton pattern for todolist
var todoObj = {
  todoList: [],
  idx: 0,

  // 뷰단에 그리기
  render() {
    var checkList = document.querySelector("#checkList");
    checkList.innerHTML = "";

    for (var i = 0; i < this.todoList.length; i++) {
      var li = document.createElement('li');
      li.append(this.todoList[i].item);
      checkList.append(li);
      li.classList.add('todo__list');
    }
    document.querySelector('.container').append(checkList);
  },

  // 할일 추가
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

  //할일 변경
  changeTodo(id) {
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList[i].state = !this.todoList[i].state;
        break;
      }
    }
    this.render();
  },

  // 할일 삭제
  removeTodo(id) {
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList.splice(i,1);
        break;
      }
    }
    this.render();
  },

  // 초기화
  init() {
    var todoForm = document.getElementById("todo__form");
    todoForm.addEventListener("submit", function(e) {
      e.preventDefault();
      todoObj.addTodo(todo__input.value);
      todo__input.value = "";
      console.log(todoObj.todoList);
    });
    // todo__list.addEventListener("click", function() {
    //   todoObj.changeTodo(this.id);
    // });
  }
}

todoObj.init();
