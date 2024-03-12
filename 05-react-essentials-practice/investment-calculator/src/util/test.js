import { calculateInvestmentResults } from './investment.js'
const result = calculateInvestmentResults({ initialInvestment: 15000, annualInvestment: 900, expectedReturn: 5.6, duration: 10 })
console.log(result);

