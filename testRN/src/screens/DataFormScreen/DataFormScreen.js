import React from 'react';
import { TextInput, SafeAreaView, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';

export default function DataForm({ addProfile }) {

    return(
        <SafeAreaView>
            <Formik
                initialValues={{ name: '', nationality: '', age: '', gender: '', sexuality: '', allergy: ''}}
                onSubmit={(values) => {
                    addProfile(values);
                }}
            >
                {(formikProps) => (
                    <SafeAreaView style={globalStyles.card}>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Name'
                            onChangeText={formikProps.handleChange('name')}
                            value={formikProps.values.title}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Nationality'
                            onChangeText={formikProps.handleChange('nationality')}
                            value={formikProps.values.nationality}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Age'
                            type='number'
                            onChangeText={formikProps.handleChange('age')}
                            value={formikProps.values.age}
                            keyboardType= 'numeric'
                        />  

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Gender'
                            onChangeText={formikProps.handleChange('gender')}
                            value={formikProps.values.gender}
                        />  

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Sexuality'
                            onChangeText={formikProps.handleChange('sexuality')}
                            value={formikProps.values.sexuality}
                        />  

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Food allergy'
                            onChangeText={formikProps.handleChange('allergy')}
                            value={formikProps.values.allergy}
                        />  

                        <View style={globalStyles.multiButtons}>
                            <CustomButton
                                type= 'FOURTH'
                                text="+ INFO"
                                onPress={() => console.log("random")}
                            />
                            
                            <CustomButton
                                type= 'SECONDARY'
                                text="ADD"
                                onPress={formikProps.handleSubmit}
                            /> 
                        </View>   
                    </SafeAreaView>
                )}
            </Formik>
        </SafeAreaView>
    );
};
