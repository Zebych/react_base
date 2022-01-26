import React, {useRef} from 'react';
import MyButton from "../../UI/button/MyButton";
import MyInput from "./MyInputRef";

const UncontrolledUseRef = () => {
    const BodyInputRef = useRef()
    const addNewPost = (e) => {
        e.preventDefault()//отключает дефолтное поведение кнопки(отправка на сервер)
        console.log(BodyInputRef.current.value)
    }
    return (
        <div>
            <form>
                <MyInput ref={BodyInputRef}
                         placeholder={'Описание поста'}
                         type="text"/>
                <MyButton onClick={addNewPost}>Создать</MyButton>
            </form>
        </div>
    );
}

export default UncontrolledUseRef;