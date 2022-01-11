import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Empty, Button } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import TodoForm from '../Form/TodoForm';

const Wrapper = styled.div`
    margin: 20px 10px;
`

const ButtonAdd = styled(Button)`
    position: absolute;
    top: 30px;
    right: 30px;
`

const ButtonClose = styled(Button)`
    position: absolute;
    top: 30px;
    right: 30px;
`
const List = ({ data }) => {
    const [dataList, setDataList] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setDataList(data)
    }, [data])
    const actionComplete = (id) => {const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)  
    }

    const actionDelete = (id) => {const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)
    }

    const actionUpdateItem = (id, description) => {
        dataList.map((item) => {//update this coon
            if (id === item.id) {
                item.description = description 
            }
            return item
        })
    }

    const actionCreateItem = () => {
        setShowForm(true)
    
    // 1. when I clicked add button, I will see the form and the icon turn into <CloseOutlined/>

    // 2. when I click on the close button, I will see the form disapper the icon turn back to <PlusOutlined />
    // 3. Add 2 test cases for #1 and #2 in `List.test.jsx`.
        
    }

    return (
        <Wrapper>
            <ButtonAdd data-testid={`button-close`} type="primary" shape="circle" icon={<PlusOutlined />} size={"large"} />                            
            {showForm? (
                <Wrapper>
                    <ButtonClose data-testid={`button-close`} type="primary" shape="circle" icon={<CloseOutlined/>} size={"large"} onClick={actionCreateItem()}/>
                    
                </Wrapper>
            ) : (
                <TodoForm handleSubmit={actionCreateItem}/>
            )}

            
            {dataList.length > 0? (
                dataList.map((item) => {
                    return <ListItem key={item.id} item={item} actionComplete={actionComplete} actionUpdateItem={actionUpdateItem} actionDelete={actionDelete}/>
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