export function cn(...classNames: (string | undefined)[]) {
  return classNames.filter((className) => className).join(' ')
}

export function formatPath(path: string) {
  return path.replace('./assets', '')
}
