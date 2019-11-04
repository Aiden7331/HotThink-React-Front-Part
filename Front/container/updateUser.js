import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TagGroupUpdate from "../components/tagUpdate";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import { login} from "../modules/reducer/auth";
import {updateUser,changeField} from "../modules/reducer/user";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

const UpdateUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { user,form} = useSelector(({user})=>({
        user: user.user,
        form: user.userUpdate,
    }));
    const onChange = e =>{
        const {value,name} = e.target;
        dispatch(
            changeField({
                form:'userUpdate',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {nickName, pw, tel, preferences} = form;
        dispatch(updateUser({nickName,pw,tel,preferences}));
    };
    return(
        <>
            <div style={{width:'200px', margin:'auto'}}>
            <form className={classes.container} onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField
                    id="nickName"
                    label="NickName"
                    name="nickName"
                    // value={user.nickName}
                    className={classes.textField}
                    margin="normal"
                    onChange={onChange}
                />
                <TextField
                    id="tel"
                    name="tel"
                    label='Tel'
                    // value={user.tel}
                    className={classes.textField}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    id="pw"
                    name="pw"
                    label="NewPassword"
                    className={classes.textField}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    id="pwck"
                    name="pwck"
                    label="NewPasswordCheck"
                    className={classes.textField}
                    onChange={onChange}
                    margin="normal"
                />
                <TagGroupUpdate userPrefer={user.preferenceList}/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    회원정보 변경
                </Button>
            </form>
            </div>
        </>
    )
};

export default UpdateUser;