<script lang="ts">
  import { getSESSmtpPassword } from 'aws-ses-smtp-credentials'

  const AWS_SES_SMTP_REGIONS = {
    'ap-northeast-1': 'Asia Pacific (Tokyo)',
    'ap-northeast-2': 'Asia Pacific (Seoul)',
    'ap-northeast-3': 'Asia Pacific (Osaka)',
    'ap-south-1': 'Asia Pacific (Mumbai)',
    'ap-southeast-1': 'Asia Pacific (Singapore)',
    'ap-southeast-2': 'Asia Pacific (Sydney)',
    'ca-central-1': 'Canada (Central)',
    'eu-central-1': 'Europe (Frankfurt)',
    'eu-north-1': 'Europe (Stockholm)',
    'eu-west-1': 'Europe (Ireland)',
    'eu-west-2': 'Europe (London)',
    'eu-west-3': 'Europe (Paris)',
    'sa-east-1': 'South America (São Paulo)',
    'us-east-1': 'US East (N. Virginia)',
    'us-east-2': 'US East (Ohio)',
    'us-gov-west-1': 'AWS GovCloud (US)',
    'us-west-1': 'US West (N. California)',
    'us-west-2': 'US West (Oregon)',
  }

  let region: string | undefined
  let secretAccessKey: string | undefined
  let smtpPassword: string | undefined

  let copyButtonContent = 'Copy'

  const copySmtpPasswordToClipboard = () => {
    if (smtpPassword) {
      navigator.clipboard.writeText(smtpPassword).then(() => {
        copyButtonContent = 'Copied!'

        setTimeout(() => {
          copyButtonContent = 'Copy'
        }, 1000)
      })
    }
  }

  $: if (region && secretAccessKey) {
    smtpPassword = getSESSmtpPassword(secretAccessKey, region)
  } else {
    smtpPassword = undefined
  }
</script>

<svelte:head>
  <title>AWS SES SMTP Password Generator</title>
</svelte:head>

<h1>AWS SES SMTP Password Generator</h1>

<p class="mt-2 text-sm text-slate-400">
  Convert AWS Secret Access Keys into AWS SES (Simple Email Service) SMTP
  passwords. This tool is 100% browser code, no requests are made to servers or
  third parties. Grab the source code from the
  <a href="https://github.com/tofran/aws-ses-smtp-credentials">
    github repository
  </a>
  .
</p>

<label for="region-input">Region:</label>
<select
  id="region-input"
  bind:value={region}
  class="form-input px-4 py-3 rounded"
>
  {#each Object.entries(AWS_SES_SMTP_REGIONS) as [id, name]}
    <option value={id}>{id}: {name}</option>
  {/each}
</select>

<label for="secret-access-key-input"> Secret access key:</label>
<textarea
  id="secret-access-key-input"
  bind:value={secretAccessKey}
  class="form-input px-4 py-3 rounded"
/>

{#if smtpPassword}
  <label for="result-input">Result:</label>
  <textarea id="result-input" readonly value={smtpPassword} />
  <button on:click={copySmtpPasswordToClipboard}>{copyButtonContent}</button>
{/if}

<style>
  label {
    margin: 1em 0 0 0;
    display: block;
    padding-left: 0.2em;
  }

  select,
  textarea {
    padding: 0.3em;
    margin-left: 0.2em;
    resize: none;
  }

  select {
    width: 100%;
  }

  textarea {
    width: calc(100% - 1em);
    height: 2.5em;
  }

  #result-input {
    width: calc(100% - 6.7em);
  }

  button {
    inline-size: min-content;
    padding: 0.3em;
    width: 5em;
    height: 3.3em;
    vertical-align: top;
  }
</style>
