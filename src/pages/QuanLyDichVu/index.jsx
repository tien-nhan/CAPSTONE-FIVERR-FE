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
    quanLyDanhMuc: { layDanhSachDichVu, themDichVu, suaDichVu, xoaDichVu },
  } = useDispatch();
  const { dsDichVu } = useSelector((state) => state.quanLyDanhMuc) || {};

  useEffect(() => {
    layDanhSachDichVu();
  }, []);

  const onSearch = (tuKhoa) => {
    layDanhSachDichVu({ tuKhoa });
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
          await themDichVu(data);
        } else {
          await suaDichVu(data);
        }
        layDanhSachDichVu();
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
      title: "Mã công việc",
      dataIndex: "maCongViec",
      width: "140px",
    },
    {
      title: "Mã người thuê",
      dataIndex: "maNguoiThue",
      width: "200px",
    },
    {
      title: "Ngày thuê",
      dataIndex: "ngayThue",
      width: "200px",
      render: (val) => val && dayjs(val).format("DD/MM/YYYY"),
    },
    {
      title: "Trạng thái",
      dataIndex: "hoanThanh",
      render: (trangThai) => (trangThai ? "Hoàn thành" : "Chưa hoàn thành"),
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
      });
    } else {
      form.resetFields();
    }
  }, [state.editData, state.show]);

  return (
    <div style={{ padding: "16px" }}>
      <h3>Quản lý dịch vụ</h3>
      <Button className="my-4" onClick={onAddNew}>
        Thêm dịch vụ
      </Button>
      <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      <Table className="my-4" columns={columns} dataSource={dsDichVu} />
      <Modal
        title={
          state.isAddnew
            ? "Thêm dịch vụ"
            : state.isView
            ? "Chi tiết dịch vụ"
            : "Sửa dịch vụ"
        }
        visible={state.showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
      >
        <Form form={form} disabled={state.isView} layout="vertical">
          <Form.Item
            name="tenDichVu"
            label="Tên dịch vụ"
            rules={[{ required: true, message: "Vui lòng mã dịch vụ!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
