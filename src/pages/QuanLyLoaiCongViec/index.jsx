import { Button, Checkbox, DatePicker, Form, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const { Search } = Input;

const Index = () => {
  const [state, _setState] = useState({});
  const setState = (data) => _setState((pre) => ({ ...pre, ...data }));

  const [form] = Form.useForm();

  const {
    quanLyDanhMuc: {
      layDanhSachLoaiCongViec,
      themLoaiCongViec,
      suaLoaiCongViec,
      xoaLoaiCongViec,
    },
  } = useDispatch();
  const { dsLoaiCongViec } = useSelector((state) => state.quanLyDanhMuc) || {};

  useEffect(() => {
    layDanhSachLoaiCongViec();
  }, []);

  const onSearch = (tuKhoa) => {
    layDanhSachLoaiCongViec({ tuKhoa });
  };

  const onAddNew = () => {
    setState({ showModal: true, isView: false, isAddnew: true });
  };

  const handleOk = () => {
    if (state.isView) return;
    form
      .validateFields()
      .then(async (values) => {
        const data = {
          ...state.editData,
          ...values,
        };
        if (state.isAddnew) {
          await themLoaiCongViec(data);
        } else {
          await suaLoaiCongViec(data);
        }
        layDanhSachLoaiCongViec();
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
      title: "Tên loại công việc",
      dataIndex: "tenLoaiCongViec",
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
              setState({ showModal: true, editData: item, isView: true })
            }
          />
          <EditOutlined
            className="cursor-pointer"
            onClick={() =>
              setState({ showModal: true, editData: item, isView: false })
            }
          />
          <DeleteOutlined
            className="cursor-pointer"
            onClick={async () => {
              await xoaLoaiCongViec(item);
              layDanhSachLoaiCongViec();
            }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (state.editData) {
      form.setFieldsValue({
        ...state.editData,
      });
    } else {
      form.resetFields();
    }
  }, [state.editData, state.show]);

  return (
    <div style={{ padding: "16px" }}>
      <h3>Quản lý loại công việc</h3>
      <Button className="my-4" onClick={onAddNew}>
        Thêm loại công việc
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table className="my-4" columns={columns} dataSource={dsLoaiCongViec} />
      <Modal
        title={
          state.isAddnew
            ? "Thêm loại công việc"
            : state.isView
            ? "Chi tiết loại công việc"
            : "Sửa loại công việc"
        }
        visible={state.showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
      >
        <Form form={form} disabled={state.isView} layout="vertical">
          <Form.Item
            name="tenLoaiCongViec"
            label="Tên loại công việc"
            rules={[{ required: true, message: "Vui lòng mã loại công việc!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
