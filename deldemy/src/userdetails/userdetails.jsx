import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native";

const UserDetails = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    cardNumber: "",
  });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <ScrollView>
      <TextInput
        placeholder="First Name"
        value={form.firstName}
        onChangeText={text => handleInputChange("firstName", text)}
      />

      <TextInput
        placeholder="Last Name"
        onChangeText={text => handleInputChange("lastName", text)}
        value={form.lastName}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => handleInputChange("email", text)}
        value={form.email}
      />

      <Picker
        selectedValue={form.state}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          handleInputChange("state", itemValue)
        }
      >
        <Picker.Item label="Maharashtra" value="MH" />
        <Picker.Item label="Gujarat" value="GJ" />
      </Picker>
      <TextInput
        placeholder="Card Number"
        onChangeText={text => handleInputChange("cardNumber", text)}
        value={form.cardNumber}
        keyboardType="numeric"
      />

      {/* Card Expiry / Card CVV , Phone */}
    </ScrollView>
  );
};

export default UserDetails;
