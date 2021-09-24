# expense-tracking

This is a React app built as part of a [React online course](https://www.udemy.com/share/101Wby3@B2H-tHB8Vq5CLeowwy0mgk_LJh3kKxgPbIXM1QThCfnt2JIH2wiSLDdrDDvdZ-Ts/). 

Current features:
* Add new expense via an expense form
* Have all expenses shown as card with date, name and amount
* See expense amount accumlated per month within a filtered year within a chart
* Filter after year

Here the functional component tree (doesn't include the styled component:

```bash
└── App
    ├── NewExpense
    │   └── ExpenseForm
    └── Expenses
    │   ├── ExpensesChart
    │       └── Chart
    │           └── ChartBar
    │   ├── ExpensesFilter
    │   └── ExpensesList
    │       └── ExpensesItem
    │           └── ExpensesDate
```


I've extended and adapted it quite a bit with using styled component and different design. 
I'm still planning to extend tht app with following:

* Deploying it to my personal website so you can preview it
* Redesigning the app to orange theme and own styling ideas
* Adding category field for form with predefined options (`select...items`)
* Adding import of csv files option --> so I can import my own existing expenses and use this tool myself
* Adding filter by category option
* Grouping expenses by category showing only category & via drop-down then single expenses
	* only maybe
	* it's kinda redundent when you're able to filter by category
