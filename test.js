const dataSource = {
    chart: {
      caption: "App Publishing Trend",
      subcaption: "2012-2016",
      xaxisname: "Years",
      yaxisname: "Total number of apps in store",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      theme: "fusion",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "iOS App Store",
        data: [
          {
            value: "125000"
          },
          {
            value: "300000"
          },
          {
            value: "480000"
          },
          {
            value: "800000"
          },
          {
            value: "1100000"
          }
        ]
      },
      {
        seriesname: "Google Play Store",
        data: [
          {
            value: "70000"
          },
          {
            value: "150000"
          },
          {
            value: "350000"
          },
          {
            value: "600000"
          },
          {
            value: "1400000"
          }
        ]
      },
      {
        seriesname: "Amazon AppStore",
        data: [
          {
            value: "10000"
          },
          {
            value: "100000"
          },
          {
            value: "300000"
          },
          {
            value: "600000"
          },
          {
            value: "900000"
          }
        ]
      }
    ]
  };


//   "data": [{
//     "label": "Venezuela",
//     "value": "290"
// }, {
//     "label": "Saudi",
//     "value": "260"
// }, {
//     "label": "Canada",
//     "value": "180"
// }, {
//     "label": "Iran",
//     "value": "140"
// }, {
//     "label": "Russia",
//     "value": "115"
// }, {
//     "label": "UAE",
//     "value": "100"
// }, {
//     "label": "US",
//     "value": "30"
// }, {
//     "label": "China",
//     "value": "30"
// }]


// "chart": {
//   "caption": "Countries With Most Oil Reserves [2017-18]",
//   "subCaption": "In MMbbl = One Million barrels",
//   "xAxisName": "Country",
//   "yAxisName": "Reserves (MMbbl)",
//   "numberSuffix": "K",
//   "theme": "candy",
//   "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
//   "exportEnabled": 1,
//   "plothighlighteffect": "fadeout",
// },
// categories: [
//   {
//     category: [
//       {
//         label: "2012"
//       },
//       {
//         label: "2013"
//       },
//       {
//         label: "2014"
//       },
//       {
//         label: "2015"
//       },
//       {
//         label: "2016"
//       }
//     ]
//   }
// ],
// dataset: [
//   {
//     seriesname: "iOS App Store",
//     data: [
//       {
//         value: "125000"
//       },
//       {
//         value: "300000"
//       },
//       {
//         value: "480000"
//       },
//       {
//         value: "800000"
//       },
//       {
//         value: "1100000"
//       }
//     ]
//   },
//   {
//     seriesname: "Google Play Store",
//     renderas: "line",
//     data: [
//       {
//         value: "70000"
//       },
//       {
//         value: "150000"
//       },
//       {
//         value: "350000"
//       },
//       {
//         value: "600000"
//       },
//       {
//         value: "1400000"
//       }
//     ]
//   },
//   {
//     seriesname: "Amazon AppStore",
//     renderas: "area",
//     showanchors: "0",
//     data: [
//       {
//         value: "10000"
//       },
//       {
//         value: "100000"
//       },
//       {
//         value: "300000"
//       },
//       {
//         value: "600000"
//       },
//       {
//         value: "900000"
//       }
//     ]
//   }
// ]


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


// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import FusionCharts from "react-native-fusioncharts";

// export default class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             type: "mscombi2d",
//             width: "100%",
//             height: "100%",
//             dataFormat: "json",
//             dataSource: {
//                     "chart": {
//                         "caption": "Quarterly Revenue for FY2013-2014",
//                         "subCaption": "Harry's SuperMart",
//                         "xAxisName": "Quarter",
//                         "yAxisName": "Revenue",
//                         "numberPrefix": "$",
//                         "theme": "fusion"
//                     },
//                     "data": [
//                         {
//                             "label": "Q1",
//                             "value": "420000"
//                         },
//                         {
//                             "label": "Q2",
//                             "value": "810000"
//                         },
//                         {
//                             "label": "Q3",
//                             "value": "720000"
//                         },
//                         {
//                             "label": "Q4",
//                             "value": "550000"
//                         }
//                     ]
//             }
//         };
//         this.libraryPath = Platform.select({
//             // Specify fusioncharts.html file location
//             android: {
//                 uri: "file:///android_asset/fusioncharts.html"
//             },
//             ios: require("./assets/fusioncharts.html")
//         });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.header}>A Column 2D Chart</Text>
//                 <View style={styles.chartContainer}>
//                 <FusionCharts
//                 type={this.state.type}
//                 width={this.state.width}
//                 height={this.state.height}
//                 dataFormat={this.state.dataFormat}
//                 dataSource={this.state.dataSource}
//                 libraryPath={{ uri: 'file:///android_asset/fusioncharts.html' }} // set the libraryPath property
//                 />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10
//     },
//     header: {
//         fontWeight: "bold",
//         fontSize: 20,
//         textAlign: "center",
//         paddingBottom: 10
//     },
//     chartContainer: {
//         height: 400,
//         borderColor: "#000",
//         borderWidth: 1
//     }
// });
