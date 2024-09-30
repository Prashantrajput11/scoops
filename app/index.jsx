import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { router } from "expo-router";
import tw from "../lib/tailwind";

const index = () => {
	return (
		<SafeAreaView>
			<Text style={tw`text-rose-300`}>index</Text>

			<Button title="go to welcome" onPress={() => router.push("welcome")} />
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({});
