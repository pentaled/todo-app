import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Empty, Button } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import ListItem from './ListItem'
import TodoForm from '../Form/TodoForm'

const Wrapper = styled.div`
    margin: 20px 10px;
`
const ButtonAdd = styled(Button)`
    position: absolute;
    top: 30px;
    right: 10px;
`

const List = ({ data }) => {
    const [dataList, setDataList] = useState([]);
    const [showForm, , setShowForm] = useState(false);

    useEffect(() => {
        setDataList(data)
    }, [data])

    const actionComplete = (id) => {
        const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)
    }

    const actionDelete = (id) => {
        const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)
    }

    const actionUpdateItem = (id, description) => {
        // looping each item.
        dataList.map((item) => {
            // find if the id match with the item id 
            if (id === item.id) {
                // then we will update the description 
                item.description = description
            }
            // else do nothing
            return item
        })
    }

    const actionCreateItem = () => { }
    // 1. when I clicked add button, I will see the form and the icon turn into <CloseOutlined/>
    // 2. when I click on the close button, I will see the form disapper the icon turn back to <PlusOutlined />
    // 3. I want see a placeholder in the inputfield showing "Add todo item"
    // 4. Add 2 test cases for #1 and #2 in `List.test.jsx`.
    return (
        <Wrapper>
            <ButtonAdd type="primary" shape="circle" icon={<PlusOutlined />} size={"large"} />
            <Wrapper>
                <TodoForm handleSubmit={actionCreateItem} />
            </Wrapper>
            {dataList.length > 0 ? (
                dataList.map((item) => {
                    return <ListItem
                        key={item.id}
                        item={item}
                        actionDelete={actionDelete}
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