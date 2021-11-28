import Layout from "~/components/layouts";
import SideBarHome from "~/components/pages/home/sidebar";
import MainHome from "~/components/pages/home/main";
import AuthorizationMiddleware from "~/middlewares/authorization.middleware";

const Profile = () => {

  return (
    <AuthorizationMiddleware goAuth={false}>
      <Layout title="Home">
        <div style={{ display: "flex" }}>
          <SideBarHome />
          <MainHome />
        </div>
      </Layout>
    </AuthorizationMiddleware>
  )
}


export default Profile
