import React from 'react';
import s from './MyModal.module.css'

const MyModal = () => {
    return (
        <div className='container'>
            <div className={s.myModal}>
                <div className={[s.myModalContent, s.active].join(' ')}>
                    <button className="myButton">MyButton</button>
                </div>
            </div>
        </div>
    );
};

export default MyModal;