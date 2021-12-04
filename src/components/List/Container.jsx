import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: 360px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 22px;
    min-height: 760px;
    padding: 14px;
    hidden: scroll;
`

const PaperTitle = styled.h3`
    margin-top: 20px;
    margin-left: 7.5px;
    font-size: 25px;
`

const Container = ({ title, children }) => {
    return (
        <Wrapper>
            <PaperTitle>
                {title}
            </PaperTitle>
            {children}
        </Wrapper>
    )
}

Container.defaultProps = {
    title: "Default List"
}
Container.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Container