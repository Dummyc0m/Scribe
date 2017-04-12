/**
 * Created by dummy on 4/10/17.
 */
import * as types from '../mutation-types'
import api from '../../api/sign_up'
import Vue from 'vue'

const state = {
    openSignUpSheets: [],
    currentSheet: undefined,
    currentSheetInstance: undefined
}

const mutations = {
    [types.SET_OPEN_SIGN_UP_SHEET] (state, { sheets }) {
        state.openSignUpSheets = sheets
    },
    [types.SET_CURRENT_SHEET] (state, { sheet }) {
        state.currentSheet = sheet
    },
    [types.SET_CURRENT_SHEET_INSTANCE] (state, { sheetInstance }) {
        state.currentSheetInstance = sheetInstance
    },
    [types.SET_CURRENT_SIGN_UP_SHEET_FORM_VALUE] (state, { id, event }) {
        Vue.set(state.currentSheetInstance.form, id, event)
    }
}

const getters = {
    openSignUpSheets (state) {
        return state.openSignUpSheets
    },
    currentSheet (state) {
        return state.currentSheet
    },
    currentSheetInstance (state) {
        return state.currentSheetInstance
    }
}

const actions = {
    async refreshOpenSignUpSheets ({ commit }) {
        commit(types.SET_OPEN_SIGN_UP_SHEET, { sheets: await api.listOpenSheet() })
    },
    async refreshCurrentSignUpSheet ({ commit }, { id }) {
        const sheet = await api.findSheetById(id)
        commit(types.SET_CURRENT_SHEET, { sheet })
        let sheetInstance = null
        try {
            sheetInstance = await api.showSignUp(sheet)
        } catch (e) {
            sheetInstance = sheet.newInstance()
        }
        commit(types.SET_CURRENT_SHEET_INSTANCE, { sheetInstance })
    },
    async submitCurrentSignUpSheetInstance ({ state }) {
        await api.submitSignUp(state.currentSheetInstance)
    },
    async clearCurrentSignUpSheetInstance ({ commit }) {
        commit(types.SET_CURRENT_SHEET, { sheet: undefined })
        commit(types.SET_CURRENT_SHEET_INSTANCE, { sheetInstance: undefined })
    },
    async setCurrentSignUpSheetFormValue ({ commit }, payload) {
        commit(types.SET_CURRENT_SIGN_UP_SHEET_FORM_VALUE, payload)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
