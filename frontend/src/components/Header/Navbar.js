import { Fragment, useState } from "react";
import { Menu, Button } from "antd";
import {
  HomeOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { DisplayModal } from "../modal/DisplayModal";
import { CheckoutButton } from "../stripe/CheckoutButton";

export const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [showModal, setShowModal] = useState(false);

  const auth = useSelector((state) => state.auth);
  const { isLoading, data } = auth;

  const onClickHandler = (e) => {
    setCurrent((prevState) => e.key);
  };

  const onClickModalShow = () => {
    setShowModal((prevState) => true);
  };

  const onCancelHandler = () => {
    setShowModal((prevState) => false);
  };

  return (
    <Menu selectedKeys={[current]} mode="horizontal" onClick={onClickHandler}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Feedback Collector</Link>
      </Menu.Item>

      {isLoading ? (
        <Fragment></Fragment>
      ) : data && data._id ? (
        <Fragment>
          <Menu.Item key="payment">
            <CheckoutButton />
          </Menu.Item>
          <Menu.Item className="float-right">Welcome {data.name}</Menu.Item>
          <Menu.Item className="float-right" key="logout">
            <Button
              type="link"
              icon={<UserDeleteOutlined />}
              style={{ color: "black" }}
              href="/api/google/logout"
            >
              Logout
            </Button>
          </Menu.Item>
          <Menu.Item key="survey">
            <Link to="/surveys">Your Surveys</Link>
          </Menu.Item>
          <Menu.Item>Your Credits: {data.credits}</Menu.Item>
        </Fragment>
      ) : (
        <Fragment>
          <DisplayModal
            showModal={showModal}
            onCancelHandler={onCancelHandler}
          />
          <Menu.Item
            key="login"
            icon={<UserOutlined />}
            className="float-right"
            onClick={onClickModalShow}
          >
            SignIn
          </Menu.Item>
        </Fragment>
      )}
    </Menu>
  );
};
