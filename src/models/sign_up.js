/**
 * Created by dummy on 4/8/17.
 */
import {EventGroup} from './event'

export class SignUpSheet {
    constructor (json) {
        this.id = json.id
        this.name = json.name
        this.status = json.status
        this.eventGroups = json.events.map((element) => new EventGroup(element))
    }

    newSheet () {
        return this.eventGroups.reduce((acc, entry) => {
            acc[entry.id] = '-1'
            return acc
        }, {})
    }

    newRules () {
        return this.eventGroups.reduce((acc, entry) => {
            acc[entry.id] = [{ required: true, message: 'Please select one of the options', trigger: 'blur' }]
            return acc
        }, {})
    }
}

export const EMPTY_SIGN_UP_SHEET = new SignUpSheet({
    id: -1,
    name: '',
    status: -1,
    events: []
})
