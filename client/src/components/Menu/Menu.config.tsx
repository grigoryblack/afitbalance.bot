import {
  UserOutlined,
  CalendarOutlined,
  TableOutlined,
} from "@ant-design/icons";

export const TABS = [
  {
    key: "1",
    icon: <UserOutlined />,
    route: "/profile",
  },
  {
    key: "2",
    icon: <CalendarOutlined />,
    route: "/calendar",
  },
  {
    key: "3",
    icon: <TableOutlined />,
    route: "/table",
  },
];
