import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography, Button } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography
const StyledCard = styled(Card)`
    background-color: #FDF8F5;
    margin-bottom: 20px;
`
const ListItem = ({ item, actionComplete, actionUpdateItem }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = (id) => {
        console.log('handleDelete', id)
    };

    const handleEdit = (id) => {
        console.log('handleDelete', id, showEdit)
        setShowEdit(true)
    };

    const handleSave = () => {
        actionUpdateItem()
        setShowEdit(false)
    }

    return (
        <StyledCard
            data-testid="list-item"
            style={{ width: 300 }}
            actions={[
                <DeleteOutlined key="delete" onClick={() => handleDelete(item.id)} />,
                <EditOutlined key="edit" onClick={() => handleEdit(item.id)} />,
                <CheckCircleOutlined key="check" onClick={() => actionComplete(item.id)} />
            ]}
        >
            {showEdit ? (
                <Button onClick={handleSave}>Save</Button>
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