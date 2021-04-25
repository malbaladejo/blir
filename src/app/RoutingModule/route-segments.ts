export const routeSegments = {
    home: '',
    interval: {
        path: 'interval',
        args: { id: 'id' }
    },
    settings: {
        path: 'settings',
        exceptions: {
            path: 'settings/exceptions',
            edit: {
                path: 'settings/exceptions/edit',
                args: { id: 'id' }
            }
        }
    },
    about: 'about'
};
