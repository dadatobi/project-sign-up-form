const email = document.querySelector('#mail');
const phone = document.querySelector('#tel');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#c-password');
const form = document.querySelector('form');

const firstName = document.getElementById('first-name');

const inputs = [email, phone, password, confirmPassword];

inputs.forEach(item => {
  item.addEventListener('focusin', () => {
    item.classList.remove('error');
    if (item == password || item == confirmPassword) {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
    }
  });
});

const submit = e => {
  e.preventDefault();
  if (password.value !== confirmPassword.value || password.value.length < 8) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    return;
  }

  if (
    !phone.value.match(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
    )
  ) {
    phone.classList.add('error');
    return;
  } else if (
    phone.value.match(
      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
    )
  ) {
    phone.classList.add('success');
  }

  if (!password.value.match(/[a-z]/) || !password.value.match(/[A-Z]/)) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    return;
  }

  if (password.value == confirmPassword.value) {
    password.classList.add('success');
    confirmPassword.classList.add('success');
  }
};

form.addEventListener('submit', submit);
