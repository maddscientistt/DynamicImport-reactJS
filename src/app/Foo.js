import React from "react";
import { FormattedMessage, addLocaleData } from "react-intl";
import fr from 'react-intl/locale-data/fr';

const dynamicLocale = async (language) => {
    console.log('byeee', fr)
    const languageFile = `react-intl/locale-data/${language}.js`;
    console.log('2  ', languageFile)
    return (await import(languageFile)).default;
}

export const Foo = (locale) => {
    const localeData = dynamicLocale(locale)
    // addLocaleData(localeData)
    console.log('1  ', locale, localeData)
    return (
        <>
        <h4>Inside Foo</h4>
        <FormattedMessage id="title" />
        </>
    )  
}

