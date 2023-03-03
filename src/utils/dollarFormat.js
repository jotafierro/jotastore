const dollarFormat = (price) => price.toLocaleString('en-US', {style:'currency', currency:'USD'})

export default dollarFormat
