import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ProposButton } from "./type";

export const ButtonLogin = ({
    title,
    propsBackgroundColor,
    handleFunction,
    icon,
}: ProposButton) => {
    return (
        <TouchableOpacity
            onPress={handleFunction}
            activeOpacity={0.2}
            style={[
                styles.styleButton,
                {
                    backgroundColor: propsBackgroundColor
                        ? propsBackgroundColor
                        : "#000",
                },
            ]}
        >
            {icon && <Image source={icon} style={styles.icon} />}
            <Text style={styles.text}>{title ? title : "Entrar"}</Text>
        </TouchableOpacity>
    );
};
