import * as React from 'react';
import { useState, useEffect } from 'react';
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
        props.handleSubmit(content)
    }
    return ( 
        <div>
            <input 
                type="text" 
                value={content}
                placeholder="今天要做点什么呢" 
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => handleChange(e)}
                />
            <button onClick={submit} >ADD</button>
        </div>
     );
}
 