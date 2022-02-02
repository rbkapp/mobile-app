
declare module '*.png';
declare module '*.gif';
declare module 'base-64';
declare module 'firebase';
declare module 'validator';
declare module 'form-data';
declare module 'react-native-svg';
declare module 'react-native-webview';
declare module 'react-native-chart-kit';
declare module 'react-native-svg-charts';
declare module 'styled-components/native';
declare module 'react-native-masked-text';
declare module 'react-native-options-menu';
declare module 'react-native-snap-carousel';
declare module 'react-native-google-recaptcha-v2';
declare module 'react-native-custom-qr-codes-expo';
declare module 'react-native-vector-icons/Ionicons';
declare module '@react-native-async-storage/async-storage';
declare module 'react-native-vector-icons/MaterialCommunityIcons';

interface CameraProps {
    isVisible: boolean;
    onChangePhoto(uri: string): void;
    onCloseCamera(): void;
  }

  type FeedsTabParamList = {
    Feeds: undefined;
    FeedListOnly: undefined;
  };
