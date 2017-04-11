/**
 * Created by dummy on 4/10/17.
 */
import * as types from '../mutation-types'
import api from '../../api/sign_up'

const state = {
    openSignUpSheets: []
}

const mutations = {
    [types.SET_OPEN_SIGN_UP_SHEET] (state, { sheets }) {
        state.openSignUpSheets = sheets
    }
}

const getters = {
    openSignUpSheets (state) {
        return state.openSignUpSheets
    }
}

const actions = {
    async refreshOpenSignUpSheets ({ commit }) {
        commit(types.SET_OPEN_SIGN_UP_SHEET, { sheets: await api.listOpenSheet() })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
