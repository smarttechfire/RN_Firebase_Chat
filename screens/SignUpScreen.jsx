import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

import { BGImage, Logo } from "../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";
import { avatars } from "../utils/support";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const SignUpScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url)
  const [isavatarMenu, setIsAvatarMenu] = useState(false)

  const navigation = useNavigation();

  const handleAvatar = (item) => {
    setAvatar(item?.image.asset.url);
    setIsAvatarMenu(false);
  }

  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BGImage}
        resizeMode="cover"
        className="h-65"
        style={{ width: screenWidth }}
      />

    {
      isavatarMenu && (
        <>
        {/* list of avatars sections */}
        <View 
          className="absolute inset-0 z-10"
          style={{width: screenWidth,height: screenHeight}}
        >
          <ScrollView>
              <BlurView 
                className="w-full h-full px-4 py-16 flex-row flex-wrap items-center justify-center"
                tint="light"
                intensity={100}
                style={{width: screenWidth,height: screenHeight}}
              >
                  {
                    avatars?.map((item) =>(
                      <TouchableOpacity
                        onPress={() => handleAvatar(item)}
                        className="w-20 h-20 p-1 rounded-full border-2 border-primary relative"
                        key={item._id}
                      >
                        <Image source={{uri: item?.image.asset.url}} className=" w-full h-full" resizeMode="contain"/>
                      </TouchableOpacity>
                    ))
                  }

              </BlurView>
          </ScrollView>
        </View>
      </>
      )
    }

      {/* Main View */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-40 flex items-center justify-start px-6 py-6 space-y-6">
        <Image source={Logo} className=" w-14 h-14" resizeMode="contain" />
        <Text className="py-2 text-primaryText text-xl font-semibold">
          Join with us!
        </Text>

        {/* avatar section */}
        <View className="w-full flex items-center justify-center relative -my-4">
          <TouchableOpacity 
            onPress={() => setIsAvatarMenu(true)}
            className="w-20 h-20 p-1 rounded-full border-2 border-primary relative">
            <Image source={{uri : avatar}} className=" w-full h-full" resizeMode="contain" />
            <View className="w-6 h-6 bg-primary rounded-full absolute top-0 right-0 flex items-center justify-center">
              <MaterialIcons name="edit" size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full flex items-center justify-center">
          {/* alert */}

           {/* full name */}
           <UserTextInput
            placeholder="Full Name"
            isPass={false}
            setStateValue={setName}
          />

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStateValue={setEmail}
          />

          {/* password */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStateValue={email}
          />

          {/* signup button */}

          <TouchableOpacity className=" w-full px-2 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className="py2 text-white text-xl font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text>Have an account !</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className=" text-base font-semibold text-primaryBold">
                Sign In Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
