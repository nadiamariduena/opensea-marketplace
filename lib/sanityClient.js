import sanityClient from '@sanity/client'

export const client = sanityClient({
  // for your project id, go to the sanity
  projectId: '5qnbllu2',
  dataset: 'production',
  apiVersion: '2021-03-25',

  token:
    'sk4VAMSDZUsc1EbuDNiBMo1wq7LigszPsMq7KxjFm2CIIX4CzVVUzipmrlmrLvlbUtRVQmCLMTkW50qxKFbcEgJsx5a7eTLWBuBmvEIqQ7LVnVQtOxVeKBgGA0t6wUdJ0ZIPkcb9guKebC9F2GIShONj0CbIYrv87PHp7Nc1GMySEunSg1p9',
  useCdn: false,
})
