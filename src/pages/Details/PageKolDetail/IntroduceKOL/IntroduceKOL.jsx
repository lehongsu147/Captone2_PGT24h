import { EditFilled } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
const { TextArea } = Input;
const FormatText = (props) => {
    const formattedText = props.details?.replace(/\\n/g, '\n').split('\n').map((line, index) => {
        return (
            <React.Fragment key={index}>
                {line}
                <br /><br />
            </React.Fragment>
        );
    });
    return <div style={{ marginTop: '20px' }}>{formattedText}</div>;
};
const IntroduceKOL = ({ introduction, canEdit = false, id = null }) => {

    const [edit, setEdit] = useState(false);
    const [showIcon, showIconEdit] = useState(true);
    const [editValue, setEditValue] = useState('');

    function handleClickEdit() {
        setEdit(true);
        showIconEdit(false);
        setEditValue(introduction)
    }
    function SaveEidt() {
        setEdit(false);
        showIconEdit(true);
    }
    return (
        <div>
            {(canEdit && showIcon) &&
                <Button onClick={handleClickEdit} style={{ position: 'absolute', top: -10, right: 20, zIndex: 10 }}  >
                    <EditFilled width={20} />
                </Button>
            }
            {edit ? <>
                <TextArea 
                placeholder='Giới thiệu về bản thân ...'
                autoSize={{ minRows: 3, maxRows: 20 }}
                onChange={(e)=> setEditValue(e.target.value)} value={editValue} />
                <Button onClick={SaveEidt}>Lưu</Button>
            </>
                :
                <span style={{ fontSize: '14px', opacity: '0.8', whiteSpace: 'pre-wrap', }}>
                    <FormatText details={introduction} />
                </span>
            }
        </div>
    )
}



export default IntroduceKOL