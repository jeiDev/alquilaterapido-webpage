import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons'

import settings from "~/settings"
import LayoutAuth from "~/components/layouts/auth"
import FormGroupAuth from "~/components/layouts/auth/formGroup"
import accountProvider from "~/providers/account.provider"
import { inputToDataObject } from "~/helpers/code/form.helper"
import Swal from "sweetalert2"
import Router from "next/router"
import { SocialAuthReponseI } from "~/interfaces"


const SignUp = function() {
    const {socials} = settings.auth

    const fields = [{
        title: "Nombres",
        icon: faUser,
        input: {
            type: "text",
            name: "firstName",
            placeholder: "Escribe tu nombre"
        }
    },{
        title: "Apellidos",
        icon: faIdCard,
        input: {
            type: "text",
            name: "lastName",
            placeholder: "Escribe tu apellido"
        }
    },{
        title: "Correo Electronico",
        icon: faEnvelope,
        input: {
            type: "email",
            name: "email",
            placeholder: "Escribe tu correo"
        }
    },
    {
        title: "Contraseña",
        icon: faLock,
        input: {
            type: "password",
            name: "password",
            placeholder: "Escribe tu contraseña"
        }
    }];

    SignUp.handlerCallback = SignUp.handlerCallback.bind({})

    return (
        <LayoutAuth 
            title="Sign Up"
            type="signup"
            socials={socials}
            callback={SignUp.handlerCallback}
            submit={async (e, callback) => {
                e.preventDefault();
                const data = inputToDataObject(e);
                const resp = await accountProvider.signup(data);

                if (resp.error) {
                    callback();
                    return Swal.fire({
                        icon: 'error',
                        title: 'Cannot create account',
                        text: resp.error.message
                    })
                }

                localStorage.auth = true;
                Router.push('/');
            }}
            form={{
                title: "Crear cuenta",
                link: {
                    title: "Ya tengo una cuenta",
                    href: "/auth/signin"
                },
                submit: {
                    title: "Registrate"
                }
            }}
        >
            <SignUp.form states={{fields}}/>
        </LayoutAuth>
    )
}

SignUp.form = ({states}) => {
    
    return (
        states.fields.map((field, i) => (
            <FormGroupAuth
                {...field}
                Icon={({className})=>{
                    return (<FontAwesomeIcon className={className} icon={field.icon} />)
                }}
                key={i}
            />
        ))
    )
}


SignUp.handlerCallback = function(res: SocialAuthReponseI) {
    if(res.error) return Swal.fire({
        icon: 'error',
        title: 'Invalid credentials',
        text: res.error.message
    })

    localStorage.auth = true;
    
    Router.push("/");
}

export default SignUp