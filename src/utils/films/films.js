import placeholder from './img/placeholder.svg'

export const checkFilmPoster = (url) => {
  const pos = url.lastIndexOf('no-poster');

  if (pos !== -1) {
    return placeholder
  }

  return url
}
