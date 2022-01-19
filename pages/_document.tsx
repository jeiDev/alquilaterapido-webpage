import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import theme from '~/src/theme'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    
    
        const initialProps = await Document.getInitialProps(ctx)
        return { 
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="stylesheet" href="/assets/css/reset.css" />
                    <link rel="stylesheet" href="/assets/css/root.css" />
                    <link rel="stylesheet" href="/assets/css/grid-system.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument