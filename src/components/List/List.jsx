import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
import ListItem from './ListItem'

const Wrapper = styled.div`
    margin: 20px 10px;
`

const List = ({ data }) => {
    return (
        <Wrapper>
            {data.length > 0? (
                data.map((item) => {
                    return <ListItem key={item.id} item={item} />
                })
            ) : (
                <Empty />
            )} 
        </Wrapper>
    )
}

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description:PropTypes.string,
        status:PropTypes.string.isRequired,
    }))
}

export default List