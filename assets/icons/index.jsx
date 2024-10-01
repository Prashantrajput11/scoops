import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Home";
import Back from "./Back";

const icons = {
	home: Home,
	back: Back,
};
const Icon = ({ name, ...props }) => {
	const IconComponent = icons[name];
	return (
		<IconComponent
			height={props.size || 24}
			width={props.size || 24}
			strokeWidth={props.strokeWidth || 1.9}
			{...props}
		/>
	);
};

export default Icon;

const styles = StyleSheet.create({});
