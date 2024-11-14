import React, { useState } from "react";
import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style";
import LogoImage from "../../assets/icons8-spotify-250.png";
import { TextInput } from "react-native";
import { ButtonLogin } from "../../components/ButtonLogin";
import GoogleIcon from '../../assets/icons-google.png';
import FacebookIcon from '../../assets/facebook.png';
import AppleIcon from '../../assets/icons-apple.png';
import EyeIcon from '../../assets/olho-aberto.png';
import EyeOffIcon from '../../assets/olho-fechado.png';

export const Login = () => {
    const [credenciais, setCredenciais] = useState({
        email: "",
        senha: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    function handleLogin(): void {
        throw new Error("Function not implemented.");
    }

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
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={credenciais.email}
                onChangeText={(text) =>
                    setCredenciais({ ...credenciais, email: text })
                }
            />
            <Text style={styles.subtitle}>Senha</Text>

            <View style={styles.passwordContainer}>
            <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                placeholder="Senha"
                value={credenciais.senha}
                onChangeText={(text) =>
                    setCredenciais({ ...credenciais, senha: text })
                }
            />
            <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}>
                <Image
                    source={showPassword ? EyeOffIcon : EyeIcon}
                    style={styles.eyeIcon}
                />
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.textPassaword}>Esqueceu sua senha?</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};
