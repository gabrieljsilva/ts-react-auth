import { applyVariantPrefix } from './applyVariantPrefix'

export function getVariant(
  options: string[],
  defaultVariant: string,
  selected?: string,
  prefix?: string,
) {
  return applyVariantPrefix(
    selected && options.includes(selected) ? selected : defaultVariant,
    prefix,
  )
}
