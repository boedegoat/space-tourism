import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export function cn(...classNames: (string | undefined)[]) {
  return classNames.filter((className) => className).join(' ')
}

export function formatPath(path: string) {
  return path.replace('./assets', '')
}

export function getNameSlug(name: string) {
  return name.toLowerCase().replace(/ /g, '-')
}

export function getData({
  sources,
  params,
  slug,
}: {
  sources: any[]
  params: ParsedUrlQuery | undefined
  slug: string
}) {
  const currentSlug = params![slug] as string
  const data = sources.find((source) => getNameSlug(source.name) == currentSlug)
  const slugs = sources.map((source) => getNameSlug(source.name))
  return { data, slugs, currentSlug }
}

export function getPaths({ sources, slug }: { sources: any[]; slug: string }) {
  return sources.map((source) => ({
    params: {
      [slug]: getNameSlug(source.name),
    },
  }))
}

export function getCurrentPath(router: NextRouter) {
  return /(\/\w*)\/*/g.exec(router.pathname)?.[1]
}
