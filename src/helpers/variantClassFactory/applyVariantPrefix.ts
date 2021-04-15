export function applyVariantPrefix(className: string, prefix?: string) {
  return prefix ? `${prefix}-${className}` : className
}
