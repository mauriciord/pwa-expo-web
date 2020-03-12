import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from '../shared/componentsWithStyles';

export default function AspectView(props) {
    const [layout, setLayout] = useState(null);

    const { aspectRatio = 1, ...inputStyle } = StyleSheet.flatten(props.style) || {};
    const style = [inputStyle, { aspectRatio }];

    if (layout) {
        const { width = 0, height = 0 } = layout;
        if (width === 0) {
            style.push({ width: height * aspectRatio, height });
        } else {
            style.push({ width, height: width * aspectRatio });
        }
    }

    return (
        <Image
            {...props}
            style={style}
            onLayout={({ nativeEvent: { layout } }) => setLayout(layout)}
        />
    );
}