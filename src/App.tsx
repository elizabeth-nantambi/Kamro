import "./App.css";
import Summary from "./assets/components/InvoiceSummary";
import Discounting from "./assets/components/InvoiceDiscount";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <div className="form-title">INVOICE & DISCOUNTING APPLICATION</div>
      <div className="app-wrapper">
        <div className="form-grid">
          <div className="form-left">
            <div className="form-section-title">
              <u>INVOICE SUMMARY</u>
            </div>
            <Summary />
          </div>
          <div className="form-right">
            <div className="form-section-title">
              <u>INVOICE DISCOUNTING APPLICATION DETAILS</u>
            </div>
            <Discounting />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
