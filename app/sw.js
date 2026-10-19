// NAP · service worker (GERADO no build por scripts/pwa.ts; não edite).
const VERSAO = "10adace28475"
const CACHE = 'nap-' + VERSAO
const ARQUIVOS = [
  "./",
  "./apple-touch-icon.png",
  "./assets/__vite-browser-external-wtPyfJtp.js",
  "./assets/abrirBanco-CK8Alsg5.js",
  "./assets/bravo-CtmDkiz5.webp",
  "./assets/calmo-CcckEVpD.webp",
  "./assets/contente-DmymcdGa.webp",
  "./assets/dist-Cbr-nYhf.js",
  "./assets/dormindo-SUc8clOP.webp",
  "./assets/feliz-C-6lFr9Z.webp",
  "./assets/index-C6kmc4NJ.js",
  "./assets/index-DhQ2jiQH.css",
  "./assets/initdb-DwLcS450.wasm",
  "./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2",
  "./assets/inter-latin-wght-normal-Dx4kXJAl.woff2",
  "./assets/n-CgKdoSdu.webp",
  "./assets/nodefs-BCt2BWVt.js",
  "./assets/opfs-ahp-CRJg1pVI.js",
  "./assets/pglite-DgipwPsY.wasm",
  "./assets/pglite-n8RDJ3Sw.data",
  "./assets/piscando--4plG59d.webp",
  "./assets/preocupado-C9zPemON.webp",
  "./assets/sorriso-DrimdRRm.webp",
  "./assets/src-BVQbNKYx.js",
  "./assets/surpreso-BiTBklnQ.webp",
  "./assets/xlsx-Bv_pSZNU.js",
  "./favicon-64.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./icon.ico",
  "./index.html",
  "./manifest.webmanifest"
]

// Instala: guarda tudo para funcionar sem internet. NÃO chama skipWaiting: a versão nova espera o usuário aceitar.
self.addEventListener('install', (evento) => {
  evento.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARQUIVOS)))
})

// Ativa: apaga os caches das versões antigas (só os do NAP) e passa a atender as abas abertas.
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches
      .keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n.startsWith('nap-') && n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  )
})

// O app avisa que o usuário aceitou atualizar.
self.addEventListener('message', (evento) => {
  if (evento.data && evento.data.tipo === 'ATUALIZAR_AGORA') self.skipWaiting()
})

self.addEventListener('fetch', (evento) => {
  const pedido = evento.request
  if (pedido.method !== 'GET') return
  if (new URL(pedido.url).origin !== self.location.origin) return
  evento.respondWith(responder(pedido))
})

async function responder(pedido) {
  const cache = await caches.open(CACHE)
  const guardado = await cache.match(pedido, { ignoreSearch: true })
  if (guardado) return guardado
  try {
    const resposta = await fetch(pedido)
    if (resposta.ok) await cache.put(pedido, resposta.clone())
    return resposta
  } catch (erro) {
    // Sem internet e fora da lista: numa navegação entrega a página do app (a rota fica no # e é do navegador).
    if (pedido.mode === 'navigate') {
      const pagina = await cache.match(new URL('./index.html', self.registration.scope).href)
      if (pagina) return pagina
    }
    throw erro
  }
}
