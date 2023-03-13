import React from "react";
import { FormattedMessage, addLocaleData } from "react-intl";
import fr from 'react-intl/locale-data/fr';

const dynamicLocale = async (locale) => {
    console.log('byeee', fr)
    // addLocaleData(require(`react-intl/locale-data/${locale}`))
    const languageFile = await require(`react-intl/locale-data/${locale}.js`);
    return languageFile;
}

export const Foo = (locale) => {
    const localeData = dynamicLocale(locale)
    addLocaleData(localeData)
    console.log('1  ', locale, localeData)
    return (
        <>
        <h4>Inside Foo</h4>
        <FormattedMessage id="title" />
        </>
    )  
}

