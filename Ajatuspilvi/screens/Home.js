import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import Comments from '../components/Comments'; // Import the Comment component

export default function Home({ route, navigation }) {
  const params = route.params;
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]); // State for storing comments

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Handle the submission of the message
    console.log('Message:', message);
    // Add the new comment to the comments state
    setComments([...comments, message]);
    // Reset the message field
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../wallpaper.jpg')} style={styles.imageBackground}>
        <View style={styles.content}>
          {/* Render the comments */}
          {comments.map((comments, index) => (
            <Comments key={index} sender="User" message={comments} />
          ))}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            value={message}
            onChangeText={handleMessageChange}
          />
          <Button style={styles.sendbtn} title="Send" onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'fill',
    width: 500,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end', // Align content to the bottom
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 60,
    paddingHorizontal: 10, // Add some horizontal padding
    paddingBottom: 10, // Add some bottom padding
  },
  input: {
    flex: 1,
    marginRight: 10,
        backgroundColor: '#FFF',
    padding: 10,
    borderWidth: 1,
    marginLeft: 50,
    marginRight: 10,
    borderRadius: 30,
    width: 500,
  },
  button: {
    borderRadius: 30,
  }
});
