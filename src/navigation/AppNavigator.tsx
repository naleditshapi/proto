import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types';

// Import screens
import { MyListingsScreen } from '../screens/MyListingsScreen';
import { RoleSelectionScreen } from '../screens/RoleSelectionScreen';

/**
 * Navigation Setup
 * 
 * Think of this like a map of your app:
 * - Each screen is a location
 * - Navigation takes you between locations
 * - Stack = screens pile on top of each other (can go back)
 */

// Create the stack navigator with our type definitions
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * AppNavigator component
 * This wraps your entire app and handles all routing
 */
export const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="RoleSelection"
                screenOptions={{
                    // Default styling for all screens
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#333',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // Animation between screens
                    animation: 'slide_from_right',
                }}
            >
                {/* Role Selection Screen - Entry point */}
                <Stack.Screen
                    name="RoleSelection"
                    component={RoleSelectionScreen}
                    options={{
                        headerShown: false, // Hide header for splash-like screen
                    }}
                />

                {/* Requester Flow */}
                <Stack.Screen
                    name="RequesterHome"
                    component={MyListingsScreen}
                    options={({ navigation }) => ({
                        title: 'My Listings',
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('RoleSelection')}
                                style={{ marginLeft: 8 }}
                            >
                                <Text style={{ color: '#2196F3', fontSize: 16 }}>← Back</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />

                {/* TODO: We'll add more screens here as we build them */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

