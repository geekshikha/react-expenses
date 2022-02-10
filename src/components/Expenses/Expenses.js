import React, { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';
//import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';




export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
 const filterSelectedYear = (selectedYear) => {
  setSelectedYear(selectedYear);
 };
  
 const filteredExpenses = props.items.filter(expense => {
 return expense.date.getFullYear().toString() === selectedYear
 });

  return (
    <div>
     
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear}  onFilter={filterSelectedYear}/>
   
    <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
   
      

      
    
    </Card>
    </div>
  );
  



};
