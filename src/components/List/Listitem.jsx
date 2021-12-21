import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography, Button, Form, Input } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography
const StyledCard = styled(Card)`
    background-color: #FDF8F5;
    margin-bottom: 20px;
`
const ListItem = ({ item, actionComplete, actionUpdateItem }) => {
    const [form] = Form.useForm();
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = (id) => {
        console.log('handleDelete', id)
    };

    const handleEdit = (id) => {
        console.log('handleDelete', id, showEdit)
        setShowEdit(true)
    };

    const handleSubmit = (values) => {
        actionUpdateItem(values.id, values.description)
        setShowEdit(false)
    }

    return (
        <StyledCard
            data-testid="list-item"
            style={{ width: 300 }}
            actions={[
                <DeleteOutlined key="delete" onClick={() => handleDelete(item.id)} />,
                <EditOutlined key="edit" onClick={() => handleEdit(item.id)} />,
                <CheckCircleOutlined data-testid={`btn-checked-${item.id}`} key="check" onClick={() => actionComplete(item.id)} />
            ]}
        >
            {showEdit ? (
                <Form
                    name="updateForm"
                    layout="inline"
                    form={form}
                    onFinish={handleSubmit}
                    initialValues={{
                        id: item.id,
                        description: item.description,
                    }}
                >
                    <Form.Item
                        name="description"
                        style={{
                            width: 'calc(100% - 85px)',
                            margin: 0
                        }}
                        rules={[
                            {
                                required: true, message: 'Enter a todo.'
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            onChange={(e) =>
                                form.setFieldsValue({ description: e.target.value })
                            }
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            SAVE
                        </Button>
                    </Form.Item>
                    <Form.Item
                        name="id"
                        style={{ margin: 0 }}
                    >
                        <Input
                            type="hidden"
                        />
                    </Form.Item>
                </Form>
            ) : (
                <Title level={5}>{item.description}</Title>
            )}
        </StyledCard>
    )
}

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.string.isRequired
    }),
    actionComplete: PropTypes.func.isRequired,
    actionUpdateItem: PropTypes.func.isRequired,
}

export default ListItem