const BASE_PREFIX = 'api';
const ApiConstants = {
    CATEGORIES :`/categories`,
    REQUEST_BOOKING_PGT :`/booking/pgt`,
    BOOKING_USER :`/booking/user`,
    BOOKING_PGT :`/booking`,
    PGT :`/pgt`,
    ACCOUNT:  '/account', 
    LOGIN:  '/account/login', 
    SIGNUP:  '/account/signup', 
    
    HOME :`${BASE_PREFIX}/novels`,
    READING_HISTORY_ACC :`${BASE_PREFIX}/history`,
    CHAPTER_NOVEL :`${BASE_PREFIX}/chapters`,
    BOOKMARK :`${BASE_PREFIX}/bookmarks`,
}

export default ApiConstants

export { BASE_PREFIX }
