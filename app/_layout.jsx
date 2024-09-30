import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				headerStyle: {
					backgroundColor: "#f4511e",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			{/* Optionally configure static options outside the route.*/}
			<Stack.Screen name="welcome" options={{}} />
		</Stack>
	);
};

export default _layout;

const styles = StyleSheet.create({});
