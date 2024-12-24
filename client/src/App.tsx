import { ConfigProvider } from "antd";
import { theme } from "./assets/Styles/theme.ts";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import MainHeader from "./components/Header/Header.tsx";
import Menu from "./components/Menu/Menu.tsx";

const UserPage = lazy(() => import("./pages/UserPage/index.tsx"));

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <div className={styles.main__wrapper}>
        <MainHeader />

        <Routes>
          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserPage />
              </Suspense>
            }
          />
        </Routes>

        <Menu />
      </div>
    </ConfigProvider>
  );
};

export default App;
