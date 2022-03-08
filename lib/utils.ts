export function cn(...classNames: (string | undefined)[]) {
  return classNames.filter((className) => className).join(' ')
}

export function formatPath(path: string) {
  return path.replace('./assets', '')
}

export function getNameSlug(name: string) {
  return name.toLowerCase().replace(/ /g, '-')
}
