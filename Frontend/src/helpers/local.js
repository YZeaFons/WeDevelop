export const setUserData = (key, elements) => {
    const setUserLocal = localStorage.setItem(key, JSON.stringify(elements))   
    return setUserLocal
}

export const clearUserData = () => {
    localStorage.removeItem('user');
};


export const getUserData = () => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    return userLocal
};
