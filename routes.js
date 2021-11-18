export const routes = [
    {
        url: '/',
        controller: 'home.index',
    },
    {
        url: 'login',
        controller: 'auth.login',
        method: 'POST',
    },
    {
        url: 'register',
        controller: 'auth.register',
        method: 'POST',
    },
    {
        url: 'user',
        controller: 'user.show',
        secure: true,
    },
];