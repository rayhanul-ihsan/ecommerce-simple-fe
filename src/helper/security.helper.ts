import * as Crypto from 'crypto-js'

import { isJson } from './data.helper'

export function dataEncryption(data: any) {
  const obj = typeof data === 'object' ? JSON.stringify(data) : data
  const result = Crypto.Rabbit.encrypt(obj, <string>process.env.ENCRIPTION_PASSWORD).toString()

  return result
}

export function dataDecryption(data: any) {
  try {
    const predicate = Crypto.Rabbit.decrypt(data, <string>process.env.ENCRIPTION_PASSWORD)
    const decrypted = predicate.toString(Crypto.enc.Utf8)
    const result = isJson(decrypted) ? JSON.parse(decrypted) : decrypted
    return result
  } catch (error) {}
}

export function encodeToBase64(data: any): string {
  const jsonString = typeof data === 'string' ? data : JSON.stringify(data)
  return btoa(jsonString).replace(/=+$/, '') // Remove trailing '='
}

export function decodeFromBase64(base64String: string): any {
  // Add padding back if necessary
  const paddedString = base64String.padEnd(base64String.length + ((4 - (base64String.length % 4)) % 4), '=')
  const jsonString = atob(paddedString)
  try {
    return JSON.parse(jsonString) // Try to parse as JSON
  } catch {
    return jsonString // If parsing fails, return the raw string
  }
}

export const idEncryption = (id: any) => {
  try {
    return process.env.ENCODE_ID == 'true' ? encodeToBase64(dataEncryption(id)) : id
  } catch (error) {
    return ''
  }
}

export const idDecryption = (id: any) => {
  try {
    return process.env.ENCODE_ID == 'true' ? dataDecryption(decodeFromBase64(id)) : id
  } catch (error) {
    return id
  }
}

