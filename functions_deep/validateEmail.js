function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const email = "test@example.com";
const isValidEmail = validateEmail(email);
console.log(isValidEmail);
