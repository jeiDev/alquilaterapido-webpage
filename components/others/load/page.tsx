const LoadPage = () => {

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            overflow: "object"
        }}>
            <img src="/images/loading.gif" alt="loading" style={{height: 80, width: 80, objectFit: "contain"}} />
        </div>
    )
}

export default LoadPage;