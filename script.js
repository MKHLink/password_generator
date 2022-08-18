//password object
var passwordType = 
{
  length: "",

  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric:"0123456789",
  special:"!@#$%^&*()"
};

//upper case generator
function upperPass(length)
{
  var password="";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*passwordType.upperCase.length);
    password+= passwordType.upperCase.substring(randomPick,randomPick+1);
  }
  return password;
}

//lower case generator
function lowerPass(length)
{
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*passwordType.lowerCase.length);
    password+= passwordType.lowerCase.substring(randomPick,randomPick+1);
  }
  return password;
}

//numbers generator
function numberPass(length)
{
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*passwordType.numeric.length);
    password+= passwordType.numeric.substring(randomPick,randomPick+1);
  }
  return password;
}

//special characters generator
function symbolPass(length)
{
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*passwordType.special.length);
    password+= passwordType.special.substring(randomPick,randomPick+1);
  }
  return password;
}

//mixed password generator
function mixedPass(length)
{
  var tempPass = upperPass(length)+lowerPass(length)+numberPass(length)+symbolPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//letters only
function letterPass(length)
{
  var tempPass = upperPass(length)+lowerPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//uppercase and number
function upperNumberPass(length)
{
  var tempPass = upperPass(length)+numberPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//uppercase and symbol
function upperSymbolPass(length)
{
  var tempPass = upperPass(length)+symbolPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//lowecase and number
function lowerNumberPass(length)
{
  var tempPass = lowerPass(length)+numberPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//lowercase and symbol
function lowerSymbolPass(length)
{
  var tempPass = lowerPass(length)+symbolPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//letters and numbers
function letternumPass(length)
{
  var tempPass = upperPass(length)+lowerPass(length)+numberPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//letters and specials
function lettersymbolPass(length)
{
  var tempPass = upperPass(length)+lowerPass(length)+symbolPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}

//numbers and specials
function numsymbolPass(length)
{
  var tempPass = numberPass(length)+symbolPass(length);
  var password = "";

  for(i=0;i<length;i++)
  {
    var randomPick = Math.floor(Math.random()*tempPass.length);
    password+= tempPass.substring(randomPick,randomPick+1);
  }
  return password;
}


//main password generator
function generatePassword()
{
  passwordType.length = window.prompt("Enter a password length between 8 to 128");
if((passwordType.length<=128)&&(passwordType.length>=8))
{
  var finalPass = "";
  var includeUpperCase = window.confirm("Include Uppercase letters?");
  var includeLowerCase = window.confirm("Include Lowercase letters?");
  var includeNumbers = window.confirm("Include Numbers?");
  var includeSymbols = window.confirm("Include Special Characters?");

  if(includeUpperCase && includeLowerCase && includeNumbers && includeSymbols)
  {
    finalPass = mixedPass(passwordType.length);
  }
  else if(includeUpperCase && includeLowerCase && includeNumbers)
  {
    finalPass = letternumPass(passwordType.length);
  }
  else if(includeUpperCase && includeLowerCase && includeSymbols)
  {
    finalPass = lettersymbolPass(passwordType.length);
  }
  else if(includeUpperCase && includeLowerCase)
  {
    finalPass = letterPass(passwordType.length);
  }
  else if(includeNumbers && includeSymbols)
  {
    finalPass=numsymbolPass(passwordType.length);
  }
  else if(includeUpperCase&&includeNumbers)
  {
    finalPass=upperNumberPass(passwordType.length);
  }
  else if(includeUpperCase&&includeSymbols)
  {
    finalPass=upperSymbolPass(passwordType.length);
  }
  else if(includeLowerCase && includeNumbers)
  {
    finalPass=lowerNumberPass(passwordType.length);
  }
  else if(includeLowerCase && includeSymbols)
  {
    finalPass = lowerSymbolPass(passwordType.length);
  }
  else if(includeUpperCase)
  {
    finalPass=upperPass(passwordType.length);
  }
  else if(includeLowerCase)
  {
    finalPass=lowerPass(passwordType.length);
  }
  else if(includeNumbers)
  {
    finalPass=numberPass(passwordType.length);
  }
  else if(includeSymbols)
  {
    finalPass=symbolPass(passwordType.length);
  }
  else
  {
    window.alert("Invalid selection, try again");
    return null;
  }
  

  
  return finalPass;
}
else
{
  window.alert("Invalid password length");
  return null;
}
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
