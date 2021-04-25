export const routeSegments = {
    home: '',
    interval: {
        path: 'interval',
        args: { id: 'id' }
    },
    settings: {
        path: 'settings',
        tabs: {
            general: {
                path: 'general-tab',
            },
            exceptions: {
                path: 'exceptions-tab',
            }
        },
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
