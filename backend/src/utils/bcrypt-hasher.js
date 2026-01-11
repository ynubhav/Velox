import bcrypt from 'bcrypt';

export async function hashpassword(input) {
  const SALT_ROUNDS = 10
  return await bcrypt.hash(input, SALT_ROUNDS)
}

export async function verifyhash(input, hashed) {
  return await bcrypt.compare(input, hashed)
}
