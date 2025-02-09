export default function authHeader() {

    const userStr = localStorage.getItem('user');
    let user = null;

    if(userStr){
        user = JSON.parse(userStr);
    }

    if(user && user.accessToken){
        console.log(user.token)
        return { Authorization: 'Bearer ' + user.token};
    } else {
        return {Authorization: '' };
    }

}