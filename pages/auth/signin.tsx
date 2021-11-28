import Router from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import LayoutAuth from "~/components/layouts/auth";
import FormGroupAuth from "~/components/layouts/auth/formGroup";

import settings from "~/settings";
import { inputToDataObject } from "~/helpers/code/form.helper";
import accountProvider from "~/providers/account.provider";
import Swal from "sweetalert2";
import AuthMiddleware from "~/middlewares/auth.middleware";
import { SocialAuthReponseI } from '~/interfaces';

const SignIn = () => {
    const { socials } = settings.auth

    const fields = [{
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

    SignIn.handlerCallback = SignIn.handlerCallback.bind({})

    return (
        <AuthMiddleware>
            <LayoutAuth
                title="Sign In"
                type="signin"
                socials={socials}
                callback={SignIn.handlerCallback}
                submit={async (e, callback) => {
                    e.preventDefault();
                    const data = inputToDataObject(e);
                    const resp = await accountProvider.signin(data.email, data.password);

                    if (resp.error) {
                        callback();
                        return Swal.fire({
                            icon: 'error',
                            title: 'Invalid credentials',
                            text: resp.error.message
                        })
                    }

                    localStorage.auth = true;
                    Router.push('/');
                }}
                form={{
                    title: "Inicia sesion para comenzar a publicar",
                    link: {
                        title: "Crear una cuenta",
                        href: "/auth/signup"
                    },
                    submit: {
                        title: "Iniciar Sesion"
                    }
                }}
            >
                <SignIn.form states={{ fields }} />
            </LayoutAuth>
        </AuthMiddleware>
    )
}

SignIn.form = ({ states }) => {

    return (
        states.fields.map((field, i) => (
            <FormGroupAuth
                {...field}
                Icon={({ className }) => {
                    return (<FontAwesomeIcon className={className} icon={field.icon} />)
                }}
                key={i}
            />
        ))
    )
}

SignIn.handlerCallback = function (res: SocialAuthReponseI) {
    if(res.error) return Swal.fire({
        icon: 'error',
        title: 'Invalid credentials',
        text: res.error.message
    })

    localStorage.auth = true;

    Router.push("/");
}

export default SignIn