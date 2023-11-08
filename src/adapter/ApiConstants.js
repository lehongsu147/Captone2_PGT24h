const BASE_PREFIX = 'api';
const ApiConstants = {
    CATEGORIES :`/categories`,
    LIST_PGT :`/pgt`,
    LOGIN:  '/account/login', 
    SIGNUP:  '/account/signup', 
    
    HOME :`${BASE_PREFIX}/novels`,
    READING_HISTORY_ACC :`${BASE_PREFIX}/history`,
    CHAPTER_NOVEL :`${BASE_PREFIX}/chapters`,
    BOOKMARK :`${BASE_PREFIX}/bookmarks`,
}

export default ApiConstants

export { BASE_PREFIX }
