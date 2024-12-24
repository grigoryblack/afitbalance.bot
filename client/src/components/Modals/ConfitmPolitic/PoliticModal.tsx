import styles from "./PoliticModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modal/modalSlice.ts";
import { Button, Modal } from "antd";

const PoliticModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
      <Modal
          title="Модальное окно"
          visible={isOpen}
          onCancel={handleClose}
          footer={[
              <Button key="close" onClick={handleClose}>
                  Закрыть
              </Button>,
          ]}
      >
          <h3>Политика конфиденциальности</h3>
          <p>
              Мы, [Название вашей компании/платформы], обязуемся защищать вашу личную информацию и соблюдать законы и
              нормативные акты в отношении конфиденциальности данных. Настоящая Политика конфиденциальности объясняет,
              как мы собираем, используем, храним и защищаем ваши личные данные, включая ваш номер телефона, в процессе
              записи на тренировку.
          </p>
          <h4>Сбор личных данных</h4>
          <p>Для того чтобы записаться на тренировку, вам может потребоваться предоставить следующие данные:</p>
          <ul>
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
          </ul>
          <h4>Цели использования данных</h4>
          <p>Ваши данные используются для записи на тренировку, отправки напоминаний и обратной связи.</p>
          <h4>Ваши права</h4>
          <p>Вы имеете право на доступ, исправление и удаление своих данных.</p>
      </Modal>
  );
};

export default PoliticModal;
