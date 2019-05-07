import View from './view.js';

function getRouteInfo() {
  const route = location.hash ? location.hash.slice(1) : 'login';
  return route;
}

export default {
  init() {
    const route = getRouteInfo();
    console.log('hi,im router and my route is ',route);
    document.addEventListener('hashchange', View.render(route));
  }
}