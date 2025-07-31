import { useEffect, useState } from "react"

export const useCurrancyInfo = (currancy) => {
    const [data, setData] =  useState({});

    useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currancy}.json`
        fetch(url).then((res) => res.json()).then((res) => setData(res[currancy]))
    }, [currancy]);
        console.log(data);

    return data;
}