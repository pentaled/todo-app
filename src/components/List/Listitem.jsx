import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const Wrapper  = styled.div`
    margin-bottom: 20px;
`
const ListItem = ({ item }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [datadone, setDataDone] = useState([item.status]);

    const handleDelete = (id) => {
        console.log('handleDelete', id)
    };

    const handleEdit = (id) => {
        console.log('handleDelete', id, showEdit)
        setShowEdit(true)
    };

    const handleComplete = (id) => {
        console.log('handleDelete', id, datadone)
        setDataDone("DONE")
    };
    return (
        <Wrapper>
            <Card
                style={{ width: 300 }}
                actions={[
                    <DeleteOutlined key="delete"onClick={() => handleDelete(item.id)}/>,
                    <EditOutlined key="edit"onClick={() => handleEdit(item.id)}/>,
                    <CheckCircleOutlined key="check"onClick={() => handleComplete(item.id)}/>
                ]}
            >
                <Title level={5}>{item.description}</Title>
            </Card>
        </Wrapper>
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