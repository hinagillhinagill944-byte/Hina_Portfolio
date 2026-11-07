var f = document.getElementById('f');
f.addEventListener('submit', function (ev) {
  ev.preventDefault();
  var n = document.getElementById('n').value.trim();
  var e = document.getElementById('e').value.trim();
  var m = document.getElementById('m').value.trim();
  var ok = true;
  document.getElementById('en').textContent = n ? '' : 'Please enter your name.';
  document.getElementById('ee').textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? '' : 'Please enter a valid email address.';
  document.getElementById('em').textContent = m.length >= 10 ? '' : 'Message must be at least 10 characters.';
  if (!n || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || m.length < 10) ok = false;
  document.getElementById('done').textContent = ok ? 'Thanks, your message is ready to send!' : '';
  if (ok) f.reset();
});
