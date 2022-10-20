import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined,
    Home: undefined,

  };
  

  export  type PropsStack= NativeStackScreenProps<RootStackParamList>
  export  type PropsStackHome= NativeStackScreenProps<RootStackParamList, "Home">;
  export  type PropsStackLogin= NativeStackScreenProps<RootStackParamList, "Login">;