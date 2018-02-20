// TODO: refactoring code to functional!
var todoList = [];
var i = 0;

function Todo() {}

function render() {
  console.log('------------------');
  for (var i = 0; i < todoList.length; i++) {
    console.log(
      'Todo : ' + todoList[i].item + ' , 진행상태 : ' + todoList[i].state
    );
  }
  console.log('------------------');
}

function changeTodo(item) {
  for (var i = 0; i < todoList.length; i++) {
    for (var key in todoList[i]) {
      if (item === todoList[i][key]) {
        todoList[i].state = !todoList[i].state;
        render();
        return;
      }
    }
  }
}

function addTodo(item) {
  var newTodoList = {
    id: i++,
    item: item,
    state: false,
    progress: this.state ? '완료' : '진행중',
  };
  todoList.push(newTodoList);
  render();
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

addTodo('밥먹기');
addTodo('설거지하기');

