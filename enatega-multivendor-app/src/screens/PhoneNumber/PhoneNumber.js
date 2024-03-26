import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
  TextInput,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spinner from '../../components/Spinner/Spinner'
import styles from './styles'
import TextDefault from '../../components/Text/TextDefault/TextDefault'
import { alignment } from '../../utils/alignment'
import screenOptions from './screenOptions'
import CountryPicker from 'react-native-country-picker-modal'
import usePhoneNumber from './usePhoneNumber'
import PhoneInput from 'react-native-phone-number-input'
import { useTranslation } from 'react-i18next'
import { Ionicons } from '@expo/vector-icons'
import { scale } from '../../utils/scaling'

function PhoneNumber(props) {
  const {
    phone,
    setPhone,
    phoneError,
    country,
    countryCode,
    registerAction,
    onCountrySelect,
    currentTheme,
    loading
  } = usePhoneNumber()

  const { t } = useTranslation()

  useLayoutEffect(() => {
    props.navigation.setOptions(
      screenOptions({
        fontColor: currentTheme.fontMainColor,
        backColor: currentTheme.themeBackground,
        iconColor: currentTheme.iconColorPink,
        navigation: props.navigation
      })
    )
  }, [props.navigation])
  const phoneInput = useRef < PhoneInput > null

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={[
        styles().flex,
        { backgroundColor: currentTheme.themeBackground }
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles().flex}>
        <ScrollView
          style={styles().flex}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          <View style={styles(currentTheme).mainContainer}>
            <View style={styles().subContainer}>
              <View style={styles().logoContainer}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={30}
                  color="black"
                />
              </View>
              <View>
                <TextDefault
                  H3
                  bolder
                  textColor={currentTheme.fontfourthColor}
                  style={{
                    ...alignment.MTlarge,
                    ...alignment.MBmedium
                  }}>
                  {t('yourPhoneNumber')}
                </TextDefault>
                <TextDefault
                  H5
                  bold
                  textColor={currentTheme.fontSecondColor}
                  style={{
                    paddingBottom: scale(5)
                  }}>
                  {t('secureAccountWithPhone')}
                </TextDefault>
              </View>
              <View style={styles().form}>
                <View style={styles().number}>
                  <View
                    style={[
                      styles(currentTheme).textField,
                      styles().countryCode
                    ]}>
                    <CountryPicker
                      countryCode={countryCode}
                      onSelect={country => onCountrySelect(country)}
                      withAlphaFilter
                      withFilter
                    />
                    <TextDefault
                      style={{ marginTop: Platform.OS === 'android' ? 7 : 10 }}>
                      {country?.cca2}
                    </TextDefault>
                  </View>
                  <View
                    style={[
                      styles(currentTheme).textField,
                      styles().phoneNumber,
                      phoneError && styles(currentTheme).errorInput
                    ]}>
                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                      <Text>+{country.callingCode[0]} </Text>
                      <TextInput
                        placeholder={t('mobileNumber')}
                        style={{
                          marginTop: Platform.OS === 'android' ? -4 : 0
                        }}
                        placeholderTextColor={currentTheme.fontSecondColor}
                        value={phone}
                        onChangeText={e => {
                          if (e >= 0 || e <= 9) {
                            setPhone(e)
                          }
                        }}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                </View>
                {phoneError && (
                  <View style={{ marginLeft: '30%' }}>
                    <TextDefault
                      style={styles().error}
                      bold
                      textColor={currentTheme.textErrorColor}>
                      {phoneError}
                    </TextDefault>
                  </View>
                )}
              </View>
            </View>
            <View style={{ width: '100%', marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => registerAction()}
                activeOpacity={0.7}
                style={styles(currentTheme).btn}>
                <TextDefault H4 textColor={currentTheme.fontFourthColor} bold>
                  {loading ? (
                    <Spinner size="small" backColor="transparent" spinnerColor={currentTheme.main} />
                  ) : (
                    t('continueBtn')
                  )}
                </TextDefault>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PhoneNumber
