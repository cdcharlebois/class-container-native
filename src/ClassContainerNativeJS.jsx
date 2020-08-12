import { Component, createElement } from "react";
import { View } from "react-native";
// import * as Style from "../../../../../theme/styles.js";

export const ClassContainerNativeJS = props => {
    const { content, classname } = props;
    if (!window.mx.ui.__STYLES) {
        console.error(
            `Could not find the exposed styles object at window.mx.ui.__STYLES. Are you sure this object exists?`
        );
        return null;
    }
    const foundStyle = classname.status === "available" ? window.mx.ui.__STYLES[classname.value] : null;
    return <View style={foundStyle.container}>{content}</View>;
};
ClassContainerNativeJS.displayName = "ClassContainerNative";
