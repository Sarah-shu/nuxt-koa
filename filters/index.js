let { Language } = require("~/config/constant");

const currencyRate = (currency, locale) => {
  let language=Language.filter((v)=>{
    return v.code===locale
  })
  if(language.length>0){
    return Number(currency)*language[0].rate
  }else{
    return currency
  }
};

export default {
  currencyRate
}

