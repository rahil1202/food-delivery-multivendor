import { verticalScale, scale } from '../../utils/scaling'
import { Dimensions, StyleSheet } from 'react-native'
const windowWidth = Dimensions.get('window').width
import { alignment } from '../../utils/alignment'

const styles = (props = null) =>
  StyleSheet.create({
    flex: {
      flex: 1
    },
    mainItemsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scale(20),
      marginTop: scale(16),
      marginBottom: scale(30)
    },
    mainItem: {
      padding: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      width: windowWidth / 2 - 30,
      borderRadius: 8,
      justifyContent: 'space-between'
    },
    popularMenuImg: {
      width: '100%',
      aspectRatio: 15 / 8
    },

    screenBackground: {
      backgroundColor: props != null ? props.themeBackground : '#FFF',
      ...alignment.PBlarge
    },
    mainContentContainer: {
      width: '100%',
      height: '100%',
      alignSelf: 'center'
    },

    addressbtn: {
      backgroundColor: props != null ? props.lightHorizontalLine : '#f0f0f0',
      marginLeft: scale(10),
      marginRight: scale(10),
      marginBottom: scale(10),
      borderRadius: scale(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: scale(5),
      ...alignment.PLmedium,
      ...alignment.PRmedium
    },
    addNewAddressbtn: {
      padding: scale(5),
      ...alignment.PLmedium,
      ...alignment.PRmedium
    },
    addressContainer: {
      width: '100%',
      ...alignment.PTsmall,
      ...alignment.PBsmall
    },
    addButton: {
      backgroundColor: props !== null ? props.newheaderColor : 'transparent',
      width: '100%',
      height: scale(40),
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    addressSubContainer: {
      width: '90%',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    content: {
      ...alignment.PTlarge
    },
    modal: {
      backgroundColor: props != null ? props.cartContainer : '#FFF',
      paddingTop: scale(10),
      borderTopEndRadius: scale(20),
      borderTopStartRadius: scale(20),

      shadowOpacity: 0
    },
    addressTextContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    addressTick: {
      width: '10%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginRight: scale(5)
    },
    overlay: {
      backgroundColor:
        props != null ? props.backgroundColor2 : 'rgba(0, 0, 0, 0.5)'
    },
    handle: {
      width: scale(150),
      backgroundColor: props != null ? props.backgroundColor : 'transparent'
    },
    relative: {
      position: 'relative'
    },
    placeHolderContainer: {
      backgroundColor: props != null ? props.cartContainer : '#B8B8B8',
      borderRadius: scale(3),
      elevation: scale(3),
      marginBottom: scale(12),
      padding: scale(12)
    },
    brandsPlaceHolderContainer: {
      backgroundColor: props != null ? props.cartContainer : '#B8B8B8',
      borderRadius: scale(3),
      paddingHorizontal: scale(20)
    },
    height200: {
      height: scale(200)
    },
    height80: {
      height: scale(80)
    },
    placeHolderFadeColor: {
      backgroundColor: props != null ? props.fontSecondColor : '#B8B8B8'
    },
    emptyViewContainer: {
      width: '100%',
      height: verticalScale(40),
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchList: {
      marginBottom: 70
    },
    errorViewContainer: {
      marginTop: verticalScale(30),
      marginHorizontal: scale(10),
      justifyContent: 'center',
      alignItems: 'center'
    },
    mL5p: {
      ...alignment.MLsmall
    },
    homeIcon: {
      color: props !== null ? props.darkBgFont : '#000',
      width: '15%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleAddress: {
      width: '55%',
      justifyContent: 'center'
    },
    labelStyle: {
      textAlignVertical: 'bottom',
      fontSize: scale(14),
      fontWeight: '700',
      textAlign: 'left'
    },
    addressDetail: {
      // width: '80%',
      alignSelf: 'flex-end',
      fontSize: scale(4),
      fontWeight: '300',
      textAlign: 'justify',
      paddingLeft: scale(38)
    }
  })
export default styles
