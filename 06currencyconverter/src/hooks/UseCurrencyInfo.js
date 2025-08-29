import {useState,useEffect} from "react";

function UseCurrencyInfo(currency){
    let [data,setData] = useState({});

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    return data;
}
export default UseCurrencyInfo;
