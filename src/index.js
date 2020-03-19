import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var DisplayEmployeeInfo = (employee) => {
    return <div>
        <h1>Employee Details</h1>
        <p>
            <label>Employee ID : <b>{employee.Id}</b></label>
        </p>
        <p>
            <label>Employee Name : <b>{employee.Name}</b></label>
        </p>
        <p>
            <label>Employee Location : <b>{employee.Location}</b></label>
        </p>
        <p>
            <label>Employee Salary : <b>{employee.Salary}</b></label>
        </p>
        <Department deptName={employee.deptName} headName={employee.headName}></Department>
    </div>
}

const Department = (deptInfo) => {
    return <div>
        <p>
            Department Name : <b>{deptInfo.deptName}</b> 
        </p>
        <p>
            Department Head : <b>{deptInfo.headName}</b> 
        </p>
    </div>
}

const element = <DisplayEmployeeInfo Id="101" Name="Mahesh" Location="Hyderabad" Salary="50000"
deptName="Computers" headName="Software Engineer"></DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById('root'));

