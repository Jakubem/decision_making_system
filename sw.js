self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('decision-making-system').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'index.js'
        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });