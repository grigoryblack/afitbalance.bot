import { Form, Input, Button, message, Checkbox } from "antd";
import InputMask from "react-input-mask";
import styles from "./UserPage.module.scss";
import PoliticModal from "../../components/Modals/ConfitmPolitic/PoliticModal.tsx";
import { openModal } from "../../redux/modal/modalSlice.ts";
import { useDispatch } from "react-redux";

const UserPageView = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!values.agree)
      return message.error(
        "Вы должны согласиться с Политикой конфиденциальности!",
      );
    console.log("Received values: ", values);
    message.success("Форма отправлена");
  };

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.user__wrapper}>
      <h1>Данные пользователя</h1>
      <Form
        className={styles.container}
        form={form}
        name="user_form"
        initialValues={{ agree: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Пожалуйста, введите свой username!" },
          ]}
        >
          <Input size="large" placeholder="Введите username" />
        </Form.Item>

        <Form.Item
          label="Имя"
          name="first_name"
          rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
        >
          <Input size="large" placeholder="Введите свое имя" />
        </Form.Item>

        <Form.Item label="Фамилия" name="last_name">
          <Input size="large" placeholder="Введите свою фамилию" />
        </Form.Item>

        <Form.Item
          label="Номер телефона"
          name="phone"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите свой номер телефона!",
            },
          ]}
        >
          <InputMask mask="+7 (999) 999-99-99">
            {(inputProps) => (
              <Input
                size="large"
                {...inputProps}
                placeholder="+7 (___) ___-__-__"
              />
            )}
          </InputMask>
        </Form.Item>

        <Form.Item name="agree" valuePropName="checked">
          <Checkbox defaultChecked={true}>
            Я согласен с
            <a className={styles.politic} onClick={handleOpenModal}>
              Политикой конфиденциальности
            </a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Отправить
          </Button>
        </Form.Item>
      </Form>

      <PoliticModal />
    </div>
  );
};

export default UserPageView;
