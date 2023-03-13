import * as CryptoJS from 'crypto-js'

const INITIAL_SIGNATURE_MESSAGE = '11111111'  // AWS calls this "Date"
const SERVICE = 'ses'
const TERMINAL = 'aws4_request'
const MESSAGE = 'SendRawEmail'
const VERSION_PREFIX = '04'
const KEY_PREFIX = 'AWS4'

const sign = (
  key: string | CryptoJS.lib.WordArray,
  message: string
) => {
  return CryptoJS.HmacSHA256(message, key)
}

export const getSESSmtpPassword = (
  secretAccessKey: string,
  region: string
): string => {
  let signature = sign(KEY_PREFIX + secretAccessKey, INITIAL_SIGNATURE_MESSAGE)
  signature = sign(signature, region)
  signature = sign(signature, SERVICE)
  signature = sign(signature, TERMINAL)
  signature = sign(signature, MESSAGE)

  const versionAndSignature = (
    CryptoJS.enc.Hex
    .parse(VERSION_PREFIX)
    .concat(signature)
  )

  return versionAndSignature.toString(CryptoJS.enc.Base64)
}
