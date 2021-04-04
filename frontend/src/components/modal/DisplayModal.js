import { Modal } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

export const DisplayModal = ({ showModal, onCancelHandler }) => {
  return (
    <Modal
      title={"SignIn"}
      visible={showModal}
      onCancel={() => onCancelHandler()}
    >
      <a className="btn btn-danger" href="/api/google">
        <GoogleOutlined /> Login with Google
      </a>
    </Modal>
  );
};
