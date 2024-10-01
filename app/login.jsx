import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../assets/icons/Home";
import tw from "../lib/tailwind";
import Icon from "../assets/icons";
import BackButton from "../components/BackButton/BackButton";
import { useRouter } from "expo-router";
import { CTextInput } from "../components/Input/TextInput";

const Login = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={tw`flex-1 bg-orange-200  `}>
			<BackButton router={router} />

			<View style={tw`flex-1  mx-4 my-4`}>
				<Text style={tw`text-3xl font-bold`}>Hey, </Text>
				<Text style={tw`text-2xl font-semibold `}>welcome Back </Text>
				<View style={tw` mt-4 `}>
					{/* input for email */}
					<CTextInput
						placeholder={"enter email"}
						label={"email"}
						inputProps={{ placeholderTextColor: "orange" }}
					/>

					{/* input for password */}
					<CTextInput
						placeholder={"enter password"}
						secureTextEntry={true}
						label={"password"}
						restProps={{ placeholderTextColor: "orange" }}
					/>
				</View>
			</View>

			{/* Input view */}
		</SafeAreaView>
	);
};

export default Login;

const styles = StyleSheet.create({});
