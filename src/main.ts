import customProblemPage from './content_scripts/problem';

const url: string = window.location.pathname;

console.info('url=', url);

if (url.startsWith('/problem/')) {
    customProblemPage();
}
