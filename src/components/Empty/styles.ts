import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
emptyComponent:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderColor: theme.colors.base.gray400,
    borderEndColor: theme.colors.base.gray600,
    borderStartColor: theme.colors.base.gray600,
    borderTopColor: theme.colors.base.gray400,
    borderBottomColor: theme.colors.base.gray600,
    borderWidth: 1,
},
image:{
    marginBottom: 16,
},
textBold:{
    fontSize: 14,
    fontFamily: theme.font_family.bold,
    color: theme.colors.base.gray300,
},
textRegular:{
    fontFamily: theme.font_family.regular,
    
}

})