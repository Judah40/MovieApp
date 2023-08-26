import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const handleLogin = (values) => {
    // Implement your login logic here
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <TextInput
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              error={errors.password}
            />
            <Button mode="contained" onPress={handleSubmit}>
              Login
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default LoginForm;
