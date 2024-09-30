import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Button } from "../components/Button/Button";
import tw from "../lib/tailwind";

const welcome = () => {
	return (
		<SafeAreaView style={tw`flex-1 `}>
			<Image
				source={require("../assets/images/welcome.png")}
				style={tw`h-90 w-full`}
				resizeMode="contain"
			/>

			<View style={tw`items-center`}>
				<Text style={tw`text-center text-4xl text-gray-600 font-bold`}>
					SCOOPS {""}
				</Text>

				<Text> Stay Connected </Text>
			</View>

			{/* Footer  */}

			<View style={tw`justify-end flex-grow`}>
				<Button
					title="Get started"
					onPress={() => {}}
					btnStyle={tw` mx-4 `}
					textStyle={tw`text-white `}
				/>
			</View>
		</SafeAreaView>
	);
};

export default welcome;

const styles = StyleSheet.create({});
