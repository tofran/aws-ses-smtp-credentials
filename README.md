# AWS SES SMTP password generator

Browser tool to convert AWS Secret Access Keys into AWS SES (Simple Email
Service) passwords.

Available in [https://tofran.github.io/aws-ses-smtp-credentials][static site].

## Library

This repo contains both a [static site] hosted on GitHub Pages, and an
[NPM library] (`aws-ses-smtp-credentials`) to convert Secret Access Keys
into an SMTP passwords:

**Installation**

`npm install --save aws-ses-smtp-credentials`

**Usage**

```js
import { getSESSmtpPassword } from "aws-ses-smtp-credentials";

getSESSmtpPassword(secretAccessKey, region);
```

[npm library]: https://www.npmjs.com/package/aws-ses-smtp-credentials
[static site]: https://tofran.github.io/aws-ses-smtp-credentials

## Why?

AWS [provides a Python script](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html)
to make this conversion. One could create a simple shell alias to perform this
conversion (note that some adaptation is needed to avoid leaking credentials
to the shell history).
But, I have always wondered why there isn't already a Javascript version (for
the browser - that does not use Node's crypto module).
Thus I took it as an opportunity to try a few new things and port it to
`crypto-js`.
