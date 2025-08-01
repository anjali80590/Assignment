const { readEmployees, writeEmployees } = require("../models/employeeModel");

// Get all employees
const getAllEmployees = (req, res) => {
  const employees = readEmployees();
  res.json(employees);
};

// Add new employee (Admin only)
const addEmployee = (req, res) => {
  const { name, position, department, salary, status } = req.body;
  if (!name || !position || !department || !salary || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const employees = readEmployees();
  const newEmployee = {
    id: employees.length ? employees[employees.length - 1].id + 1 : 1,
    name,
    position,
    department,
    salary,
    status,
  };

  employees.push(newEmployee);
  writeEmployees(employees);

  res
    .status(201)
    .json({ message: "Employee added successfully", employee: newEmployee });
};

// Update employee (Admin/HR)
const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, position, department, salary, status } = req.body;

  const employees = readEmployees();
  const index = employees.findIndex((emp) => emp.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ error: "Employee not found" });

  if (name !== undefined) employees[index].name = name;
  if (position !== undefined) employees[index].position = position;
  if (department !== undefined) employees[index].department = department;
  if (salary !== undefined) employees[index].salary = salary;
  if (status !== undefined) employees[index].status = status;

  writeEmployees(employees);
  res.json({
    message: "Employee updated successfully",
    employee: employees[index],
  });
};

// Delete employee (Admin only)
const deleteEmployee = (req, res) => {
  const { id } = req.params;
  let employees = readEmployees();
  const index = employees.findIndex((emp) => emp.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ error: "Employee not found" });

  const deleted = employees.splice(index, 1);
  writeEmployees(employees);

  res.json({ message: "Employee deleted successfully", deleted });
};

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
