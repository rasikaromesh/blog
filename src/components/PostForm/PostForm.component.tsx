import './PostFrom.styles.scss'
import Form, {Input} from "react-form-component";
import {useState} from "react";

export const PostFormComponent = () => {
    const [fields, setFields] = useState(['header']);
    const [mandatory, setMandatory] = useState(['header'])
    return (
        <Form className='post-form' fields={fields} mandatory={mandatory}>
            <Input name='header' label="Title"/>
        </Form>
    );
};
