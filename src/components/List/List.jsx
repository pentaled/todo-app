import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
import ListItem from './ListItem'

const Wrapper = styled.div`
    margin: 20px 10px;
`
const List = ({ data }) => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        setDataList(data)
    }, [data])

    const actionComplete = (id) => {
        const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)
    }

    const actionUpdateItem = (id, description) => {
        const List = [...dataList]
        List.map((item) => {
            if (item.id === id) {
                item.description = description
            }
            return item
        })

        // setDataList(dataList)
    }

    return (
        <Wrapper>
            {dataList.length > 0 ? (
                dataList.map((item) => {
                    return <ListItem
                        key={item.id}
                        item={item}
                        actionComplete={actionComplete}
                        actionUpdateItem={actionUpdateItem} />
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
        description: PropTypes.string,
        status: PropTypes.string.isRequired
    }))
}

export default List