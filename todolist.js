// TODO: refactoring code to functional
// TODO: Set singleton pattern for todolist
var todoObj = {
  todoList: [],
  idx: 0,

  // 뷰단에 그리기
  render() {
    // console.log(this.todoList);
    var checkList = document.querySelector("#checkList");
    checkList.innerHTML = "";

    for (var i = 0; i < this.todoList.length; i++) {
      var createSpan = document.createElement("span");
      var removeBtn = document.createTextNode("삭제");
      createSpan.append(removeBtn);
      createSpan.classList.add("remove__btn");

      var li = document.createElement('li');
      if(this.todoList[i].state) {
        li.classList.add("completed");
        li.append(createSpan);
      }

      li.append(this.todoList[i].item);
      checkList.append(li);
      li.classList.add('todo__list');
      li.setAttribute("data-id",this.todoList[i].id);
    }
    document.querySelector('.container').append(checkList);
  },

  // 할일 추가
  addTodo(item) {
    if(!item) {
      return false;
    };

    var newList = {
      id: this.idx++,
      item: item,
      state: false,
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
    var removeBtn = document.querySelector(".createSpan");

    todoForm.addEventListener("submit", function(e) {
      e.preventDefault();
      todoObj.addTodo(todo__input.value);
      todo__input.value = "";
      todo__input.focus();
    });

    document.addEventListener('click',function(e){
       if(e.target && e.target.dataset.id){
        todoObj.changeTodo(~~e.target.dataset.id);
        return;
       }

       if(e.target && e.target.className === "remove__btn") {
         todoObj.removeTodo(~~e.target.parentNode.dataset.id);
        return;
       }
    });

    todoObj.addTodo("밥먹기");
    todoObj.addTodo("반찬먹기");
    todoObj.addTodo("설거지");
    todoObj.addTodo("샤워하기");
    todoObj.addTodo("청소하기");
  }
}

todoObj.init();
