const TimelineView = resolve => require([ '@/components/TimelineView' ], resolve)
const LoginView = resolve => require([ '@/components/LoginView' ], resolve)
const PastEventView = resolve => require([ '@/components/PastEventView' ], resolve)
const PasswordChangeView = resolve => require([ '@/components/PasswordChangeView' ], resolve)
const SignOutView = resolve => require([ '@/components/SignOutView' ], resolve)
const SignUpListView = resolve => require([ '@/components/SignUpListView' ], resolve)
const SignUpView = resolve => require([ '@/components/SignUpView' ], resolve)
import iView from 'iview'

export default {
    // scrollBehavior: () => ({ y: 0 }),
    beforeEach (to, from, next) {
        iView.LoadingBar.start()
        next()
    },
    afterEach (to, from, next) {
        iView.LoadingBar.finish()
    },
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
        }
    ]
}
