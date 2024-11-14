import React, { useState } from "react";
import {
    Image,
    Keyboard,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import AppleIcon from "../../assets/Icons/apple.png";
import FacebookIcon from "../../assets/Icons/facebook.png";
import GoogleIcon from "../../assets/Icons/google.png";
import LogoImage from "../../assets/Icons/spotify.png";
import { ButtonLogin } from "../../components/ButtonLogin";
import { TextInputField } from "../../components/TextInputField";
import { styles } from "./style";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleLogin(): void {
        throw new Error("Function not implemented.");
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image
                    style={styles.logoImage}
                    source={LogoImage}
                    alt="Logo Spotify"
                />
                <Text style={styles.title}>Entrar no Spotify</Text>

                <ButtonLogin
                    handleFunction={handleLogin}
                    title="Continuar com o Google"
                    icon={GoogleIcon}
                />

                <ButtonLogin
                    handleFunction={handleLogin}
                    title="Continuar com o Facebook"
                    icon={FacebookIcon}
                />
                <ButtonLogin
                    handleFunction={handleLogin}
                    title="Continuar com a Apple"
                    icon={AppleIcon}
                />
                <ButtonLogin
                    handleFunction={handleLogin}
                    title="Continuar com um número de telefone"
                />

                <Text style={styles.subtitle}>Email ou senha do usuário</Text>
                <TextInputField
                    placeHolder="Digite seu email"
                    valueInput={email}
                    hadleFunctionInput={handleEmail}
                    typeIcon="person"
                />
                <Text style={styles.subtitle}>Senha</Text>
                <TextInputField
                    placeHolder="Digite sua senha"
                    valueInput={password}
                    hadleFunctionInput={handlePassword}
                    typeInput={true}
                    typeIcon="password"
                />

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.textPassaword}>Esqueceu sua senha?</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};
