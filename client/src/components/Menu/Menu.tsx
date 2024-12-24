import styles from "../../App.module.scss";
import { Button } from "antd";
import { TABS } from "./Menu.config.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("1");

  const changeTab = (key: string, route: string) => {
    setActiveKey(key);
    navigate(route);
  };

  return (
    <div className={styles.menu__wrapper}>
      {TABS.map(({ key, icon, route }) => (
        <Button
          key={key}
          onClick={() => changeTab(key, route)}
          className={`${styles.label} ${key === activeKey ? styles.active : ""}`}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
};

export default Menu;
