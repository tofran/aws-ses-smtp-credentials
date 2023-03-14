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

  const copySmtpPasswordToClipboard = () => {
    if (smtpPassword) {
      navigator.clipboard.writeText(smtpPassword)
    }
  }

  $: if (region && secretAccessKey) {
    smtpPassword = getSESSmtpPassword(secretAccessKey, region)
  } else {
    smtpPassword = undefined
  }
</script>

<h1>AWS SES SMTP password generator</h1>

<p class="mt-2 text-sm text-slate-400">
  Convert AWS Secret Access Keys into AWS SES (Simple Email Service) passwords.
  This tool is 100% browser code, no requests are made to servers or third
  parties. This page can be saved (<kbd>Ctrl</kbd> + <kbd>S</kbd>) and used
  offline. Grab the source code from the
  <a href="https://github.com/tofran/aws-ses-smtp-credentials">
    github repository
  </a>
  .
</p>

<label>
  Region:
  <select
    name="region"
    bind:value={region}
    class="form-input px-4 py-3 rounded"
  >
    {#each Object.entries(AWS_SES_SMTP_REGIONS) as [id, name]}
      <option value={id}>{id}: {name}</option>
    {/each}
  </select>
</label>

<label>
  Secret access key:
  <input
    type="text"
    bind:value={secretAccessKey}
    class="form-input px-4 py-3 rounded"
  />
</label>

{#if smtpPassword}
  <label>
    Result:
    <input readonly value={smtpPassword} />
    <button on:click={copySmtpPasswordToClipboard}>Copy</button>
  </label>
{/if}

<style>
  main {
    color: rgb(30 41 59);
  }

  input,
  select {
    padding: 0.3em;
    margin-left: 0.2em;
    width: 28em;
  }

  button {
    padding: 0.3em;
  }
</style>
