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
}
