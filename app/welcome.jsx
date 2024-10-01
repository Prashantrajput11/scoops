import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { Button } from "../components/Button/Button";
import tw from "../lib/tailwind";
import { router } from "expo-router";

const welcome = () => {
	return (
		<SafeAreaView style={tw`flex-1 `}>
			<Image
				source={require("../assets/images/welcome.png")}
				style={tw`h-90 w-full`}
				resizeMode="cover"
			/>

			<View style={tw`items-center`}>
				<Text style={tw`text-center text-7xl text-gray-600 font-bold`}>
					SCOOPS {""}
				</Text>

				<Text style={tw`text-2xl italic`}> Stay Connected </Text>
			</View>

			{/* Footer  */}

			<View style={tw`justify-end flex-grow`}>
				<Button
					title="Get started"
					onPress={() => router.push("signup")}
					btnStyle={tw` mx-4 `}
					textStyle={tw`text-white `}
				/>
			</View>

			<View style={tw`flex-row items-center justify-center mt-4`}>
				<Text style={tw`text-center text-primary-800`}>
					Already have an account?{" "}
				</Text>
				<Pressable onPress={() => router.push("login")}>
					<Text>Login</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default welcome;

const styles = StyleSheet.create({});
