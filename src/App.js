import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes,listAdlines } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setAdLines] = useState([]);

  useEffect(() => {
    fetchAdLines();
  }, []);

async function fetchAdLines() {
  const apiData = await API.graphql({ query: listAdlines });
  const notesFromAPI = apiData.data.listAdlines.items;
  setAdLines(notesFromAPI);
}
  

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <Heading level={2}>Current AdLines</Heading>
      <View margin="3rem 0">
        
{notes.map((note) => (
  <Flex
    key={note.dim_ad_id}
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Text as="span">{note.ad_name}</Text>
    <Text as="span">{note.dim_ad_id}</Text>
    <Text as="span">{note.campaign_name}</Text>
    <Text as="span">{note.advertiser_name}</Text>
    <Text as="span">{note.campaign_goal}</Text>
  </Flex>
))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
