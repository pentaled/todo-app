import PropTypes from 'prop-types'
import { Button, Form, Input } from 'antd'


const TodoForm = ({ id, handleSubmit, initialValues, children }) => {
    const [form] = Form.useForm();
    return (
        <Form
            data-testid={`todo-form-${id}`}
            name="todoForm"
            layout="inline"
            form={form}
            onFinish={handleSubmit}
            initialValues={initialValues}               
        >
            <Form.Item
                    name="description"
                    style={{
                        width: 'calc(100% - 83px)',
                        margin: 0
                    }}
                    rules={[
                        {
                        required: true, message: 'Enter a todo.'
                        },
                    ]}
            >
                <Input
                data-testid={`input-description-${id}`}
                    type="text"
                    placeholder="Add todo item"
                    onChange={ (e) =>
                        form.setFieldsValue({ description: e.target.value })
                    }
                />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        SAVE
                    </Button>
                </Form.Item>
                {children}
            </Form>   
        )
}

TodoForm.defaultProps = {
    id: 'new',
    initialValues: {}
}

TodoForm.propTypes = {
    id: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string
    }),
    children: PropTypes.node
}


export default TodoForm