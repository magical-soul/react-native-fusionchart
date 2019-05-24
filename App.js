
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.activatedColor = '#8cd46a';
        this.apiCaller = null;
        this.state = {
            selectedTheme: 'fusion',
            btnDisabled: true,
            type: 'column2d',
            width: '100%',
            height: '100%',
            dataFormat: 'json',
            chartType: '',
            dataSource: {
                    // Chart Configuration 
                    "chart": {
                        "caption": "Countries With Most Oil Reserves [2017-18]",
                        "subCaption": "In MMbbl = One Million barrels",
                        "xAxisName": "Country",
                        "yAxisName": "Reserves (MMbbl)",
                        "numberSuffix": "K",
                        "theme": "fusion",
                        "borderColor": "#666666",
                        "borderThickness": "4",
                        "borderAlpha": "80"
                    },
                    // Chart Data
                    "data": [{
                        "label": "Venezuela",
                        "value": "290"
                    }, {
                        "label": "Saudi",
                        "value": "260"
                    }, {
                        "label": "Canada",
                        "value": "180"
                    }, {
                        "label": "Iran",
                        "value": "140"
                    }, {
                        "label": "Russia",
                        "value": "115"
                    }, {
                        "label": "UAE",
                        "value": "100"
                    }, 
                    {
                        //Setting data as vline data
                        "vline": "true",
                        //Adding label
                        "label": "Weekend Start",
                        "linePosition": "0.7"
                      },{
                        "label": "US",
                        "value": "30"
                    }, {
                        "label": "China",
                        "value": "30",
                        "displayValue": "Year's best"
                    }]
            }
        };
        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            android: { uri: 'file:///android_asset/fusioncharts.html' },
            ios: require('./assets/fusioncharts.html')
        });
    }

    changeTheme(theme) {
        this.setState({
            selectedTheme: theme
        })
        this.apiCaller(`window.chartObj.setChartAttribute('theme', '${theme}')`);
    }

    changeType(type) {
        this.setState({ chartType: type }, () => {
            this.apiCaller(`window.chartObj.chartType('${type}')`);
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Change chart type at runtime</Text>
                <View style={styles.chartContainer}>
                    <FusionCharts
                        type={this.state.type}
                        width={this.state.width}
                        height={this.state.height}
                        dataFormat={this.state.dataFormat}
                        dataSource={this.state.dataSource}
                        libraryPath={this.libraryPath} // set the libraryPath property
                        onInitialized={caller => {
                            this.setState({ btnDisabled: false });
                            this.apiCaller = caller;
                            if (this.state.chartType === '')
                                this.setState({ chartType: this.state.type });
                        }}
                    />
                </View>
                <Text style={styles.info}>Press button to change chart type</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        disabled={
                            this.state.chartType === '' || this.state.chartType == 'column2d'
                        }
                        style={{ margin: 8 }}
                        title="Column2D"
                        onPress={() => this.changeType('column2d')}
                    />
                    <Button
                        disabled={
                            this.state.chartType === '' || this.state.chartType == 'pie2d'
                        }
                        title="Pie2D"
                        onPress={() => this.changeType('pie2d')}
                    />
                    <Button
                        disabled={
                            this.state.chartType === '' || this.state.chartType == 'bar2d'
                        }
                        title="Bar2D"
                        onPress={() => this.changeType('bar2d')}
                    />
                </View>
                <Text style={styles.info}>Press button to change chart theme</Text>
                <View style={styles.buttonContainer}>
                <Button title="Fusion" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fusion')} color={this.state.selectedTheme === 'fusion' ? this.activatedColor : 'blue'} />
                <Button title="Fint" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fint')} color={this.state.selectedTheme === 'fint' ? this.activatedColor : 'blue'} />
                <Button title="Ocean" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('ocean')} color={this.state.selectedTheme === 'ocean' ? this.activatedColor : 'blue'} />
                <Button title="Candy" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('candy')} color={this.state.selectedTheme === 'candy' ? this.activatedColor : 'blue'} />
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10
    },
    chartContainer: {
        height: 400,
        borderColor: '#000',
        borderWidth: 1
    },
    buttonContainer: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    instruction: {
        fontSize: 15
    },
    info: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5
    }
});


// share

// import React, {Component} from 'react';
// import {Share, Button} from 'react-native';

// export default class App extends Component {
//   onShare = async () => {
//     try {
//       const result = await Share.share({
//         message:
//           'React Native | A framework for building native apps using React',
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   render() {
//     return <Button onPress={this.onShare} title="Share" />;
//   }
// }


// modal 


// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// export default class App extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="fade"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }



