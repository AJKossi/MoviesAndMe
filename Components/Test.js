import React from 'react'
import { StyleSheet, View, Text,Platform,Animated,Easing } from 'react-native'
import HelloWorld from './HelloWorld'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.sequence([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 4
        }
      ),
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
}

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={[styles.animation_view, { top: this.state.topPosition }]}>
        </Animated.View>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  subview_container: {
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    height: Platform.OS === 'ios' ? 100 : 50,
    width: Platform.OS === 'ios' ? 50 : 100
  }
})

export default Test
