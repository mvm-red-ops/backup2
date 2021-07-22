import { LightningElement, track } from 'lwc';

export default class BaUploaderWrapper extends LightningElement {
    @track networkSelected
    @track network
    @track fileUploaded
    @track csvDownloadReady
  
    //handles selection of deal program from dropdown
    handleNetworkSelection(event){
      this.network = event.detail
      this.networkSelected = true
    }
  
    //completely resets state to initial values, used mainly for reselecting deal program
    resetState(event){
     this.networkSelected = null
     this.network = null
     this.fileUploaded = null
     this.csvDownloadReady = null
    }
}