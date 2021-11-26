import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListCard = styled.div`
    width: 100px;
    height: 50px;
    background-color: black;
    border-radius: 15px;
    padding: 5px;
`

const CardTitle = styled.h4`
    font-size: 19px;
`

const List = ({ subtitle, buttons }) => {
    <ListCard>
        <CardTitle>
            {subtitle}
        </CardTitle>
        {buttons}
    </ListCard>
}

List.defaultProps = {
    title: "Default List"
}
List.propTypes = {
    subtitle: PropTypes.string.isRequired,
    buttons: PropTypes.node
}

export default List