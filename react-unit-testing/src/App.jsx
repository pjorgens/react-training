import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { InvoiceDetails } from './components/InvoiceDetails'

function App() {

  return (
    <>
      <InvoiceDetails
        invoiceNumber={100}
        customerName={"Dev Inc."}
        amount={250.27}
        dueDate={"09 October 2025"}
        taxRate={0.25}
        status={"paid"}
      ></InvoiceDetails>
    </>
  )
}

export default App
