import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InvoiceDetails } from './InvoiceDetails'

describe("InvoiceDetails", () => {

    const defaultProps = {
        invoiceNumber: "100",
        customerName: "Test Inc.",
        amount: 250.27,
        dueDate: "01 January 2026",
        taxRate: 0.25,
        status: "paid",
    }

    it("Renders all invoice fields correctly", () => {

        render(<InvoiceDetails {...defaultProps} />);

        expect(screen.getByText("#Invoice: 100")).toBeInTheDocument()
        expect(screen.getByText("Customer: Test Inc.")).toBeInTheDocument()
        expect(screen.getByText("Amount: $250.27")).toBeInTheDocument()
        expect(screen.getByText("Due Date: 01 January 2026")).toBeInTheDocument()
        expect(screen.getByText("Tax Rate: 25%")).toBeInTheDocument()
        expect(screen.getByText("Total: $312.84")).toBeInTheDocument()
        expect(screen.getByText("paid")).toBeInTheDocument()
    })

    it("adds class 'paid' when invoice is paid", () => {

        const { container } = render(<InvoiceDetails {...defaultProps} />);
        const statusElement = container.querySelector('.status')

        expect(statusElement).toBeInTheDocument();
        expect(statusElement.classList.contains('paid')).toBe(true);
    })

    it("adds class 'paid' when invoice is overdue", () => {

        const modifiedProps = { ...defaultProps, status: 'overdue' }
        const { container } = render(<InvoiceDetails {...modifiedProps} />);
        const statusElement = container.querySelector('.status')

        expect(statusElement).toBeInTheDocument();
        expect(statusElement.classList.contains('overdue')).toBe(true);
    })

})

// Testing can be split up into 3 different scenarios:
//
// Unit Testing -> Smaller logic pieces/functionalities
// Integration Testing -> Adding RESTApis/External dependencies
// E2E (end-to-end testing) -> simulating user input/GUI testing
