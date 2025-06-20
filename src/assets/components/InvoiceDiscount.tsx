import { TextInput, Select, Box } from "@mantine/core";
import "@mantine/core/styles.css";

export default function DiscountingApplicationForm() {
  return (
    <Box maw={600} mx="auto" mt="xl">
      <div className="app-ref">
        <TextInput
          label="Application Ref"
          placeholder="System generated"
          data-autofill
        />
        <TextInput
          label="Date of Application"
          placeholder="Auto-filled"
          disabled
        />
      </div>
      <div className="discounting-application">
        <TextInput
          label="Discount Amount"
          placeholder="Enter discount amount"
          type="number"
          withAsterisk
        />
        <TextInput
          label="Discount Percentage"
          placeholder="%"
          type="number"
          withAsterisk
        />
      </div>

      <Select
        label="Credit Tenor"
        placeholder="Select tenor"
        data={["30 days", "60 days", "90 days"]}
        withAsterisk
      />
      <Select
        label="Fee Recovery Mode"
        placeholder="Select mode"
        data={["Upfront", "Deferred"]}
        withAsterisk
      />
      <h3>
        <u>Fees</u>
      </h3>
      <div className="rate">
        <Select
          label="Standard Rate (%)"
          placeholder="Autofill based on client Tenor"
          data={["5%", "7.5%", "10%"]}
          data-autofill
          withAsterisk
        />
        <TextInput
          label="Concession Rate (%)"
          placeholder="Optional rate"
          type="number"
        />
      </div>
      <div className="fees">
        <TextInput
          label="Discount Fees"
          placeholder="Enter fee"
          type="number"
          withAsterisk
        />
        <TextInput
          label="Net Discount Amount"
          placeholder="Enter amount"
          type="number"
          withAsterisk
        />
      </div>
    </Box>
  );
}
