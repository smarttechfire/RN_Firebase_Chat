import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-65"
        style={{ width: screenWidth }}
      />

      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-40 flex items-center justify-start px-6 py-6 space-y-6">
        <Image source={Logo} className=" w-14 h-14" resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Welcome Back
        </Text>
        <View className="w-full flex items-center justify-center">
          {/* alert */}

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={email}
          />

          {/* password */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={email}
          />

          {/* login button */}

          <TouchableOpacity className=" w-full px-2 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py2 text-white text-xl font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text className=" text-base font-semibold text-primaryBold">
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
