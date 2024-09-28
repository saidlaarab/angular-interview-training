import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipe-training',
  standalone: true,
  imports: [CommonModule],
  providers: [DecimalPipe, CurrencyPipe, DatePipe, PercentPipe, LowerCasePipe, UpperCasePipe, I18nPluralPipe, SlicePipe],
  templateUrl: './pipe-training.component.html',
  styleUrl: './pipe-training.component.css'
})
export class PipeTrainingComponent {
  price:number = 12.5;
  formattedPrice!: string | null;

  myDate1: Date = new Date();
  formattedDate!: string | null;

  myNumber: number = 123.566;
  formattedNumber!: string | null;

  percent: number = 0.6359;
  formattedPercent!: string | null;

  str: string = 'SaId Laarab';
  lowercaseStr!: string | null;
  uppercaseStr!: string | null;

  //
  itemsCount = 9;
  itemsMapping = {
    '=0': 'No items',
    '=1': 'One item',
    '=2': 'Two items',
    'other': '# items'
  };
  pluralItemsStr!: string;

  //
  personObj: Observable<{name: string, job: string}> = of({
    name: 'Said',
    job: 'Software engineer'
  });

  constructor(private datePipe:DatePipe,
              private currencyPipe: CurrencyPipe,
              private decimalPipe: DecimalPipe,
              private percentPipe: PercentPipe,
              private lowercasePipe: LowerCasePipe,
              private uppercasePipe: UpperCasePipe,
              private i18nPluralPipe: I18nPluralPipe,
              private slicePipe: SlicePipe
  ){
    // A - Currency pipe :
    // Formatting using the object currencyPipe :
    this.formattedPrice = this.currencyPipe.transform(this.price, 'EUR', 'symbol','2.2-3','fr');

    //  B- Date pipe
    //  formatting a string-represented date using the object datePipe
    const dateString = '15/09/2024  23:49:22';
    const dateParts = dateString.match(/\d+/g)?.map(Number);
    const [day, month, year, hour, minute, second] = dateParts != null ? dateParts : [];
    const date = new Date(year, month-1, day, hour, minute, second);
    console.log('parsed date : ',dateParts);
    this.formattedDate = this.datePipe.transform(date,'EEEE dd MMMM yyyy','','fr');

    // C- Decimal pipe :
    this.formattedNumber = this.decimalPipe.transform(this.myNumber,'3.1-1','fr');

    // D- Percent pipe :
    this.formattedPercent = this.percentPipe.transform(this.percent,'3.1-2','fr');

    // E- LoweCase pipe :
    this.lowercaseStr = this.lowercasePipe.transform(this.str);
    this.uppercaseStr = this.uppercasePipe.transform(this.str);

    // F- Slice pipe :
    this.slicePipe.transform('Software',0); // extract the whole word
    this.slicePipe.transform('Software',0,4); // 'Soft'
    this.slicePipe.transform('Software',4); // 'ware'

    // G- I18nPluralPipe :
    this.pluralItemsStr = this.i18nPluralPipe.transform(this.itemsCount, this.itemsMapping);

    // Pipe operator precedence :
    // ** has a lower precendence than the regular operator : +, -, *, /, %, &&, || 
    // ** but, has higher precendence than the ternary conditional operator
    // Please refer to the template of this component, to see it in action


  }
}
