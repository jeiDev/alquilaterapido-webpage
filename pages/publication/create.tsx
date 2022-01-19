import { useContext, useRef, useState } from "react";
import Layout from "~/components/layouts";
import Steps from "~/components/others/steps";
import Step1 from "~/components/pages/publication/create/step1";
import Step2 from "~/components/pages/publication/create/step2";
import Step3 from "~/components/pages/publication/create/step3";
import Step4 from "~/components/pages/publication/create/step4";
import AuthorizationMiddleware from "~/middlewares/authorization.middleware";
import publicationProvider from "~/providers/publication.provider";
import Context from "~/store/hook/context";
import Router from "next/router";
import Swal from "sweetalert2";

const title = "Crear Publicacion";
const CreatePublication = () => {
    const {publication} = useContext(Context);
    const updateData = publication.setDataCreate;
    const [files, setFiles] = useState([]);
    const form = useRef();

    CreatePublication.global.form = form

    const handlerUpdate = () => {
        updateData( CreatePublication.getValues());   
    }

    return (
        <AuthorizationMiddleware>
            <Layout title={title}>
                <form method="POST" ref={form} encType="multipart/form-data">
                    <Steps
                        title={title}
                        onSubmit={async () => {
                            const data = CreatePublication.getValues();
                            const formData = new FormData();
        
                            files.forEach((file: any) => {
                                formData.append("images[]", file.file);
                            })

                            formData.append("data", JSON.stringify(data));
             
                            const res = await publicationProvider.create(formData);
                            const publication = res.data;

                            if(!publication || res.error) return Swal.fire({
                                icon: 'error',
                                title: 'Invalid credentials',
                                text: res.error.message || "Cannot create publication"
                            })

                            Router.push(`/publication/${publication.uuid}`);
                        }}
                        items={[
                            {   
                                onChange: () => {
                                    handlerUpdate();   
                                    return true;
                                },
                                render() {
                                    return <Step1 />
                                }
                            },
                            {
                                title,
                                onChange: () => {
                                    handlerUpdate();   
                                    return true;
                                },
                                render() {
                                    return <Step2 />
                                }
                            },
                            {
                                title,
                                onChange: () => {
                                    handlerUpdate();   
                                    return true;
                                },
                                render(){
                                    return <Step3 />
                                }
                            },
                            {
                                title,
                                onChange: () => {
                                    handlerUpdate();   
                                    return true;
                                },
                                render() {
                                    return <Step4 files={files} setFiles={setFiles}/>
                                }
                            }
                        ]}
                    />
                </form>
            </Layout>
        </AuthorizationMiddleware> 
    )
}

//Global
CreatePublication.global = {
    form: null
}

CreatePublication.getValues = (): Object => {
    const form = CreatePublication.global.form?.current

    if(!form) return {}

    const data = Array.from([...form.querySelectorAll("input"), ...form.querySelectorAll("textarea")]).reduce((a, b: any) => {
        if(b.name){
            a[b.name] = isNaN(b.value) ? b.value : b.value == "" ? b.value : +b.value
        }
        return a
    }, {});

    return data
}

export default CreatePublication;