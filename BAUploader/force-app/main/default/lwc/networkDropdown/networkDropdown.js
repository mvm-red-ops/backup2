import { LightningElement, wire, track, api } from 'lwc';

import getFields from '@salesforce/apex/DealprogramDropdown.getFields';

const EXCLUDED_VALUES = [
  "Chappelle Show", 
  "FB PP",
  "DOC PP", 
  "LATV PP", 
  "Tennis PP", 
  "SiTV PP",
  "Outdoor PP", 
  "MAV PP", 
  "BlueHighways PP",
  "Sample 3"
]

export default class NetworkDropdown extends LightningElement {
    @track options
    @track value;

    @wire(getFields)
    wiredOptions({error, data}){
      if(data){
        window.console.log('data: ')
        this.options = data.reduce( (accumulator, field) => {
          const option = Object.assign({}, {label: field, value: field})
          if(!EXCLUDED_VALUES.includes(field)){
            accumulator.push(option)
          }
          return accumulator
        }, [])
      } else if (error){
        window.console.log('error', JSON.stringify(error))
        this.error = error;
        this.options = undefined
      }
    }

    changeHandler(event) {
      const field = event.target.value;
      const selectedEvent = new CustomEvent("networkselection", {
        detail: field
      });

      // this.value = event.detail.value;
      this.dispatchEvent(selectedEvent);
    }
}