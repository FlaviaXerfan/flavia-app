import {
    FlatList,
    Image,
    ImageSourcePropType,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Icon } from "react-native-elements";
import fdsImage from "../../assets/Albuns/musicRowImage/final de semana.jpg";
import amyImage from "../../assets/Albuns/highlightImage/amy.jpg";
import brunoMarsImage from "../../assets/Albuns/highlightImage/bruno-mars.jpg";
import jetlagImage from "../../assets/Albuns/highlightImage/jetlag.jpg";
import kellyImage from "../../assets/Albuns/highlightImage/kelly.jpg";
import maluImage from "../../assets/Albuns/highlightImage/malu.jpg";
import melimImage from "../../assets/Albuns/highlightImage/melim.jpg";
import onze20Image from "../../assets/Albuns/highlightImage/onze20.jpg";
import seuJorgeImage from "../../assets/Albuns/highlightImage/seu-jorge.jpg";
import luanaPradoImage from "../../assets/Albuns/newReleaseArtistImage/luana-prado.jpg";
import luanaImage from "../../assets/Albuns/newReleaseArtistImage/luana.jpg";
import userImage from "../../assets/headerUserImage/flavia.jpg";
import { styles } from "./style";
import { HighlightBox } from "../../components/HighlightBox";
import { DataAPI } from "../../Mock/Data";



export const Home = () => {

    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={styles.header}>
                    <View style={styles.headerIcons}>
                        <Image
                            style={styles.headerUserImage}
                            source={userImage}
                            alt="Usuário Spotify"
                        />

                        <TouchableOpacity style={styles.headerCategoryBtn1}>
                            <Text style={styles.headerCategoryText1}>Tudo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerCategoryBtn}>
                            <Text style={styles.headerCategoryText}>
                                Música
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerCategoryBtn}>
                            <Text style={styles.headerCategoryText}>
                                Podcast
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.highlightsSection}>
                    <HighlightBox imageSource={brunoMarsImage}label="Bruno Mars"/>
                    <HighlightBox imageSource={jetlagImage}label="Jetlag Music"/>
                    <HighlightBox imageSource={melimImage} label="Melim" />
                    <HighlightBox imageSource={onze20Image} label="Onze20" />
                    <HighlightBox imageSource={amyImage} label="Amy Winehouse"/>
                    <HighlightBox imageSource={seuJorgeImage} label="Seu Jorge"/>
                    <HighlightBox imageSource={kellyImage}label="Kelly Clarkson"/>
                    <HighlightBox imageSource={maluImage} label="MaLu" />
                </View>

                <View style={styles.newReleaseContainer}>
                    <View style={styles.newReleaseArtistInfo}>
                        <Image source={luanaImage} style={styles.newReleaseArtistImage} />
                        <Text style={styles.newReleaseArtistText}> Novo lançamento de{" "} </Text>
                        <Text style={styles.newReleaseArtistName}> Luana Prado </Text>
                    </View>

                    <View style={styles.newReleaseBox}>
                        <Image source={luanaPradoImage} style={styles.newReleaseImage}/>
                        <View style={styles.newReleaseInfo}>
                            <Text style={styles.newReleaseTitle}>RAIZ as melhores</Text>
                            <Text style={styles.newReleaseDescription}>Single • Me leva pra casa</Text>
                        </View>

                        <View style={styles.newReleaseIcons}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Icon name="add-circle-outline" size={28} color="#FFFFFF"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Icon name="play-circle-outline" size={28} color="#FFFFFF"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Sugestões de álbuns pra você</Text>

                <FlatList
                    horizontal={true}
                    data={DataAPI}
                    keyExtractor={(dados) => dados.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.cardImage}/>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardArtists}>{item.artists} </Text>
                        </View>
                    )}
                    contentContainerStyle={styles.playlistContainer}/>
            </ScrollView>

            <View style={styles.musicRow}>
                <Image source={fdsImage} style={styles.musicRowImage} />
                <View style={styles.musicRowInfo}>
                    <Text style={styles.musicRowTitle}>Final de Semana</Text>
                    <Text style={styles.musicRowArtist}>Papatinho, Seu Jorge </Text>
                </View>
                <TouchableOpacity style={styles.iconRowButton}>
                    <Icon name="devices" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRowButton}>
                    <Icon name="check-circle" size={24} color="#1ed760" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRowButton}>
                    <Icon name="play-circle" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="#FFFFFF" />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="search" size={24} color="#FFFFFF" />
                    <Text style={styles.navText}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="library-music" size={24} color="#FFFFFF" />
                    <Text style={styles.navText}>Sua Biblioteca</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
