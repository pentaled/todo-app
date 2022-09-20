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
        console.log(id)
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

    const actionCreateItem = (description) => {
        const locate = data.length + 4101
        const text = locate.toString();
        data.push({"id": text, "description": description.description, "status": 'NEW'})
        setShowForm(false)
    }

    const actionOpenButton = () => {
        setShowForm(true)
    }

    const actionCloseButton = () => {
        setShowForm(false)
    }
    
    return (
        <Wrapper>                           
            {showForm? (
                <Wrapper>
                    <ButtonClose data-testid={`button-close`} type="primary" shape="circle" icon={<CloseOutlined/>} size={"large"} onClick={actionCloseButton} />
                    <TodoForm data-testid={`update-form`} handleSubmit={actionCreateItem}/>
                </Wrapper>
            ) : (
                <ButtonAdd data-testid={`button-open`} type="primary" shape="circle" icon={<PlusOutlined />} size={"large"} onClick={actionOpenButton}/> 
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