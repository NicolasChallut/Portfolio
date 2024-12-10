
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 698, hash: 'cd259cc6f85bcf03c295fc80b5b737a907682cec186130b011a8857035df8992', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '032b4ddb326fa6dd37a31b7d5c8883e57669e08f49090e0534ce645261195c8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-253ANVVW.css': {size: 317, hash: 'c0Qdz2rdLsU', text: () => import('./assets-chunks/styles-253ANVVW_css.mjs').then(m => m.default)}
  },
};
