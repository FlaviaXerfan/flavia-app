import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { styles } from './style'; 

interface Props{
    imageSource: ImageSourcePropType;
    label: string;
}
export const HighlightBox : React.FC<Props> = ({ imageSource, label }) => {
    return (
        <View style={styles.highlightBox}>
            <Image source={imageSource} style={styles.highlightImage} />
            <Text style={styles.highlightText}>{label}</Text>
        </View>
    );
};