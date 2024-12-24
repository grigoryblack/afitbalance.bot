import { Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import styles from "../../App.module.scss";
import { Avatar } from "antd";

const MainHeader = () => {
  return (
    <Header className={styles.header}>
      <h1>A.Fitbalance</h1>
      <Avatar size="large" icon={<UserOutlined />} />
    </Header>
  );
};

export default MainHeader;
