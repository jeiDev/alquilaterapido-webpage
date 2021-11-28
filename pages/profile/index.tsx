import Layout from "~/components/layouts"
import AuthorizationMiddleware from "~/middlewares/authorization.middleware"
import ProfileView from "~/components/pages/profile/view"

const Profile = () => {
   
    return (
        <AuthorizationMiddleware>
            <Layout title="Profile">
                <ProfileView 
                    account={{
                        firstName: "Jei",
                        lastName: "Devp",
                        createdAt: new Date("Tue Aug 10 2021 14:07:11"),
                        updatedAt: new Date("Tue Aug 10 2021 14:07:11"),
                        email: 'test',
                        uuid: "-",
                        verifyEmail: true
                    }}
                />
            </Layout>
        </AuthorizationMiddleware>
    )
}

export default Profile