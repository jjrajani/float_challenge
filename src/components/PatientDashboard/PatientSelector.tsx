import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Search from "@mui/icons-material/Search";
import ListCard, { ListCardItem } from "@/components/ListCard";

interface PatientSelectorProps {
  listItems: ListCardItem[];
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PatientSelector = ({
  listItems,
  onFilterChange,
}: PatientSelectorProps) => {
  return (
    <Stack spacing={2} sx={{ minWidth: 250 }}>
      <Stack spacing={1}>
        <Typography variant="h2">Patients</Typography>
        <TextField
          id="patients-filter"
          label="Patient Name or ID"
          variant="outlined"
          onChange={onFilterChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
      <ListCard items={listItems} />
    </Stack>
  );
};

export default PatientSelector;
