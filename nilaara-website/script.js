const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `NILAARA HAIR OIL ENQUIRY\nName: ${data.get('name')}\nContact: ${data.get('phone')}\nMessage: ${data.get('message') || 'I would like to know more about Nilaara Hair Oil.'}`;
  const hint = document.getElementById('form-hint');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(() => {
      hint.textContent = 'Enquiry copied! You can now paste it into your email or WhatsApp.';
    }).catch(() => showMessage(message, hint));
  } else showMessage(message, hint);
});
function showMessage(message, hint) {
  const blob = new Blob([message], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = 'nilaara-enquiry.txt'; link.click();
  URL.revokeObjectURL(url);
  hint.textContent = 'Your enquiry was downloaded as a text file.';
}
