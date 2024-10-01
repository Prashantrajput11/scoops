import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../../assets/icons";
import tw from "../../lib/tailwind";

const BackButton = ({ size = 26, router }) => {
	return (
		<Pressable
			onPress={() => router.back()}
			style={tw`bg-orange-300 rounded-xl self-start ml-4 p-1.5`}
		>
			<Icon name="back" size={size} />
		</Pressable>
	);
};

export default BackButton;

const styles = StyleSheet.create({});
