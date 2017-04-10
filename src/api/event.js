/**
 * Created by dummy on 4/8/17.
 */
import { http } from '../main'
import { EventPage } from '../models/event_page'

export default {
    async pagedEvents (page, size) {
        return (new EventPage((await http.get(`event/list?page=${page}&size=${size}`)).data))
    }
}
