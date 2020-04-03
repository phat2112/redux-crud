import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button } from "antd";
import {connect} from 'react-redux';
import {DoActions} from '../../Stores/ListDo/Actions'
import {DoSelectors} from '../../Stores/ListDo/Selectors'

const ToDoPopUp = ({ showModal, setShowModal, addToDo }) => {
  const [count, setCount] = useState(0)
  const onFinish = (values) => {
    setShowModal(false);
    console.log("Success:", values);
    if(values){
        const data = {
            id: count , 
            do: values.toDo,
            finish: values.finish,
        }
        addToDo(data)
    }
  };
  useEffect(() => {
      if(showModal){
          setCount(count + 1)
      }
  }, [showModal])
  return (
    <Modal title="Basic Modal" visible={showModal} footer={null}>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="To do"
          name="toDo"
          rules={[{ required: true, message: "Please input your fields" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Finish"
          name="finish"
          rules={[{ required: true, message: "Please input your fields" }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

ToDoPopUp.propTypes = {};
const mapStateToProps = state => ({
    toDoList: DoSelectors.getTodoList(state)
})
const mapDispatchToProps = dispatch => ({
    addToDo: addValue => dispatch(DoActions.addToDo(addValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPopUp);
