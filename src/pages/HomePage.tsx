import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout.tsx";
import { Form, Input, Modal, Select, Table, message, DatePicker } from "antd";
import {UnorderedListOutlined, AreaChartOutlined} from '@ant-design/icons'
import axios from "axios";
import Spinner from "../components/Spinner.tsx";
import moment from "moment";
const { RangePicker } = DatePicker;

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState('all')
  const [viewData, setViewData] = useState('table')

  //table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
    },
  ];

  //useeffect hook
  useEffect(() => {
    //getall transaction
    const getAllTransactions = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transactions/get-transaction", {
          userid: user._id,
          frequency,
          selectedDate,
          type,
        });
        setLoading(false);
        setAllTransactions(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        message.error("Fetch Issue");
      }
    };
    getAllTransactions();
  }, [frequency, selectedDate, type]);

  //form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      await axios.post("/transactions/add-transaction", {
        ...values,
        userid: user._id,
      });
      setLoading(false);
      message.success("Transaction Added Successfully");
      setShowModal(false);
    } catch (error) {
      setLoading(false);
      // message.error('Failed to Add Transaction')
    }
  };
  return (
    <Layout>
      <h1>Home Page</h1>
      {loading && <Spinner />}
      <div className="filters">
        <div>
          <h6>Select Frequeny</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>

        <div>
          <h6>Select Type</h6>
          <Select value={type} onChange={(values) => setType(values)}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expanse">Expense</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>
        <div>
          <div className="icon">
            <UnorderedListOutlined/>
            <AreaChartOutlined/>
          </div>
          <button className="add-new" onClick={() => setShowModal(true)}>
            Add New
          </button>
        </div>
      </div>
      <div className="content">
        <Table columns={columns} dataSource={allTransactions} />
        <Modal
          title="Add Transaction"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: "Please input your amount!" }]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: "Type is required" }]}
            >
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expanse">Expanse</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Category is required!" }]}
            >
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="tip">Tip</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Date is required" }]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              label="Reference"
              name="reference"
              rules={[{ required: true, message: "ref required" }]}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "description" }]}
            >
              <Input type="text" />
            </Form.Item>
            <div className="add-transaction-button">
              <button onClick={handleSubmit}>SAVE</button>
            </div>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
}

export default HomePage;
