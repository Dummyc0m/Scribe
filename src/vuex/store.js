import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

export default {
    actions,
    getters,
    modules,
    strict: process.env.NODE_ENV !== 'production'
}
