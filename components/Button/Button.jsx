import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

export const Button = ({
	title,
	onPress,
	disabled,
	loading = false,
	btnStyle,
	textStyle,
	children,
	...btnProps
}) => {
	return (
		<Pressable
			disabled={disabled || loading}
			onPress={onPress}
			style={tw.style("btn-primary", disabled && "bg-primary-500", btnStyle)}
			{...btnProps}
		>
			<Text style={tw.style(" btn-text text-white")}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({});
