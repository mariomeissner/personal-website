function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getPageTitle(pathname) {
  let pagetitle = pathname.split('/')[1]
  if (pagetitle === '') {
    pagetitle = 'Home'
  }
  return capitalizeFirstLetter(pagetitle)
}
