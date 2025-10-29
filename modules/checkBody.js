function checkBody(body, keys) {
  for (const field of keys) {
    // Si le champ est manquant
    if (body[field] === undefined || body[field] === null) {
      return false;
    }

    // Si c’est une string vide
    if (typeof body[field] === 'string' && body[field].trim() === '') {
      return false;
    }
  }
  return true;
}
module.exports = { checkBody }