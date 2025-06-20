import "@mantine/core/styles.css";

// import classes from "./ContainedInput.module.css";
import { TextInput, Select, Box, NativeSelect } from "@mantine/core";

export default function InvoiceSummaryForm() {
  const clients = ["client1", "client2", "client3"];
  const buyers = ["buyer1", "buyer2", "buyer3"];
  const currency = [
    { value: "eur", label: "🇪🇺 EUR" },
    { value: "usd", label: "🇺🇸 USD" },
    { value: "cad", label: "🇨🇦 CAD" },
    { value: "gbp", label: "🇬🇧 GBP" },
    { value: "aud", label: "🇦🇺 AUD" },
  ];
  const select = (
    <NativeSelect
      data={currency}
      rightSectionWidth={28}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: 92,
          marginRight: -2,
        },
      }}
    />
  );

  return (
    <>
      <Box maw={600} mx="auto">
        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={clients}
          placeholder="client name"
          label="Client Name"
        />
        <TextInput
          label="Client Ref"
          placeholder="Autofil based on client"
          data-autofill
        />
        <TextInput
          label="Invoice No."
          placeholder="Enter invoice number"
          type="number"
        />
        <TextInput
          label="Invoice Date"
          placeholder="Enter invoice date"
          type="date"
        />
        <TextInput
          label="Invoice Due Date"
          placeholder="Enter due date"
          type="date"
        />
        <div className="invoice-amount">
          <TextInput
            type="number"
            placeholder="1000"
            label="Invoice Amount"
            rightSection={select}
            rightSectionWidth={92}
          />
          <TextInput label="Invoice" placeholder="invoice" type="number" />
        </div>

        <Select
          mt="md"
          comboboxProps={{ withinPortal: true }}
          data={buyers}
          placeholder="choose buyer"
          label="Buyer"
        />
      </Box>
    </>
  );
}
