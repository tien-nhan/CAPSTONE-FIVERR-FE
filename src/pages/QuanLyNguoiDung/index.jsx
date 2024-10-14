import { Button, Form, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
const { Search } = Input;

const Index = () => {
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  const [form] = Form.useForm();

  const {
    quanLyDanhMuc: { layDanhSachNguoiDung, addUser, editUser, deleteUser },
  } = useDispatch();
  const { dsNguoiDung } = useSelector((state) => state.quanLyDanhMuc) || {};

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);

  const onSearch = (tuKhoa) => {
    layDanhSachNguoiDung({ tuKhoa });
  };

  const onAddAdmin = () => {
    setState({ showModal: true, isView: false, isAddAdmin: true });
  };

  const handleOk = (values) => {
    if (state.isView) return;
    form
      .validateFields()
      .then(async (values) => {
        const data = { ...state.editUser, ...values };
        if (state.isAddAdmin) {
          data.role = "ADMIN";
          await addUser(data);
        } else {
          await editUser(data);
        }
        layDanhSachNguoiDung();
        _setState({});
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    _setState({});
    form.resetFields();
  };

  const columns = [
    {
      title: "STT",
      width: "80px",
      render: (_, __, index) => <div>{index + 1}</div>,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "140px",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      width: "200px",
    },
    {
      title: "Quyền",
      dataIndex: "role",
      width: "200px",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Thao tác",
      width: "120px",
      align: "center",
      render: (_, item) => (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <EyeOutlined
            className="cursor-pointer"
            onClick={() =>
              setState({ showModal: true, editUser: item, isView: true })
            }
          />
          <EditOutlined
            className="cursor-pointer"
            onClick={() =>
              setState({ showModal: true, editUser: item, isView: false })
            }
          />
          <DeleteOutlined
            className="cursor-pointer"
            onClick={async () => {
              await deleteUser(item);
              layDanhSachNguoiDung();
            }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (state.editUser) {
      form.setFieldsValue({ ...state.editUser });
    } else {
      form.resetFields();
    }
  }, [state.editUser, state.show]);

  return (
    <div style={{ padding: "16px" }}>
      <h3>Quản lý người dùng</h3>
      <Button className="my-4" onClick={onAddAdmin}>
        Thêm quản trị viên
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table className="my-4" columns={columns} dataSource={dsNguoiDung} />
      <Modal
        title={
          state.isAddAdmin
            ? "Thêm quản trị viên"
            : state.isView
            ? "Chi tiết người dùng"
            : "Sửa người dùng"
        }
        visible={state.showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
      >
        <Form form={form} disabled={state.isView} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="name"
            label="Họ tên"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
