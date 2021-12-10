import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography
const StyledCard  = styled(Card)`
    background-color: #FDF8F5;
    margin-bottom: 20px;
`
const ListItem = ({ item }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = (id) => {
        console.log('handleDelete', id)
    }
    
    const handleEdit = (id) => {
        // #3: change showEdit to true
        console.log('handleEdit', id, showEdit)
    }
    
    const handleComplete = (id) => {
        // #2: change status to "DONE"
        console.log('handleComplete', id)
    }

    return (
        <StyledCard
            style={{ width: 300 }}
            actions={[
                <DeleteOutlined key="delete" onClick={() => handleDelete(item.id)}/>,
                <EditOutlined key="edit" onClick={() => handleEdit(item.id)}/>,
                <CheckCircleOutlined key="check" onClick={() => handleComplete(item.id)}/>
            ]}
        >
            <Title level={5}>{ item.description }</Title>
        </StyledCard>
    )
}

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.string.isRequired
    })
}

export default ListItem