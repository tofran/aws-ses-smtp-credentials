# AWS SES SMTP password generator

Browser tool to convert AWS secret access keys into AWS SES (Simple Email
Service) passwords.

Available in [https://github.com/tofran/aws-ses-smtp-credentials](https://github.com/tofran/aws-ses-smtp-credential)

## Why?

AWS [provides a Python script](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html)
to make this conversion. One could make a simple shell alias to perform this
conversion (note that some adaptation is needed to avoid leaking credentials
to the shell history).

I have always wondered why there isn't a javascript version for the browser
already - that does not use Node's crypto module.
Thus I took it as an opportunity to try a few new things and port it to
`crypto-js`.
