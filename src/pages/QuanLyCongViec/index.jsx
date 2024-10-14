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
      layDanhSachCongViec,
      themCongViec,
      suaCongViec,
      xoaCongViec,
    },
  } = useDispatch();
  const { dsCongViec } = useSelector((state) => state.quanLyDanhMuc) || {};

  useEffect(() => {
    layDanhSachCongViec();
  }, []);

  const onSearch = (tuKhoa) => {
    layDanhSachCongViec({ tuKhoa });
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
          ngayThue: values.ngayThue && dayjs(values.ngayThue),
        };
        if (state.isAddnew) {
          await themCongViec(data);
        } else {
          await suaCongViec(data);
        }
        layDanhSachCongViec();
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
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      width: "140px",
      render: (text) => (
        <div
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "140px",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      width: "300px",
      render: (text) => (
        <div
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "300px",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      width: "100px",
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      width: "100px",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "140px",
      render: (item) => (
        <img src={item} style={{ width: "4rem", height: "3rem" }} />
      ),
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
              await xoaCongViec(item);
              layDanhSachCongViec();
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
        ngayThue: state.editData.ngayThue && dayjs(state.editData.ngayThue),
      });
    } else {
      form.resetFields();
    }
  }, [state.editData, state.show]);

  return (
    <div style={{ padding: "16px" }}>
      <h3>Quản lý công việc</h3>
      <Button className="my-4" onClick={onAddNew}>
        Thêm công việc
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table className="my-4" columns={columns} dataSource={dsCongViec} />
      <Modal
        title={
          state.isAddnew
            ? "Thêm công việc"
            : state.isView
            ? "Chi tiết công việc"
            : "Sửa công việc"
        }
        visible={state.showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
      >
        <Form form={form} disabled={state.isView} layout="vertical">
          <Form.Item
            name="tenCongViec"
            label="Tên công việc"
            rules={[{ required: true, message: "Vui lòng tên công việc!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="danhGia" label="Đánh giá">
            <Input />
          </Form.Item>
          <Form.Item name="giaTien" label="Giá tiền">
            <Input />
          </Form.Item>
          <Form.Item name="nguoiTao" label="Người tạo">
            <Input />
          </Form.Item>
          <Form.Item name="moTa" label="Mô tả">
            <Input />
          </Form.Item>
          <Form.Item
            name="maChiTietLoaiCongViec"
            label="Mã chi tiết loại công việc"
          >
            <Input />
          </Form.Item>
          <Form.Item name="moTaNgan" label="Mô tả ngắn">
            <Input />
          </Form.Item>
          <Form.Item name="saoCongViec" label="Sao công việc">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
