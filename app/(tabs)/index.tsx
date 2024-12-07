import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarouselComponent from '@/components/CarouselComponent'

const index = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <CarouselComponent />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})