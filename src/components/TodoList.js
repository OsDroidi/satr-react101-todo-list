import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Title from "./Title";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodo = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.id),
    }));
  };

  render() {
    return (
      <div>
        <Title title="My list" />
        <button onClick={this.removeAllTodo}>Clear list</button>
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <TodoForm onSubmit={this.addTodo} />
      </div>
    );
  }
}
