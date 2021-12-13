import { createApp } from 'vue'
import App from './App'
//глобальная регистрация компонентов
import components from '@/components/UI'
import router from '@/router/router';

const app = createApp(App); //функция возвращает экземпляр приложения


//глобальная регистрация компонентов
components.forEach(component => {
    app.component(component.name, component)
});

app
    .use(router)//таким способом подключаются библиотеки и плагины
    .mount('#app') //создать приложение и вмонтировать в корневой div в index.html
