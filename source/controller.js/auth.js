const auth = {};

auth.login = () => {
    console.log('Inside login controller');
    return 'login route works well';
};

auth.logout = () => {
    console.log('Inside the logout controller');
    return 'logout route works well';
}

module.exports = auth;