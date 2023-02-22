export const menuProps = {
  // 默认打开的item
  defaultActive: {
    type: String,
    default: '',
  },
  defaultOpeneds: {
    type: Array<string>,
    default: [],
  },
  // 打开方式
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  backgroundColor: {
    type: String,
    default: 'white',
  },
}

export const menuEmits = {
  close: (index: string) => Boolean,
  open: (index: string) => Boolean,
}

export const menuItemProps = {
  index: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
}

export const menuItemEmits = {
  click: (item) => Boolean,
}

export const subMenuProps = {
  index: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
}

export const subMenuEmits = {
  click: (item) => Boolean,
}

export type MenuProvider = {
  openedMenus: string[]
  activeIndex: Ref<string>
  currentColor: Ref<string>
  openMenu: (index: string) => void
  closeMenu: (index: string) => void
}
