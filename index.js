// Define an employee object with name and streetAddress properties
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
  };
  
  // Function to update an employee object with a new key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {

    // return { ...employee, ...{ [key]: value } }
  
    // Create a new object by copying the properties of the original employee object
    // and adding or updating the specified key-value pair
    return Object.assign({}, employee, { [key]: value });
  }
  
  // Function to destructively update an employee object with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee object directly with the specified key-value pair
    employee[key] = value;
  
    return employee;
  }
  
  // Function to delete a key from an employee object and return a new object
  function deleteFromEmployeeByKey(employee, key) {

    // const newObj = { ...employee }
  
    // Create a copy of the original employee object
    const newObj = Object.assign({}, employee);
  
    // Delete the specified key from the copy of the employee object
    delete newObj[key];
  
    return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object directly
    delete employee[key];
  
    return employee;
  }
