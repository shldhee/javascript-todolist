var todoArray = [];
var i = 0;

function Todo() {
  this.addTodo = function(item) {
    var todolist = {
      id: i++,
      item: item,
      state: false,
    };
    todoArray.push(todolist);
  };

  this.finishTodo = function(item) {
    for (var i = 0; i < todoArray.length; i++) {
      for (var key in todoArray[i]) {
        if (item === todoArray[i][key]) {
          todoArray[i].state = !todoArray[i].state;
          //console.log(todoArray);
          return;
        }
      }
    }
  };
  // TodoVIew에게 밥먹기 추가 후 응답
}

function TodoView() {
  // Todo에게 밥먹기 추가 요청
}

function TodoList() {}

function TodoItem(title) {
  this.id = i++;
  this.title = title;
  this.state = false;
}

/**
 * TodoItem
 * Id
 * Title
 * State
 */

/**
    add  추가
    finish 완료
    delete 삭제?
  */
