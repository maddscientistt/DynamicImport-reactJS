import React, { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useSearchParams } from "react-router-dom"


function Home() {
    const [Message, setMessage] = useState('');

    useEffect(() => {
        const loadFoo = async () => {
            // Dynamically import the Foo function from './Foo.js'
            const { Foo } = await import('./Foo');
            setMessage(Foo());
        };
        loadFoo()
    }, []);
    return (
        <div>
            <h1>Below message is dynamically imported</h1>
            {Message}
        </div>
    )
}


// const messages = {
//     en: {
//       greeting: "Hello {name}! How are you?",
//     },
//     es: {
//       greeting: "¡Hola {name}! ¿Cómo estás?",
//     },
//     fr: {
//       greeting: "Bonjour {name}! Comment ça va?",
//     },
//     de: {
//       greeting: "Hallo {name}! Wie geht's?",
//     }
// };

// function Home() {
//     const [queryParameters] = useSearchParams()
//     const locale = queryParameters.get("locale")
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const loadFoo = async () => {
//             // Dynamically import the Foo function from './Foo.js'
//             const { Foo } = await import('./Foo');
//             setMessage(Foo());
//         }
//     },[]);

//     return (
//         <IntlProvider locale={locale} messages={messages[locale]}>
//             <div>
//                 <h1>Welcome to the Dashboard</h1>
//                 <p>Locale: {locale}</p>
//                 <FormattedMessage id="greeting" values={{ name: "Vinay" }} />
//                 <h1>Below message is dynamically imported</h1>
//                 {message}
//             </div>
//         </IntlProvider>

//     )
// }

export default Home;