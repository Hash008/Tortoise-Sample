import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, Button, Linking } from 'react-native';
import { scale, verticalScale, moderateScale, scaleFont, fullHeight, fullWidth, constants, colors } from './utils'
import Video from 'react-native-video';
import YoutubePlayer from "react-native-youtube-iframe";
import Modal from "react-native-modal";
import { Mute, Unmute, DashBoardLogo, Truck, Gift, MMtLogo } from "./assets/images";



const Dashboard = (props) => {
    const [mute, setMute] = useState(true);
    const video = require('./assets/Video/video.mp4')
    const [mute2, setMute2] = useState(false);
    const [isVisible, setisvisible] = useState(false)


    const togglemute = useCallback(() => {
        setMute((prev) => !prev);

    }, [])

    const togglemute2 = useCallback(() => {
        setMute2((prev) => !prev);

    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
            <StatusBar
                hidden={false} translucent={false}
                networkActivityIndicatorVisible={true}
                backgroundColor={"#fff"}
                barStyle={"dark-content"}
            />
            <Modal
                deviceHeight={fullHeight}
                deviceWidth={fullWidth}
                isVisible={isVisible}
                animationIn="slideInRight"
                animationOut="slideOutRight"
            ><SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
                <StatusBar
                    hidden={false} translucent={false}
                    networkActivityIndicatorVisible={true}
                    backgroundColor={"#fff"}
                    barStyle={"dark-content"}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#fff', width: fullWidth, alignSelf: 'center', height: fullHeight, position: 'absolute' }}>
                    <TouchableOpacity onPress={() => setisvisible(false)} >
                        <Text style={{ color: 'red', alignSelf: 'center', fontWeight: '700', marginTop: verticalScale(20), fontSize: scaleFont(24), width: scale(100), textAlign: 'center' }}>Close</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontSize: scaleFont(20), fontWeight: '600', marginLeft: scale(20), marginTop: verticalScale(30) }}  >Libraries Used:</Text>
                    <View style={{ flexDirection: 'row', width: scale(340), alignSelf: 'center' }}>
                        <View style={{ color: 'grey', marginTop: verticalScale(10) }} >
                            <Text style={{ color: 'grey' }} >react-native-youtube-iframe</Text>
                            <Text style={{ color: 'grey' }} >react-native-video</Text>
                            <Text style={{ color: 'grey' }} >react-native-modal </Text>
                            <Text style={{ color: 'grey' }} >react-native-svg and</Text>
                            <Text style={{ color: 'grey' }} >react-native-svg-transformer</Text>
                        </View>
                        <View style={{ color: 'grey', marginTop: verticalScale(10) }} >
                            <Text style={{ color: 'grey' }} > :  To play the first video</Text>
                            <Text style={{ color: 'grey' }} > :  To play the second video</Text>
                            <Text style={{ color: 'grey' }} > :  For Showing this modal</Text>
                            <Text style={{ color: 'grey', }} > :  To use svg images for</Text>
                            <Text style={{ color: 'grey', }} >     better clarity</Text>
                        </View>
                    </View>

                    <View style={{ width: scale(330), alignSelf: 'center' }}>
                        <Text style={{ color: '#000', fontSize: scaleFont(20), fontWeight: '600', marginTop: verticalScale(30) }}  >Description</Text>
                        <Text style={{ color: 'grey', width: scale(330), alignSelf: 'center' }} >This project is designed using react-native --version 0.68, I have a two seperate cards to play the videos, the first video is being played using youtube Iframe , the second video is present in the local file and being played through the react-native-video library, also used svg libraries to enhance the quality of icons and images used in the project</Text>
                    </View>


                    <View style={{ width: scale(330), alignSelf: 'center', }}>
                        <Text style={{ color: 'red', fontSize: scaleFont(20), fontWeight: '600', marginTop: verticalScale(30) }}  >Note</Text>
                        <Text style={{ color: 'grey', }} >I have tried to make the functionalities similar to the figma file but for any sugesstion or review please feel free to contact me at <Text onPress={() => Linking.openURL('mailto:hpratap97@gmail.com')} style={{ color: colors.primary }} >hpratap97@gmail.com</Text>, <Text style={{ color: '#000', fontWeight: '700' }}>8958460383</Text></Text>
                    </View>

                    <View style={{ alignSelf: 'center', width: scale(330), marginTop: verticalScale(50), marginBottom: verticalScale(100) }}>

                        <Text style={{ color: '#000', fontSize: scale(20), marginTop: verticalScale(30), fontWeight: '700' }}>Regards,</Text>
                        <Text style={{ color: '#000' }}>Harsh Pratap Singh</Text>
                    </View>
                </ScrollView>
            </Modal >
            <ScrollView overScrollMode="never">
                <View style={{}}>

                    {/* Header */}
                    <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: scale(329), height: verticalScale(47.96), marginTop: verticalScale(10) }}>
                        <View>
                            <Text style={{
                                fontSize: scaleFont(12), fontWeight: "500", color: 'rgba(17, 20, 45, 0.65)'
                            }}>
                                Welcome Back
                            </Text>
                            <Text style={{
                                fontSize: scaleFont(24), fontWeight: "600", color: '#11142D'
                            }}
                            >
                                Rahul Kumar
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => setisvisible(true)}
                            style={{
                                width: verticalScale(38), height: verticalScale(38), borderRadius: verticalScale(100), shadowColor: 'green', shadowOffset: { width: 0.25, height: 0.25 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',
                            }}>
                            <DashBoardLogo />
                        </TouchableOpacity>
                    </View>

                    {/* First Card */}

                    <View style={{ width: scale(332), height: verticalScale(480.29), marginTop: verticalScale(28.72), borderRadius: verticalScale(17), alignSelf: 'center', shadowColor: colors.shadowColor, shadowOffset: { width: 0, height: 0.25 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, backgroundColor: '#fff', }}>
                        <View style={{ height: verticalScale(255), backgroundColor: '#000', borderTopLeftRadius: verticalScale(17.71), borderTopRightRadius: verticalScale(17.71), justifyContent: 'center', alignItems: 'center' }}>
                            <YoutubePlayer
                                height={verticalScale(255)}
                                width={scale(320)}
                                play={true}
                                playList={["kV__iZuxDGE"]}
                                mute={mute}
                                initialPlayerParams={{ controls: false, loop: true, rel: false, iv_load_policy: 3 }}
                            />
                            {
                                mute ? (<TouchableOpacity
                                    activeOpacity={1}
                                    onPress={togglemute}
                                    style={{
                                        width: scale(49),
                                        height: verticalScale(31),
                                        backgroundColor: 'grey',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: verticalScale(-40),
                                        marginRight: scale(11),
                                        borderRadius: verticalScale(6),
                                    }}>
                                    <Mute />
                                </TouchableOpacity>) : (<TouchableOpacity
                                    onPress={togglemute}
                                    activeOpacity={1}
                                    style={{
                                        width: scale(49),
                                        height: verticalScale(31),
                                        backgroundColor: 'grey',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: verticalScale(-40),
                                        marginRight: scale(11),
                                        borderRadius: verticalScale(6),
                                    }}
                                >
                                    <Unmute />
                                </TouchableOpacity>)
                            }
                        </View>

                        <View>
                            <Text
                                style={{ marginTop: verticalScale(13.68), fontSize: scaleFont(12), color: '#6F767E', fontWeight: "600", marginLeft: scale(19) }}
                            >
                                IPHONE SAVINGS PLAN
                            </Text>

                            <Text style={{ fontSize: scaleFont(23), fontWeight: '700', marginTop: verticalScale(5.5), width: scale(290), color: '#001B19', marginLeft: scale(19), }}>
                                Save up for the next iPhone and  <Text style={{ color: 'green' }}>get 10% Cashback!</Text>
                            </Text>

                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: verticalScale(14.11), alignItems: 'center', justifyContent: 'space-between', width: scale(293.27) }}>
                                <View>
                                    <TouchableOpacity style={{
                                        width: scale(79.26), height: verticalScale(59.45), backgroundColor: 'rgba(239, 239, 239, 1)', borderRadius: verticalScale(4), justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Truck />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: scaleFont(10), fontWeight: '600', color: 'rgba(0, 0, 0, 0.5)' }}>Priority Delivery</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={{
                                        width: scale(79.26), height: verticalScale(59.45), backgroundColor: 'rgba(239, 239, 239, 1)', borderRadius: verticalScale(4), justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Image source={require('./assets/images/Charger1.png')} style={{ marginTop: verticalScale(6) }} />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: scaleFont(10), fontWeight: '600', color: 'rgba(0, 0, 0, 0.5)' }}>Free Charger</Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={{
                                        width: scale(79.26), height: verticalScale(59.45), backgroundColor: 'rgba(239, 239, 239, 1)', borderRadius: verticalScale(4), justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Gift />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: scaleFont(10), fontWeight: '600', color: 'rgba(0, 0, 0, 0.5)' }}>Tortoise Merch</Text>
                                </View>


                            </View>

                        </View>
                    </View>

                    {/* Second Card */}
                    <View style={{ width: scale(332), height: verticalScale(531), marginTop: verticalScale(28.72), borderRadius: verticalScale(17), alignSelf: 'center', shadowColor: colors.shadowColor, shadowOffset: { width: 0, height: 0.25 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, backgroundColor: '#fff', marginBottom: verticalScale(100) }}>
                        <View style={{ height: verticalScale(420), borderTopLeftRadius: verticalScale(17), borderTopRightRadius: verticalScale(17), }}>
                            <Video source={video}
                                play={true}
                                repeat={true}
                                style={{ height: verticalScale(415), borderTopLeftRadius: verticalScale(17), borderTopRightRadius: verticalScale(17) }}
                            />
                            {
                                mute2 ? (<TouchableOpacity
                                    activeOpacity={1}
                                    onPress={togglemute2}
                                    style={{
                                        width: scale(49),
                                        height: verticalScale(31),
                                        backgroundColor: 'grey',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: verticalScale(-40),
                                        marginRight: scale(11),
                                        borderRadius: verticalScale(6),
                                    }}>
                                    <Mute />
                                </TouchableOpacity>) : (<TouchableOpacity
                                    onPress={togglemute2}
                                    activeOpacity={1}
                                    style={{
                                        width: scale(49),
                                        height: verticalScale(31),
                                        backgroundColor: 'grey',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: verticalScale(-40),
                                        marginRight: scale(11),
                                        borderRadius: verticalScale(6),
                                    }}
                                >
                                    <Unmute />
                                </TouchableOpacity>)
                            }
                            <MMtLogo style={{ marginTop: verticalScale(-55), marginLeft: scale(18) }} />
                        </View>
                        <View>
                            <Text
                                style={{ marginTop: verticalScale(13.68), fontSize: scaleFont(12), color: '#6F767E', fontWeight: "600", marginLeft: scale(19) }}
                            >
                                MAKE MY TRIP SAVINGS PLAN
                            </Text>

                            <Text style={{ fontSize: scaleFont(20), fontWeight: '700', marginTop: verticalScale(5.5), width: scale(290), color: '#001B19', marginLeft: scale(19), }}>
                                Save up for the next Vacation and <Text style={{ color: 'green' }}>get 10% Cashback!</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

export default Dashboard;


