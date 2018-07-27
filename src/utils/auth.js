const isUserAuthenticated = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userId != null) {
        console.log(`foobar ${user.userId}`);
        return true;
    } else {
        console.log('user not signed in!');
        return false;
    }
};

export default isUserAuthenticated;
