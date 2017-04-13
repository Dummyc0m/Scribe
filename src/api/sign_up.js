/**
 * Created by dummy on 4/10/17.
 */
import { http } from '../main'
import {SignUpSheet} from '../models/sign_up'
import {ActionResult} from '../models/result'

export default {
    /**
     *
     * @returns {Promise.<void>} List[SignUpSheet]
     */
    async listOpenSheet () {
        return (await http.get('signup/list/current')).data.signUps.map((raw) => new SignUpSheet(raw))
    },
    async showSignUp (sheet) {
        return sheet.instanceFrom((await http.get(`signup/signup/${sheet.id}`)).data)
    },
    async submitSignUp (sheetInstance) {
        return new ActionResult((await http.post('signup/signup/', { data: {
            id: sheetInstance.id,
            sheet: sheetInstance.form
        } })).data)
    },
    async findSheetById (sheetId) {
        return new SignUpSheet((await http.get(`signup/find/${sheetId}`)).data)
    }
}
