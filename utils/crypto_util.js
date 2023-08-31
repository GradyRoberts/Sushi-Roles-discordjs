import { crypto } from 'node:crypto';

function createDigest(message) {
    return crypto.createHash('shake256', { outputLength: 4 }).update(message).digest('hex');
  }
  
export function createRoleNameExtension(eventName) {
// use crypto to encrypt the event name with privkey

// use createDigest to hash the encrypted name to make it shorter
}

export function verifyRoleNameExtension(roleName, extension) {
// use crypto to encrypt the role name with privkey (exluding extension)

// use createDigest to hash the encrypted name

// compare hash to the existing extension
}