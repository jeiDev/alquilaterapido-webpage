module.exports = {
    env: {
        API_SERVER: process.env.API_SERVER,
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
}