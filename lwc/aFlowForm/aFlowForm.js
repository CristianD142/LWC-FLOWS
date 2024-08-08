import { api, LightningElement } from 'lwc';

export default class AFlowForm extends LightningElement {

    @api name;
    @api greetings;

    nameLenght;

    connectedCallback(){
        this.updateGreetings();
    }


    handleChange(event){
        this.name = event.detail.value;
        this.updateGreetings();
    }

    updateGreetings(){
        this.greetings = 'Hello '+this.name+', congratulation to learn LWC in Screen Flows ';
        this.nameLenght = this.name.length;
    }

    @api validate(){
  
        let isValid = true;
        let message = '';
        console.log('characters',this.name.length);

        if(this.name.length <= 10){
            isValid = false;
            message = 'name must contains at least 10 letters';
        }

        return {
          isValid : isValid,
          errorMessage: message
        }
        
      }

}