import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.css'

export interface ItemProps {
    content: string;
    id: number;
    onCheck: (element: any) => void;
    onDelete: (e: any, index:number) => void;
}
 
export const Item = (props: ItemProps) => {
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        if (checked) {
            setChecked(false)
        } else {
            setChecked(true)
        }
        props.onCheck({
            ...props,
            isChecked: !checked
        });
    }
    return ( 
        <>
            <div className={`container ${checked? 'container-isChecked': ''}`}>
                <div className={`checkBox ${checked? 'checkBox-isChecked': ''}`} onClick = {handleCheck}></div>
                <div className={`content ${checked? 'content-isChecked': ''}`}>{props.content}</div>
                <div className={`delete ${checked? 'delete-isChecked': ''}`} onClick = {(e) => props.onDelete(e, props.id)}>DELETE</div>
            </div>
        </>
     );
}
 