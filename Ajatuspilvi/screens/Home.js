import { View, Text, Button, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Comments from '../components/Comments';
import io from 'socket.io-client';

export default function Home({ route, navigation }) {
  const params = route.params;
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const socket = io('localhost:3000/');

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    console.log('Message:', message);
    setComments([...comments, message]);
    socket.emit('chatMessage', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setComments((prevComments) => [...prevComments, message]);
    });

    return () => {
      socket.off('chatMessage');
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../wallpaper.jpg')} style={styles.imageBackground}>
        <View style={styles.content}>
          {comments.map((comment, index) => (
            <Comments key={index} sender="User" message={comment} />
          ))}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            value={message}
            onChangeText={handleMessageChange}
          />
          <Button title="Send" onPress={handleSubmit} />
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
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 60,
    paddingHorizontal: 10,
    paddingBottom: 10,
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
  },
});
