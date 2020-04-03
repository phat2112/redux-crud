import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Table, Form, Modal, Input,Button} from 'antd'
import {connect} from 'react-redux';
import ToDoPopUp from '../ToDoPopup';
import {DoSelectors} from '../../Stores/ListDo/Selectors'
import {DoActions} from '../../Stores/ListDo/Actions'



const ToDoPage = ({toDoList, removeToDo, updateToDo}) => {
    const [showModal, setShowModal] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [idUpdate, setIdUpdate] = useState(0)
    const dataSource = [
        {
          key: '1',
          do: 'Mike',
          finish: '24h',
        },
        {
          key: '2',
          do: 'John',
          finish: '12h',
        },
      ];
      
      const columns = [
        {
          title: 'To Do',
          dataIndex: 'do',
          key: 'do',
        },
        {
          title: 'Time to finish',
          dataIndex: 'finish',
          key: 'finish',
        },
       
      ]
      const handleTogglePopup = idDo => {
        setShowEdit(true)
        setIdUpdate(idDo)
      }
      const onUpdate = (values) => {
        setShowEdit(false);
        console.log("Success:", values);
        if(values){
            const data = {
                id: idUpdate , 
                do: values.toDo,
                finish: values.finish,
            }
            console.log(data)
            updateToDo(data)
        }
      };
    return (
        <div>
           {toDoList.length > 0 ? ( 
               <table>
                   <thead>
                       <tr>
                           <td>to do</td>
                           <td>finish</td>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           toDoList.map((item, index) => (
                               <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.do}</td>
                                    <td>{item.finish}</td>
                                    <button onClick={() => handleTogglePopup(item.id)}>Edit</button>
                                    <button onClick={() => {removeToDo(item.id)}}>Delete</button>
                               </tr>
                           ))
                       }
                   </tbody>
               </table>
           ) : null}
           <button onClick={() => {setShowModal(true)}}>Add To Do</button>
           <ToDoPopUp showModal={showModal} setShowModal={setShowModal}/>
           <Modal
                title="Basic Modal"
                visible={showEdit}
                footer={null}
            >
          <Form name="basic" onFinish={onUpdate}>
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
                Update
            </Button>
          </Form>
        </Modal>
        </div>
    );
};

ToDoPage.propTypes = {
    
};
const mapStateToProps = state => ({
    toDoList: DoSelectors.getTodoList(state)
})
const mapDispatchToProps = dispatch => ({
    removeToDo: idValue => dispatch(DoActions.removeToDo(idValue)),
    updateToDo: updateValue => dispatch(DoActions.updateToDo(updateValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);