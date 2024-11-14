import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

interface PropsInput {
    placeHolder: string;
    typeInput?: boolean;
    valueInput: string;
    hadleFunctionInput: (value: string) => void;
    typeIcon?: string;
}

export const TextInputField = ({
    placeHolder,
    typeInput,
    valueInput,
    hadleFunctionInput,
    typeIcon,
}: PropsInput) => {
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <View style={styles.boxInput}>
            <TextInput
                onChangeText={hadleFunctionInput}
                style={styles.input}
                placeholder={placeHolder}
                placeholderTextColor="#000"
                secureTextEntry={
                    typeIcon === "password" ? viewPassword : typeInput
                }
                value={valueInput}
            />

            <View style={styles.boxIcon}>
                {typeIcon === "person" && (
                    <Icon name="person" size={24} color="#000" />
                )}

                {typeIcon === "password" && (
                    <TouchableOpacity
                        onPress={() => setViewPassword(!viewPassword)}
                    >
                        {viewPassword ? (
                            <Icon name="eye" type="feather" size={24} color="#000" />
                        ) : (
                            <Icon name="eye-off" type="feather" size={24} color="#000" />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
