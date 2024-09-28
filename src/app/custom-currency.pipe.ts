import { CurrencyPipe } from "@angular/common"
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'customCurrency', standalone: true})
export class CustomCurrencyPipe implements PipeTransform{    
    constructor(private currencyPipe:CurrencyPipe){}
    transform(value: number | string | null, code : 'USD' | 'EUR', display?: 'symbol' | 'code' | 'symbol-narrow', digitsInfo?: string, locale?: 'fr' | 'en-US'){
        const formattedAmount = this.currencyPipe.transform(value, code,display,digitsInfo,locale);
        if(formattedAmount != null){
            return `${formattedAmount.substring(1)} ${formattedAmount.charAt(0)}`;
        }
        return formattedAmount
    }
}