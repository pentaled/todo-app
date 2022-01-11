import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography, Form, Input } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import TodoForm from '../Form/TodoForm'

const { Title } = Typography
const StyledCard = styled(Card)`
    background-color: #FDF8F5;
    margin-bottom: 20px;
`
const ListItem = ({ item, actionComplete, actionUpdateItem, actionDelete }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEdit = (id) => {
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
                <DeleteOutlined data-testid={`btn-deleted-${item.id}`} key="delete" onClick={() => actionDelete(item.id)} />,
                <EditOutlined data-testid={`btn-edit-${item.id}`} key="edit" onClick={() => handleEdit(item.id)} />,
                <CheckCircleOutlined data-testid={`btn-checked-${item.id}`} key="check" onClick={() => actionComplete(item.id)} />
            ]}
        >
            {showEdit ? (
                <TodoForm
                    id={item.id}
                    handleSubmit={handleSubmit}
                    initialValues={{
                        id: item.id,
                        description: item.description,
                    }}>
                    <Form.Item
                        name="id"
                        style={{ margin: 0 }}
                    >
                        <Input
                            type="hidden"
                        />
                    </Form.Item>
                </TodoForm>
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
    actionDelete: PropTypes.func.isRequired,
}

export default ListItem