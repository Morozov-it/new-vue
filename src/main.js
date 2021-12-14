import { createApp } from 'vue'
import App from './App'
//глобальная регистрация компонентов
import components from '@/components/UI'
import router from '@/router/router';
import Vfocus from '@/directives/Vfocus';
import store from '@/store';

const app = createApp(App); //функция возвращает экземпляр приложения


//глобальная регистрация компонентов
components.forEach(component => {
    app.component(component.name, component)
});

app.directive('focus', Vfocus);//регистрация директив

app
    .use(router)//таким способом подключаются библиотеки и плагины
    .use(store)//импорт store
    .mount('#app') //создать приложение и вмонтировать в корневой div в index.html
