/**
 * Created by dummy on 4/8/17.
 */
import {Student} from './student'
export class UserToken {
    constructor (json) {
        this.token = json.token
        if (json.user) {
            this.user = new User(json.user)
            this.type = 'user'
        } else {
            this.user = new User({
                email: json.student.email,
                userLevel: 0,
                student: json.student
            })
            this.type = 'student'
        }
    }
}

export class User {
    constructor (json) {
        this.email = json.email
        this.userLevel = json.userLevel
        this.student = json.student ? new Student(json.student) : null
    }

    isAuthorized (level) {
        return this.userLevel >= level
    }
}
