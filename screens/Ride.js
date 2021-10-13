import { BarCodeScanner } from "expo-barcode-scanner";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class Ride extends Component{

    constructor(props){
        super(props);
        this.state = {
            domState:"normal",
            hasCameraPermissions:null,
            scanned: false,
            scannedData:""
        }
    }

    getCameraPermissions = async(domState) => {
        const { status } = await 
        
        Permissions.askAsync(Permissions.CAMERA);
    
        this.setState({
          hasCameraPermissions: status === "granted",
          domState: domState,
          scanned: false
    });
}

handleBarCodeScanned = async ({ type, data }) => {
        this.setState({
          scannedData:data,
          domState: "normal",
          scanned: true
        });
    }


    render() {
        const { domState,hasCameraPermissions,scanned,scannedData } =
        this.state;
            if(domState === "scanner"){
                return(
                    <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined :
                    this.handleBarCodeScanned}
                    />
                );
            }        

            return(
                <View>
                    <Text>
                        {hasCameraPermissions ? scannedData : "Request for Camera Permission"}
                    </Text>
                    <TouchableOpacity
                        styles={[{marginTop:25}]}
                        onPress={()=>this.getCameraPermissions("scanner")}
                        >
                            <Text styles={[{marginTop:25}]} >Scan QR Code</Text>
                    </TouchableOpacity>
                </View>
        );
    }
};

