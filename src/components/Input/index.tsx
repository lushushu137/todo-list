import * as React from 'react';
import { useState, useRef } from 'react';
import './index.css'

export interface InputProps {
    handleSubmit: (content:string) => void
}
 
export const Input = (props: InputProps) => {
    const [content, setContent] = useState('');
    const handleChange = (e: any) => {
        const value = e.target.value;
        setContent(value);
    }
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            submit();
        }
    }
    const submit = () => {
        if (content.length === 0) {
            return;
        }
        setContent('')
        props.handleSubmit(content)
    }
    return ( 
        <div>
            <input 
                type="text" 
                value={content}
                placeholder="What do we do today?" 
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => handleChange(e)}
                />
            <button onClick={submit} >ADD</button>
        </div>
     );
}
 