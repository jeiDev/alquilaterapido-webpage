import Layout from "~/components/layouts";
import classnames from 'classnames';
import AuthorizationMiddleware from "~/middlewares/authorization.middleware";
import PublicationViewInformation from "~/components/pages/publication/view/information";
import PublicationViewDescription from "~/components/pages/publication/view/description";
import PublicationViewSendMessage from "~/components/pages/publication/view/send-message";
import PublicationViewInfo from "~/components/pages/publication/view/info";
import PublicationViewProfile from "~/components/pages/publication/view/profile";
import PublicationViewSlider from "~/components/pages/publication/view/slider";
import useStyles from "~/components/styles/publication/view/view.style";
import { useContext, useEffect, useState } from "react";
import Context from "~/store/hook/context";
import publicationProvider from "~/providers/publication.provider";
import LoadPage from "~/components/others/load/page";

const PublicationView = () => {
    const [invalid, setInvalid] = useState(null);
    const [load, setLoad] = useState(true);
    const {publication} = useContext(Context);
    const {setPublication} = publication;
    const classes = useStyles();

    useEffect(() => {
        const id = `${location.href}`.split("/").pop();
        publicationProvider.getOne(`${id}`, {limit: 10, skip: 1}).then(res => {
            if(res.error || !res.data) return setInvalid(true);
            setLoad(false);
            setPublication(res.data);
        })
    }, []);

    if(invalid == true) return "Invalid";
    if(load || publication.publication == null) return (<LoadPage />);
    console.log( publication )
    return (
        <AuthorizationMiddleware goAuth={false}>
            <Layout title="View">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <PublicationViewSlider />
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className={classnames(classes.boxInfo, 'col-12')}>
                            <PublicationViewInfo />
                            <PublicationViewProfile />
                            <PublicationViewSendMessage />
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 col-lg-7">
                        <PublicationViewInformation />
                        <PublicationViewDescription />
                    </div>
                    <div className="col-12 col-lg-5 d-flex">
                        <div className={classes.sideRight}>
                            <div className={classes.sideRow}>
                                Aqui va Algo
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </AuthorizationMiddleware>
    )
}

export default PublicationView