import React, {useState} from 'react';
import AuthRegInput from '../../components/AuthReg/AuthRegInput';
import {useUser} from '../../hooks/useUser'
import AuthRegButton from '../../components/AuthReg/AuthRegButton';
import { signup } from '../../utils/api';
import { TResponse } from '../../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import './Reg.css'


function Reg() {

    const {user, updateField} = useUser({username: "", password: ""})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState<TResponse>()
    const navigation = useNavigate()

    const handlSubmit = async () =>
    {
        setLoading(true)
        try{
            console.log(user)
            setResponse(await signup(user.username, user.password))
            navigation("/")
        }
        catch (e)
        {
            console.log(e)
        }
        setLoading(false)
    }

    return (
        <div className="reg">
            <div className="reg">
                <h1 className="reg__heading">Регистрация</h1>
                <AuthRegInput field={"username"} value={user.username} updateField={updateField}></AuthRegInput>
                <AuthRegInput field={"password"} value={user.password} updateField={updateField}></AuthRegInput>
                <AuthRegButton loading={loading} onCLick={handlSubmit}></AuthRegButton>
                <div className={"auth__message_error"}>{response?.message}</div>
            </div>
            <Link to="/login">Уже есть аккаунт</Link>
            <Link to="/">На главную</Link>
        </div>
    );
}

export default Reg;
