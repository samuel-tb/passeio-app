import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '208934829154-n2kqhg56e8mtivnan0vtl3cd6lc70gja.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}