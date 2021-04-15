export function applyVariants(...classes: string[]) {
  return classes.toString().replaceAll(',', ' ')
}
