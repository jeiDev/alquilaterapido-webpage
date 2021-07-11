import settings from "~/settings"


const Layout = (props) => {
    return (
        <settings.layout.component {...props}>
            {props.children}
        </settings.layout.component>
    )
}

export default Layout