"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  planType: string;
  additions: {
    refundable: boolean;
    onDemand: boolean;
    negotiable: boolean;
  };
  user: string;
  expired: Dayjs | null;
  price: string;
}

const CreateOfferForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      planType: "monthly",
      additions: {
        refundable: false,
        onDemand: false,
        negotiable: false,
      },
      user: "Jason Momoa",
      expired: dayjs(),
      price: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          maxWidth: 720,
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Create Offer
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Send onboarding offer to a new user
        </Typography>

        {/* Plan Type */}
        <FormControl component="fieldset" fullWidth margin="normal">
          <FormLabel>Plan Type</FormLabel>
          <Controller
            name="planType"
            control={control}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value="pay_as_you_go"
                  control={<Radio />}
                  label="Pay As You Go"
                />
                <FormControlLabel
                  value="monthly"
                  control={<Radio />}
                  label="Monthly"
                />
                <FormControlLabel
                  value="yearly"
                  control={<Radio />}
                  label="Yearly"
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        {/* Additions */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Additions</FormLabel>
          <Box display="flex" gap={2}>
            <Controller
              name="additions.refundable"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="Refundable"
                />
              )}
            />
            <Controller
              name="additions.onDemand"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="On Demand"
                />
              )}
            />
            <Controller
              name="additions.negotiable"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label="Negotiable"
                />
              )}
            />
          </Box>
        </FormControl>

        {/* User Dropdown */}
        <FormControl fullWidth margin="normal">
          <FormLabel>User</FormLabel>
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Select {...field} fullWidth>
                <MenuItem value="Jason Momoa">Jason Momoa</MenuItem>
                <MenuItem value="John Doe">John Doe</MenuItem>
                <MenuItem value="Emma Watson">Emma Watson</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        {/* Expired Date Picker - FIXED */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Expired</FormLabel>
          <Controller
            name="expired"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                value={field.value}
                onChange={(date) => field.onChange(date)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            )}
          />
        </FormControl>

        {/* Price Input */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Price</FormLabel>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                placeholder="Price"
                fullWidth
              />
            )}
          />
        </FormControl>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Offer
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateOfferForm;
