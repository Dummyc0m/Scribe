import TimelineView from '@/components/TimelineView'
import LoginView from '@/components/LoginView'
import PastEventView from '@/components/PastEventView'
import PasswordChangeView from '@/components/PasswordChangeView'
import SignOutView from '@/components/SignOutView'

export default {
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: {
                name: 'timeline',
                params: {
                    page: 0
                }
            }
        },
        {
            path: '/timeline/:page',
            name: 'timeline',
            component: TimelineView
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
