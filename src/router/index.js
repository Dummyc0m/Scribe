const TimelineView = resolve => require([ '@/components/TimelineView' ], resolve)
const LoginView = resolve => require([ '@/components/LoginView' ], resolve)
const PastEventView = resolve => require([ '@/components/PastEventView' ], resolve)
const PasswordChangeView = resolve => require([ '@/components/PasswordChangeView' ], resolve)
const SignOutView = resolve => require([ '@/components/SignOutView' ], resolve)
const SignUpListView = resolve => require([ '@/components/SignUpListView' ], resolve)
const SignUpView = resolve => require([ '@/components/SignUpView' ], resolve)
const CentralDogmaView = resolve => require([ '@/components/CentralDogmaView' ], resolve)
import iView from 'iview'
import { store } from '../main'

const publicRoutes = {
    root: true,
    timeline: true,
    login: true,
    central_dogma: true
}

export const beforeEach = (to, from, next) => {
    iView.LoadingBar.start()
    if (!publicRoutes[to.name]) {
        store.dispatch('verify').then(() => {
            if (store.getters.authenticated) {
                next()
            } else {
                iView.LoadingBar.finish()
                next({
                    name: 'login'
                })
            }
        })
    } else {
        next()
    }
}

export const afterEach = (to, from) => {
    iView.LoadingBar.finish()
}

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
        },
        {
            path: '/sign_up_list',
            name: 'sign_up_list',
            component: SignUpListView
        },
        {
            path: '/sign_up/:id',
            name: 'sign_up',
            component: SignUpView
        },
        {
            path: '/central_dogma',
            name: 'central_dogma',
            component: CentralDogmaView
        }
    ]
}
