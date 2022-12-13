import { Html, Head, Main, NextScript } from 'next/document'

/* este document nos va permitir a todo el documento de esta pagina, head, body, etc*/
export default function Document(){
    return (
        <Html>
            <Head>
                <meta name="description" content="Guitar-La | Venta de guitarras y cursos"/>
                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/> 
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      
            </Head>
            <body>
                <Main>

                </Main>
                <NextScript>

                </NextScript>
            </body>
        </Html>
    )
}