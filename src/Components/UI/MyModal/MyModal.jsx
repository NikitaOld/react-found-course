import React from 'react';
import s from './MyModal.module.css'
const MyModal = ({children, visible, setVisible}) => {

    return (
        <div className={visible ? [s.myModal, s.active].join(' ') : s.myModal}>
            {children}
        </div>
    );
};

export default MyModal;