const employee = {
  name: "Max",
  streetAddress: "5 Main Street",
};

// Creates a new object with the updated key-value pair without mutating the original employee object.
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
  // Alternate using ES6 Spread operators:
  // return { ...employee, ...{ [key]: value } }
}

// Updates the original employee object with the provided key-value pair.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Creates a new object by removing the specified key from the employee object without mutating the original object.
function deleteFromEmployeeByKey(employee, key) {
  const newObj = Object.assign({}, employee);
  delete newObj[key];
  return newObj;
  // Alternate using ES6 Spread operators:
  // const newObj = { ...employee }
  // delete newObj[key];
  // return newObj;
}

// Removes the specified key from the employee object directly, mutating the original object.
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}