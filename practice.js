let person = new Object();

person["first Name"] = "Tony";
person["lastname"]= "There";

let firstNameProperty = "Firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "113st.";
person.address.city = "city";
person.address.state = "US"

console.log(person.address.street);
