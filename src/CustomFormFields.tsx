import { View, TextField, useAuthenticator } from '@aws-amplify/ui-react';

export default function CustomFormFields() {
  const { validationErrors } = useAuthenticator();

  return (
    <View>
      <TextField
        name="email"
        label="Email"
        placeholder="Enter email"
        hasError={!!validationErrors.email}
        errorMessage={validationErrors.email?.[0]} 
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        hasError={!!validationErrors.password}
        errorMessage={validationErrors.password?.[0]} 
      />
      <TextField
        name="customUsername"
        label="Username"
        placeholder="Enter username"
        onChange={(e) => {
          localStorage.setItem('customUsername', e.target.value);  // Store for DB
        }}
      />
    </View>
  );
}
