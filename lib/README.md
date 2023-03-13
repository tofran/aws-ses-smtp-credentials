# aws-ses-smtp-credentials

Simple browser compatible package package to convert AWS secret access keys
into AWS SES (Simple Email Service) SMTP passwords.

This package was intended to use in the browser, it uses `crypto-js` instead
of the standard node cryptography modules.

## Usage

Call `getSESSmtpPassword` with your secret access key and the region ID. It
will return the password as a string. It should be used with as the SMTP
password for one of the available AWS SES endpoints, in combination with the
access key ID as the username.

```js
import { getSESSmtpPassword } from 'aws-ses-smtp-credentials';

getSESSmtpPassword(
    'dhSgJJyAs+2z19oLOVkwBrE6GkdNQD5fL5Dou5Tb',
    'eu-central-1'
)
```
