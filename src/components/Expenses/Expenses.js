import React, { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';


export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
 const filterSelectedYear = (selectedYear) => {
  setSelectedYear(selectedYear);
 };
  
 const filteredExpense = props.items.filter(expense => {
 return expense.date.getFullYear().toString() === selectedYear
 });

  return (
    <div>
     
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear}  onFilter={filterSelectedYear}/>
   
    {filteredExpense.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
      
    
    </Card>
    </div>
  );
  



}
