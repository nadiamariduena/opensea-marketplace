import sanityClient from '@sanity/client'

export const client = sanityClient({
  // for your project id, go to the sanity
  projectId: '5qnbllu2',
  dataset: 'production',
  apiVersion: '2021-03-25',

  token:
    'skTfrwARXrAbJMnvDcuj1ImV1E5QQ7bNhCKdUyMujYwjYv8fDuwNoTIrHNfZLHOJftlUo091166wEXyCi7aRMUbHy4seqm4MYt0NtIQcUog5YHdXJw8LgEERo9Sib9KS86SZBmAR8eWdW9tm7aKIPJszGLzvIPU0UgusUZfBNl8TUn0lJcZR',
  useCdn: false,
})
