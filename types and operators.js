let _val = 500;

_val=400;
document.write("<center>");

showMessage(" changing variable values" +" "+ _val);

document.write("&nbsp <b>1. Numbers</b>"+"<br/>");
document.write("<br/>");
let price = 20.99;
document.write(typeof price +" <br/>");
let price2 = "200,33";
document.write("<br/>");

document.write(typeof price2 +"<br/>");

document.write("<br/>");

 document.write("&nbsp;<b>2. Operators</b> <br/>");
 document.write("<br/>");

 let num = 10;
 num+=5;
 document.write("Addition operator: " + num + "<br/>");
 document.write("<br/>");

 let num1 = 10;
 num1-=5;
 document.write("Subtarction operator: "+ num1 +"<br/>");
 document.write("<br/>");
 let num2 = 10;
 num2*=5;
 document.write("Product operator: " + num2 + "<br/>");
 document.write("<br/>");

 let num3 = 10;
 num3/=5;
 document.write("Division operator: " + num3+ "<br/>");
 document.write("<br/>");

 let num4 = 10;
 num4%=5;
 document.write("Reminder operator: " + num4 + "<br/>");
 document.write("<br/>");

 let num5 = 15, num6 = 30;
 document.write( "Other method for doing operations: "+num5*num6 +"<br/>");
 document.write("<br/>");

 let num7 = 10;
 document.write("preincrement: "+ ++num7 +"<br/>");
 document.write("<br/>");

 let num8 = 10;
 document.write("postincrement: "+ num8++ +"<br/>");
 console.log(num8);
 document.write("<br/>");

 document.write("&nbsp; <b> 3. Operator precedence </b>" + "<br/>");
 document.write("<br/>");
 let num9 = 3+2*2;
 document.write("Product and division calculate first this is Javascript precedence: "+num9 +"<br/>");
 document.write("<br/>");

 let num10 = (3+2)*2;
 document.write("Any thing in the parentheses execute first: " +num10 +"<br/>");
 document.write("<br/>");

 let num11 = 1.4 + 2.4;
 document.write("Adding decimal numbers or precision of js: "+num11+"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>4. Strings </b>"+ "<br/>");
 document.write("<br/>");
 let first = 'Hello World';
 document.write("Defined String: "+first +" <br/>");
 document.write("<br/>");
  
 let message1 = "\"Hello World\"";
 document.write("Defined String with qoutation: "+message1 +" <br/>");
 document.write("<br/>");

 let name = 'Sami';
 let message2 = `Hello ${name}`;
 document.write("Concatenate using Backtick: " + message2 + "<br/>");
 document.write("<br/>");

 document.write("&nbsp <b> 5. Manipulating Strings </b>"+ "<br/>");
 document.write("<br/>");

 let message3 = 'Hello';
 let message4 = message3 + 'world';
 document.write("Normal concatenation: "+ message4 + "<br>");
 document.write("<br/>");
 
 document.write("&nbsp <b> 5.1 Methods </b>"+ "<br/>");
 document.write("<br/>");
 let message5 = 'HELLO';
 message5 = message5.toLowerCase();
 document.write("Converting string to lowercase: "+ message5+ "<br/>");
 document.write("<br/>");

 let message6 = 'hello';
 message6 = message6.toUpperCase();
 document.write("Converting string to uppercase: "+ message6+ "<br/>");
 document.write("<br/>");

 let message7 = 'Hello';
 message7 = message7.substring(3);
 document.write("Starting the string from the given index: " +message7+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b> 5.2 Property </b>"+ "<br/>");
 document.write("<br/>"); 
 let message8 = 'Hello world';
 message8 = message8.length;
 document.write("Show the length of the String: "+message8+"<br/>");
 document.write("<br/>");

 let message9 = '123';
 document.write("we cannot add number on the string: "+ message9+2+"<br/>");
 document.write("<br/>");
 let message10 = 123;
  message10 += 2;
 document.write("Now we can add any number because the value number: "+message10 +"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>6. Coverting numbers to string</b> <br/>");
 document.write("<br/>");
 let amount = 123;
 amount = amount.toString();
 document.write("This method change numbers to string: "+typeof  amount+ "<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>6.1 Coverting strings to number</b> <br/>");
 document.write("<br/>");
 let amount1 = Number.parseFloat('123.12');
 document.write("This method change strings to number: "+typeof amount1+"<br/>");
 document.write("<br/>");
 let amount2 = Number.parseFloat('A123.12');
 document.write("<br/>");
 document.write("When we need to convert string to number we just make sure that the beging of the string is a number: "+"<u>"+amount2+"</u>"+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>7.Boolean variables</b>"+"<br/>");
 document.write("<br/>");
 let saved = false;
 document.write("This is typeof method value: "+typeof saved+"<br/>");
 document.write("<br/>");
 let saved1 = true;
 document.write("This is boolean value: "+ saved1+"<br/>");
 document.write("<br/>");
 let saved3 = true;
 saved3 = !true;
 document.write("This is negation boolean value: "+saved3+"<br/>");
 document.write("<br/>");

 document.write("&nbsp <b>8. Null and Undefined Types</b> <br/>");
 document.write("<br/>");
 let saved4;
 document.write("This message is not defined when it is declared!"+saved4+"<br/>");
 document.write("<br/>");
 let saved5 = 20;
 saved5 = null;
 document.write("The value is intentionally removed or empty: "+saved5+"<br/>");
 document.write("<br/>");
 document.write("&nbsp <b>9. Objects and Symbols</b> <br/>");
 document.write("<br/>");
 let person = { 
    firstname:'Kaleab',
    lastname:'Shawel'
 };
 document.write("This is a typeof value: "+ typeof person+"<br/>");
 document.write("<br/>");
 document.write("This is the name of the object: "+ person.firstname+ " "+ person.lastname+"<br/>");
 document.write("</center>");
 document.write("<br/>");