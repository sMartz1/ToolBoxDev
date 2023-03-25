import React, { useState, useEffect } from "react";
import { Modal, Form, Input, message  } from "antd";
import _ from "lodash";
import TypeCodes from "../../utils/Typecodes/ModalTypes"


export default function NewLinkModal({ isModalOpen, setIsModalOpen, updateData,linkIndex, envIndex, isEdit=false, data=null }) {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const handleOk = async () => {
        try {
            await form.validateFields();
            const values = form.getFieldsValue();
            const tempItem = {
              title: values.title,
              url:values.url,
              user:{
                username:values.user,
                password:values.password
              }
            }
            const updateType = isEdit ? TypeCodes.modifyLink : TypeCodes.newLink
            updateData(updateType,tempItem,[envIndex,linkIndex])
            setIsModalOpen(false);
            success();
            console.log(values);
        } catch (error) {
            console.log(error);
        }
        
    };
    console.log("DATA",data)
    const defaultValues = isEdit ? {
      title:data.title,
      url:_.get(data,'url'),
      user:_.get(data,'user.username'),
      password: _.get(data,'user.password')
    } : null
    
    const success = () => {
      const notificationMessage = isEdit ? "Shortcut modified!" : "New shortcut created!"
      messageApi.open({
        type: 'success',
        content: notificationMessage,
        duration: 3,
      });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const titleRules = [{ required: true, message: "Please enter a title" }];
    const linkRules = [{ required: true, message: "Please enter a link" }];
    
    console.log("IS EDIT",isEdit)
    return (
        <Modal
            title={isEdit ? "Modify shortcut" : "Create new shortcut"}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          {contextHolder}
            <Form form={form} initialValues={defaultValues} >
                <Form.Item label="Title" name="title" rules={titleRules}>
                    <Input />
                </Form.Item>
                <Form.Item label="Link" name="url" rules={linkRules}>
                    <Input />
                </Form.Item>
                <Form.Item label="Username" name="user" >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                   
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    );
}
