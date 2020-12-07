/* 用户模块 */
export default {
  id: "02",
  name: "用户模块",
  defaultLink: "/user_manage",
  children: [
    {
      id: "0201",
      name: "全部",
      href: "/user_manage/all/list",
      children: [
        {
          id: "0201",
          name: "用户列表",
          href: "/user_manage/all/list"
        },
        {
          id: "0201",
          name: "管理列表",
          href: "/user_manage/manage/list"
        }
      ]
    }
  ]
};
