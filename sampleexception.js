class MobileNumberCheck extends Error {
    printCustomerMessage() {
        return `Validation failed : ${this.message}`;
    }
 }
  
  try {
        var number = window.prompt("Enter a mobile number");
        if(isNaN(number) || number.toString()=="" || number.toString().length!=10)
        {
            throw new MobileNumberCheck("Not a valid phone number");
        }
        else{
            alert("Phone number is valid")
        }
    }
  
  catch (error) 
  {
    if (error instanceof MobileNumberCheck) 
    { 
        alert(error.printCustomerMessage());
    } 
    else 
    {
      alert('Unknown error', error);
      throw error;
    }
  }
