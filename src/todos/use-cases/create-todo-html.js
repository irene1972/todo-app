import { Todo } from "../models/todo.model"

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML=(todo)=>{
    if(!todo) throw new Error('A TODO object is required.');
    
    const html=`
            <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>
    `;
    const liElement=document.createElement('li');

    liElement.innerHTML=html;

    return liElement;
}