import RootView from '@/components/RootView'
import LoginView from '@/components/LoginView'
import PastEventView from '@/components/PastEventView'
import PasswordChangeView from '@/components/PasswordChangeView'
import SignOutView from '@/components/SignOutView'

export default {
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'root',
            component: RootView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/past',
            name: 'past',
            component: PastEventView
        },
        {
            path: '/change_pass',
            name: 'change_pass',
            component: PasswordChangeView
        },
        {
            path: '/sign_out',
            name: 'sign_out',
            component: SignOutView
        }
    ]
}
