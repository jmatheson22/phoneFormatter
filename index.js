// this is done with regex and a simple replacement of a placeholder
  
  var extract = function(phoneNumber) {
    // takes in phone number and extacts the raw digits using regex
    phoneNumber = phoneNumber.replace(
      /^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "$1$2$3");
    return phoneNumber.replace(/\D/g,''); //removes letters
  };

  var format = function(phoneNumber, newFormat) {
    // takes number and formats and transforms it to make given format 
    // example format: +1NNNNNNNNNN would take (978)-256-3423 -> +19782563423
    phoneNumber = this.extract(phoneNumber);

    // simple loop through the N's and replace with the right extracted number
    for (var i = 0, l = phoneNumber.length; i < l; i++) {
      newFormat = newFormat.replace("N", phoneNumber[i]);
    }
    return newFormat;
  };

  exports.format = format;
  exports.extract = extract;
