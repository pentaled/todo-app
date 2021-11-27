import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

// Create a margin for each card to have margin-bottom of 20px using styled-components

const ListItem = ({ item }) => {
    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <DeleteOutlined key="delete" />,
                <EditOutlined key="edit" />,
                <CheckCircleOutlined key="check" />,
            ]}
        >
            {item.description}
        </Card>
    )
}

ListItem.propType = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        description:PropTypes.string,
        status:PropTypes.string.isRequired,
    })
}

export default ListItem