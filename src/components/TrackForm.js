import React, { useContext } from 'react';
import {ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
<ScrollView>
      
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
     
      
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
</ScrollView>
    </>
  );
};

export default TrackForm;
