import {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const AppModals = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.container}>
      <Button title={'Open Modal'} onPress={() => setOpenModal(true)} />
      <Modal
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
        transparent={true}
        animationType={'slide'}>
        <View style={styles.modal}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{'Hey This is Modal'}</Text>
            <Button title="Close Modal" onPress={() => setOpenModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
  },
  innerContainer: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 50,
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default AppModals;
