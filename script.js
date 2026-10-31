const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

document.querySelectorAll('.course-link').forEach(link => link.addEventListener('click', () => {
  const course = link.dataset.course;
  const select = document.querySelector('#course');
  const option = [...select.options].find(item => item.text === course);
  select.value = option ? option.value : 'PGDIT';
}));

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name')).trim();
  const phone = String(form.get('phone')).trim();
  const course = String(form.get('course')).trim();
  const message = String(form.get('message')).trim();
  const text = `Hello SJ Computer Education,\n\nI would like to enquire about a course.\nName: ${name}\nPhone: ${phone}\nCourse: ${course}${message ? `\nMessage: ${message}` : ''}`;
  window.open(`https://wa.me/918838988167?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();

