import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "./responsiveSize";
import colors from "./colors";

export default StyleSheet.create({
  rowSpaceBtw:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  rowSpaceBtwAlCen:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  rowAlignCen:{
    flexDirection:'row',
    alignItems:'center'
  },
  flag: { height: moderateScale(28), width: moderateScale(28), borderRadius: moderateScale(26), marginRight: moderateScale(17) },
  countryItem: {  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center', paddingVertical: moderateScaleVertical(17), borderBottomWidth: moderateScale(1), borderBottomColor: colors.greyBorderTxtInput },
  countryItemName: {
      fontSize: textScale(18)
  },
  textInput: { height: moderateScale(51), paddingHorizontal: moderateScale(15), borderRadius: moderateScale(5), marginVertical: moderateScaleVertical(15), borderWidth: 1, borderColor: colors.greyBorderTxtInput }

});

