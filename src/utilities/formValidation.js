export function validateEmail(email) {
  return email.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function isValidPhoneNumber(phone) {
  const phoneRegex = /^\+?[0-9]{7,}$/;
  return phoneRegex.test(phone);
}
