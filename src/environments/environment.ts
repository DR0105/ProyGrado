/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {

    production: true,
    NUXEO: {
        PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    CLIENTE_PRESUPUESTO: '/pages/plan-cuentas',
    WSO2_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/',
    // ADMINISTRATIVA_PRUEBAS_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8104/v1/',
    CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
    CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
    TERCEROS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/terceros_crud/v1/',
    ACADEMICA_JBPM_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/academica_jbpm/v1/',
    KNOWAGE: {
        PROTOCOL: 'https',
        HOST: 'tuleap.udistrital.edu.co',
        PORT: '',
        CONTEXTPATH: 'knowage',
        USER: 'bidev',
        PASSWORD: 'bidev',
    },
    TOKEN: {
        AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
        CLIENTE_ID: 'e36v1MPQk2jbz9KM4SmKhk8Cyw0a',
        RESPONSE_TYPE: 'id_token token',
        SCOPE: 'openid email',
        REDIRECT_URL: 'http://localhost:4200/',
        SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
        SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        AUTENTICACION_MID: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol',
    },

};
