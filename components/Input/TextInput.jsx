import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

export const CTextInput = ({
	label,
	placeholder,
	value,
	onChangeText,
	secureTextEntry,
	keyboardType = "default",
	errorMessage,
	autoCapitalize = "none",
	autoCorrect = false,

	...restProps
}) => {
	return (
		<View style={tw`mx-4`}>
			{label && <Text style={tw``}>{label}</Text>}
			<TextInput
				style={tw.style(
					`border-2 rounded-lg py-4 px-4`,
					errorMessage ? "border-red-500" : "border-orange-300"
				)}
				// style={tw`border-2 border-orange-300  my-4 rounded-lg  py-4 px-4`}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				autoCapitalize={autoCapitalize}
				autoCorrect={autoCapitalize}
				placeholderTextColor={
					restProps.placeholderTextColor || tw.color("bg-slate-700")
				}
				{...restProps}
			/>

			{errorMessage && (
				<Text style={tw`text-red-500 mx-4 mt-2`}>{errorMessage}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({});
