/**
 * Created by dummy on 4/10/17.
 */
import { http } from '../main'
import {SignUpSheet} from '../models/sign_up'

export default {
    /**
     *
     * @returns {Promise.<void>} List[SignUpSheet]
     */
    async listOpenSheet () {
        return ((await http.get('list/current')).data.signUps).map((raw) => new SignUpSheet(raw))
    }
}
