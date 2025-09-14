import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs={
    TodoList:'.todo-list'
}

export const App=(elementId)=>{

    const displayTodos=()=>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        //console.log(todos);
        //renderTodos('.todo-list');
        renderTodos(ElementIDs.TodoList,todos);
    }

    //Se ejecuta cuando la función App() se llama
    (()=>{
        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}