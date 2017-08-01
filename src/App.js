import React from 'react'
import { AppRegistry, Image, StyleSheet, Text, View, ProgressBar} from 'react-native'

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})
// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
const App = () => (
  <div>
    <Card>
      <Title>App Card</Title>
      <Photo uri="https://www.weibangong.com/images/static/logo@2x.png" />
    </Card>
    <ProgressBar style={{ borderRadius: 10, height: 10 }} trackColor="#D1E3F6" indeterminate={true}/>
  </div>
)


export default App;
