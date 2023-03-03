import React, { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage  } from "react-intl";
import { useSearchParams } from "react-router-dom";
import {messages} from "./message";

// function Home() {
//     const [Message, setMessage] = useState('');

//     useEffect(() => {
//         const loadFoo = async () => {
//             // Dynamically import the Foo function from './Foo.js'
//             const { Foo } = await import('./Foo');
//             setMessage(Foo());
//         };
//         loadFoo()
//     }, []);
//     return (
//         <div>
//             <h1>Below message is dynamically imported</h1>
//             {Message}
//         </div>
//     )
// }

    function Home() {
        const [queryParameters] = useSearchParams()
        const locale = queryParameters.get("locale")
        const [Message, setMessage] = useState('');

        useEffect(() => {
            const loadFoo = async () => {
                // Dynamically import the Foo function from './Foo.js'
                const { Foo } = await import('./Foo');
                setMessage(Foo(locale));
            };
            loadFoo()
        }, []);

        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div>
                    <h1>Welcome to the Dashboard</h1>
                    <p>Locale: {locale}</p>
                    <FormattedMessage id="greeting" values={{ name: "Vinay" }} /> <br/> <br/>
                    <hr/> <br/>
                    <h1>Below message is dynamically imported</h1>
                    {Message}
                </div>
            </IntlProvider>

        )
    }

export default Home;