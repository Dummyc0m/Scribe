import Hello from '@/components/Hello'
import LoginView from '@/components/LoginView'

export default {
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        }
    ]
}
