import React from "react";
import {reduxForm} from "redux-form";
import Input from "./Input";
import {add} from "../actions/index";

import "material-ui";
import Select from "./Select";

const validate = values => {
}

const asyncValidate = values => {
    return new Promise(fx => setTimeout(fx, 1500))
        .then(() => {
            if (['test', 'check', 'hello'].includes(values.message)) {
                // eslint-disable-next-line
                throw {
                    message: 'Stop the testing'
                }
            }
        })
}

const submit = (values, pristine, dispatch) => {
    if (pristine) {

    }

    if (values.message && values.message.length < 5) {

    }

    dispatch(add(values.message))
}

const TodoForm = ({handleSubmit, dispatch, pristine}) => (
    <form onSubmit={ handleSubmit(values => submit(values, pristine, dispatch)) }>
        <Select name="system" options={
            [
                {value: 'etc',      text: '(기타)', style: {color:'#ccc'} },
                {value: 'isms',     text: '모집조직통합관리'},
                {value: 'isi',      text: '모집종사자관리'},
                {value: 'www',      text: '대표홈페이지'},
                {value: 'login',    text: '통합로그인'},
                {value: 'ics',      text: '보험가입조회'},
                {value: 'paper',    text: '청구서류'},
                {value: 'human',    text: '휴면계좌관리'},
                {value: 'gbms',     text: '보장사업'},
                {value: 'msrc',     text: '모집질서문란'},
                {value: 'bas',      text: '예산/회계'},
                {value: 'cis',      text: '공동보험대차청산정보공유'},
                {value: 'cns',      text: '대외전산망업무지원'}
            ]
        }/>
        <Input name="message"
               placeholder="What's your mission?"
               validate={
                   value => {
                       return 'test'
                   }
               }
        />
    </form>
)

export default reduxForm({
    form: 'todo-form',
    validate,
    asyncValidate
})(TodoForm)
