import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const Wrapper  = styled.div`
    margin-bottom: 20px;
`
const ListItem = ({ item }) => {
    return (
        <Wrapper>
            <Card
                style={{ width: 300 }}
                actions={[
                    <DeleteOutlined key="delete"/>,
                    <EditOutlined key="edit"/>,
                    <CheckCircleOutlined key="check"/>
                ]}
            >
                {item.description}
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