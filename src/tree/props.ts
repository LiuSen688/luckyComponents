export const props1 = {
    menuList: {
        type: Array,
        default: () => ([
            {
                title: '菜单1',
                children: [
                    {
                        title: '菜单1-1',
                        children: [
                            { title: '菜单1-1-1' },
                            { title: '菜单1-1-2' },
                            { title: '菜单1-1-3' }
                        ]
                    },
                    { title: '菜单1-2' },
                    { title: '菜单1-3' }
                ]
            },
            {
                title: '菜单2',
                children: [
                    {
                        title: '菜单2-1',
                        children: [
                            { title: '菜单2-1-1' },
                            { title: '菜单2-1-2' },
                            { title: '菜单2-1-3' }
                        ]
                    },
                    { title: '菜单1-2' },
                    { title: '菜单1-3' }
                ]
            },
            { title: '菜单3' }
        ]
        )
    }

}
