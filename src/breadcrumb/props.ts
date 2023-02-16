type ITo = {
  path: string
}
export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/',
  },
}
export const breadcrumbItemProps = {
  to: {
    type: Object as () => ITo,
  },
  replace: {
    type: Boolean,
    default: false,
  },
}
