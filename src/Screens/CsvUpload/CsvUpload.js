import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import DocumentPicker, { types } from 'react-native-document-picker'
import RNFS from 'react-native-fs';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import colors from '../../styles/colors';

export default function CsvUpload() {
    const { csvData } = useSelector(state => state?.auth)

    const [csvBeforeProcessing, setCsvBeforeProcessing] = useState();
    // select csv file on button click
    const pickCSV = () => {
        DocumentPicker.pick({
            type: types.csv,
        }).then(async (res) => {
            const content = await RNFS.readFile(res[0]?.uri);
            setCsvBeforeProcessing(content)
            actions.CSVData(content);
        }).catch((err) => console.log(err))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnStyle} onPress={pickCSV}>
                <Text style={styles.heading}>Select CSV to evaluate</Text>
            </TouchableOpacity>
            {csvBeforeProcessing && (
                <View>
                    <Text style={styles.heading}>File Content Before Selling Price:</Text>
                    <Text>{csvBeforeProcessing}</Text>
                </View>
            )
            }
            <View style={{ height: 40 }} />
            {csvBeforeProcessing && (
                <View>
                    <Text style={styles.heading}>File Content After Selling Price:</Text>
                    <Text>{csvData}</Text>
                </View>
            )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingTop: 80,
        backgroundColor: colors.graphLightGrey,
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
    heading: { fontWeight: "bold", fontSize: 16 },
    btnStyle: { backgroundColor: colors.blackOpacity25, height: 35, marginBottom: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 6 }
})