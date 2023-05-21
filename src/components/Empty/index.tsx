import { Image, Text, View  } from "react-native";
import { styles } from "./styles";
import clipboard from '../../assets/Clipboard.png';

export function Empty(){
    return <View style={styles.emptyComponent}>
        <Image source={clipboard} style={styles.image} />
        <Text style={styles.textBold}> Sem tarefas cadastradas</Text>
        <Text style={[styles.textBold , styles.textRegular] }> Crie tarefas e crie itens a fazer</Text>
        
    </View>
}

//estilos entre colchete para que uma sobreponha a outra.