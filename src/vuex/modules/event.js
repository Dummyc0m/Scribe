/**
 * Created by dummy on 4/8/17.
 */
import * as types from '../mutation-types'
import { EMPTY_PAGE } from '../../models/event_page'
import api from '../../api/event'

const state = {
    currentPage: EMPTY_PAGE,
    eventLoading: false
}

const mutations = {
    [types.SET_CURRENT_PAGE] (state, { currentPage }) {
        state.currentPage = currentPage
    },
    [types.SET_EVENT_LOADING] (state, { loading }) {
        state.eventLoading = loading
    }
}

const getters = {
    currentPage (state) {
        return state.currentPage
    },
    eventLoading (state) {
        return state.eventLoading
    }
}

const actions = {
    async refreshEventPage ({ commit }, { page, size }) {
        commit(types.SET_EVENT_LOADING, { loading: true })
        commit(types.SET_CURRENT_PAGE, { currentPage: await api.pagedEvents(page, size) })
        commit(types.SET_EVENT_LOADING, { loading: false })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
