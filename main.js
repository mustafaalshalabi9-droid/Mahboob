(function(){
  var state = { color:'white', size:'M', bag:0, faq:0 };
  var colors = { white:{name:'White', hex:'#FFFFFF'}, ink:{name:'Ink', hex:'#141414'} };
  var $ = function(id){ return document.getElementById(id); };

  // Countdown
  var drop = new Date('2026-11-13T00:00:00');
  var days = Math.ceil((drop - Date.now()) / 86400000);
  if (days > 0) {
    $('countdown').textContent = 'Drops in ' + days + (days === 1 ? ' day' : ' days') + ' — Friday, November 13, 2026';
  } else {
    $('countdown').hidden = true;
    $('announce-pre').hidden = true;
    $('announce-live').hidden = false;
  }

  function updateTee(){
    var c = colors[state.color];
    $('tee-body').setAttribute('fill', c.hex);
    $('tee-svg').setAttribute('aria-label', 'محبوب tee in ' + c.name);
    $('tee-stage').classList.toggle('ink', state.color === 'ink');
    $('color-name').textContent = c.name;
    $('add-tee').textContent = 'Add to bag — ' + c.name + ', ' + state.size;
  }
  document.querySelectorAll('.swatch').forEach(function(b){
    b.addEventListener('click', function(){
      state.color = b.dataset.color;
      document.querySelectorAll('.swatch').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      updateTee();
    });
  });
  document.querySelectorAll('.size').forEach(function(b){
    b.addEventListener('click', function(){
      state.size = b.textContent;
      document.querySelectorAll('.size').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      updateTee();
    });
  });

  var toastTimer;
  function toast(msg){
    var t = $('toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function(){ t.hidden = true; }, 5000);
  }
  function setBag(n){
    state.bag = n; $('bag-count').textContent = n;
    $('bag-btn').setAttribute('aria-label', 'Bag, ' + n + (n === 1 ? ' item' : ' items'));
  }
  $('add-tee').addEventListener('click', function(){
    setBag(state.bag + 1);
    toast('Added to bag: محبوب Tee, ' + colors[state.color].name + ', size ' + state.size + '.');
  });
  $('add-charm').addEventListener('click', function(){ setBag(state.bag + 1); toast('Added to bag: Heart Charm.'); });
  $('bag-btn').addEventListener('click', function(){
    document.getElementById('shop').scrollIntoView();
    toast(state.bag ? 'Your bag has ' + state.bag + (state.bag === 1 ? ' item.' : ' items.') + ' Checkout opens with the store.' : 'Your bag is empty. Pick a piece from Collection 1 to start.');
  });

  // FAQ
  var faqs = [
    ['How does the tee fit?', 'Unisex relaxed fit, true to size. Size up for an oversized look. [Add size chart: chest and length per size.]'],
    ['Where do you ship, and how much is it?', '[Shipping regions, rates and delivery times.]'],
    ['Can I return or exchange?', '[Returns window and condition, for example: unworn items within 30 days.]'],
    ['What is the charm made of?', 'Laser-cut plexiglass. It hangs from a bag, keys or a belt loop.'],
    ['Will Collection 1 restock?', 'It’s a limited run. If we restock, people on the waitlist hear first.'],
    ['What does Mahboob give back?', '[X]% of every drop funds [a named act of kindness]. After each drop we post exactly what it paid for.']
  ];
  var list = $('faq-list');
  faqs.forEach(function(f, i){
    var item = document.createElement('div'); item.className = 'faq-item';
    var h = document.createElement('h3');
    var b = document.createElement('button'); b.type = 'button'; b.id = 'faq-q-' + i;
    b.setAttribute('aria-controls', 'faq-a-' + i);
    var q = document.createElement('span'); q.textContent = f[0];
    var s = document.createElement('span'); s.className = 'sign'; s.setAttribute('aria-hidden', 'true');
    b.appendChild(q); b.appendChild(s); h.appendChild(b);
    var a = document.createElement('p'); a.className = 'answer'; a.id = 'faq-a-' + i; a.textContent = f[1];
    item.appendChild(h); item.appendChild(a); list.appendChild(item);
    b.addEventListener('click', function(){ state.faq = state.faq === i ? -1 : i; renderFaq(); });
  });
  function renderFaq(){
    faqs.forEach(function(_, i){
      var open = state.faq === i;
      var b = $('faq-q-' + i);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.querySelector('.sign').textContent = open ? '−' : '+';
      $('faq-a-' + i).hidden = !open;
    });
  }
  renderFaq();
  document.querySelectorAll('[data-open-faq]').forEach(function(a){
    a.addEventListener('click', function(){ state.faq = Number(a.dataset.openFaq); renderFaq(); });
  });

  // Waitlist
  $('wl-form').addEventListener('submit', function(e){
    e.preventDefault();
    var v = $('wl-email').value.trim();
    if (v.indexOf('@') > 0) {
      $('wl-form').hidden = true;
      var d = $('wl-done'); d.textContent = 'You’re on the list. We’ll email ' + v + ' before the drop goes live.'; d.hidden = false;
    } else {
      $('wl-error').hidden = false; $('wl-email').focus();
    }
  });
  $('wl-email').addEventListener('input', function(){ $('wl-error').hidden = true; });
})();
