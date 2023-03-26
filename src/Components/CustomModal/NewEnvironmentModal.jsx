import React, { useState, useEffect } from "react";
import { Modal, Form, Input, message  } from "antd";
import _ from "lodash";
import TypeCodes from "../../utils/Typecodes/ModalTypes"


export default function NewEnvironmentModal({ isModalOpen, setIsModalOpen, updateData, envIndex, isEdit=false, data=[] }) {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const handleOk = async () => {
        try {
            await form.validateFields();
            const values = form.getFieldsValue();
            const tempItem = {
              title: values.title,
              links: data.links || [] 

            }
            const updateType = isEdit ? TypeCodes.modifyEnvironment : TypeCodes.newEnvironment
            updateData(updateType,tempItem,[envIndex])
            setIsModalOpen(false);
            success();
        } catch (error) {
            console.log(error);
        }
        
    };
    const defaultValues = isEdit ? {
      title:data.title,
    } : null
    
    const success = () => {
      const notificationMessage = isEdit ? "Environment modified!" : "Environment created!"
      messageApi.open({
        type: 'success',
        content: notificationMessage,
        duration: 4,
      });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const titleRules = [{ required: true, message: "Please enter a title" }];

    return (
        <Modal
            title={isEdit ? "Modify environment" : "Create environment"}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          {contextHolder}
            <Form form={form} initialValues={defaultValues} >
                <Form.Item label="Title" name="title" rules={titleRules}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
