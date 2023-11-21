const BASE_PREFIX = 'api';
const ApiConstants = {
    CATEGORIES :`/categories`,
    BOOKING_USER :`/booking/user`,
    BOOKING_PGT :`/booking/pgt`,
    
    PAYMENT_URL: 'payment/create_payment_url',

    BOOKING :`/booking`,
    BOOKING_CHART :`/booking/chart`,
    BOOKING_TOP :`/booking/top`,
    BOOKING_TIME :`/booking/time`,
    PGT :`/pgt`,
    BANNER :`/banner`,
    ACCOUNT:  '/account', 
    ACCOUNT_PGT:  '/account/pgt', 
    LOGIN:  '/account/login', 
    SIGNUP:  '/account/signup', 
    
    HOME :`${BASE_PREFIX}/novels`,
    READING_HISTORY_ACC :`${BASE_PREFIX}/history`,
    CHAPTER_NOVEL :`${BASE_PREFIX}/chapters`,
    BOOKMARK :`${BASE_PREFIX}/bookmarks`,
}

export default ApiConstants

export { BASE_PREFIX }
