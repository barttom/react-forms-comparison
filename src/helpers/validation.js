export function validName (name = '') {
  return name.trim().length > 0 && name.trim().match(/^[A-Za-z]+$/);
}

export function validEmail (email = '') {
  return email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/);
}
