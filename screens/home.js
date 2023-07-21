import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import *as Permissions from 'expo-permissions'
import * as FaceDetector from 'expo-face-detector';
import Filter1 from './filter1';
import Filter2 from './filter2';
import Filter3 from './filter3';
import Filter4 from './filter4';
import Filter5 from './filter5';
import Filter6 from './filter6';
import Filter7 from './filter7';
import Filter8 from './filter8';
import Filter9 from './filter9';
import Filter10 from './filter10';

var data = [
    {
        "id": "1",
        "image" : require("../assets/glasses.png")
    },
    {
        "id": "2",
        "image" : require("../assets/glasses-round.png")
    },
    {
        "id": "3",
        "image" : require("../assets/Frapp-02.png")
    },
    {
        "id": "4",
        "image" : require("../assets/Frapp-03.png")
    },
    {
        "id": "5",
        "image" : require("../assets/Frapp-04.png")
    },
    {
        "id": "6",
        "image" : require("../assets/Frapp-05.png")
    },
    {
        "id": "7",
        "image" : require("../assets/Frapp-06.png")
    },
    {
        "id": "8",
        "image" : require("../assets/Frapp-07.png")
    },
    {
        "id": "9",
        "image" : require("../assets/Frapp-08.png")
    },
    {
        "id": "10",
        "image" : require("../assets/Frapp-09.png")
    },
]
 
export default class Main extends Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            faces:[],
            current_fliter: 'filter_1'
        }
    }

    componentDidMount(){
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission())
    }

    onCameraPermission=(status)=>{
        this.setState({hasCameraPermissions:status.status==="granted"})
    }

    onFaceDetected=(faces)=>{
        this.setState({faces:faces})
    }

    onFaceDetectionError=(error)=>{
      console.log(error)
    }

    render() {
        const {hasCameraPermissions} = this.state;
        if (hasCameraPermissions === null){
            return (
                <View></View>
            )
        }

        if (hasCameraPermissions === false){
            return (
                <View style={styles.container}>
                    <Text>No access to Camera</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/> 
                <View style={styles.headingContainer}>
                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                        <Text style={styles.titleText1}FR></Text>
                        <Text style={styles.titleText2}>APP</Text>
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                        <Text style={styles.subheading1}>Try Out</Text>
                        <Text style={styles.subheading2}> Cool Frames</Text>
                    </View>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                    style={{flex:1}}
                    type={Camera.Constants.Type.front}
                    faceDetectorSettings={{
                        mode: FaceDetector.FaceDetectorMode["1"],
                        detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                        runClassifications: FaceDetector.FaceDetectorClassifications.all
                    }}
                    onFacesDetected={this.onFaceDetected}
                    onFacesDetectionError={this.onFaceDetectionError}
                    />
                   {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_7") {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_8") {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_9") {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_10") {
                                return <Filter10 key={face.faceID} face={face} />
                            }
                        })
                    }
                </View>
              <View style={styles.filterContainer}>
                <ScrollView style={{ flexDirection: 'row' }}
                horizontal
                showsHorizontalScrollIndicator = {false}
                >
                {data.map((i)=>{
                    return(
                        <TouchableOpacity style={styles.filterImageContainer}
                        onPress = {()=>{
                            this.setState({current_filter: `filter_data.id`})
                        }}
                        >
                         <Image source={filter_data.image} style={{ height: 32, width: 80 }}/>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
              </View>
              <View style={styles.actionContainer}></View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6278e4"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: "100%",
        padding: RFValue(20)
    },
    contentText: {
        fontSize: RFValue(17),
        fontStyle: 'italic',
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#efb141",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(25),
        fontStyle: 'italic',
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1
    }
});