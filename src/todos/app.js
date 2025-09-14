import html from './app.html?raw';
import todoStore, {Filters} from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs={
    ClearCompletedButton:'.clear-completed',
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',
    TodoFilters:'.filtro'
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

    //Referencias HTML
    const newDescriptionInput=document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL=document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton=document.querySelector(ElementIDs.ClearCompletedButton);
    const filtersLIs=document.querySelectorAll(ElementIDs.TodoFilters);


    newDescriptionInput.addEventListener('keyup', (event)=>{
        //console.log(event);
        //console.log(event.target.value);

        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value='';

    });

    todoListUL.addEventListener('click', (event)=>{
        const element=event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event)=>{
        
        const isDestroyElement=event.target.className;
        const element=event.target.closest('[data-id]');

        if (isDestroyElement === 'destroy'){
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        }else return
    });

    clearCompletedButton.addEventListener('click', ()=>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element=>{
        element.addEventListener('click', (element)=>{
            filtersLIs.forEach(el=>el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();
        });
    });
}