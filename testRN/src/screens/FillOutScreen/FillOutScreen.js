import React, {useState} from 'react';
import { SafeAreaView, View, Text, Modal, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../styles/global';
import CustomButton from '../../components/CustomButton';
import DataForm from '../DataFormScreen/DataFormScreen';
import CustomCard from '../../components/CustomCard';
import { useNavigation } from '@react-navigation/native';

const StartUpScreen = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [profiles, setProfiles] = useState([]);

    const addProfile = (profile) => {
        setProfiles((currentProfiles) => {
            return [profile, ...currentProfiles]
        });
        setModalOpen(false);
    }

    const navigation = useNavigation()

    return (
            <SafeAreaView style={globalStyles.root}>
                <Text style={globalStyles.title}>Who's travelling?</Text>
                    <FlatList
                        data={profiles}
                        renderItem={({ item } ) => (
                            <TouchableOpacity>
                                <CustomCard>
                                    <Text style={globalStyles.text}>{ item.name }</Text>
                                </CustomCard>
                            </TouchableOpacity>
                        )}
                    />


                <Modal visible={modalOpen} animationType= "slide"> 
                    <SafeAreaView style={globalStyles.modalContent}>
                        <Text style={globalStyles.title}>   Who's this?</Text>
                        <DataForm addProfile={addProfile} />
                    </SafeAreaView>
                    <CustomButton
                            type='TERTIARY'
                            text="CANCEL"
                            onPress={() => setModalOpen(false)}
                    />
                </Modal>
                <View style={globalStyles.multiButtons}>
                        <CustomButton
                            type= 'SECONDARY'
                            text="ADD PEOPLE"
                            onPress={() => setModalOpen(true)}
                        />
                        <CustomButton
                            type= 'FOURTH'
                            text="GO!"
                            onPress={() => navigation.navigate('Home')}
                           // onPress={() => console.log(profiles)}
                        />
                </View>
            </SafeAreaView>
    );
};

export default StartUpScreen;