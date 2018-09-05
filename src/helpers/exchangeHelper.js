export default  (currency = 'UAH', exchangeRate = []) => {
    if (currency === 'UAH') {
        return 1;
    }

    let rate = exchangeRate.filter(item => item.ccy === currency)[0];

    return rate && rate.sale;
}