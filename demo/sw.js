// NAP · service worker de emergência (GERADO no build com VITE_NAP_PWA=desligado; não edite).
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches
      .keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n.startsWith('nap-')).map((n) => caches.delete(n))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((abas) => Promise.all(abas.map((aba) => aba.navigate(aba.url)))),
  )
})
