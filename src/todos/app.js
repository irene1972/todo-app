import html from './app.html?raw';

export const App=(elementId)=>{

    //Se llama cuando la función App() se llama
    (()=>{
        const app=document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
    })();
}