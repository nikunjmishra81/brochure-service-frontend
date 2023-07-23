const projectName = 'bonial- brochure search'
const cookiesUserToken = '_user_token'

export const handleErrorInitialProps = (res, error) => {
  console.info('[FROM ERROR HANDLER]: ', error.message)
  console.error(error)
  return { initData: {} }
}
