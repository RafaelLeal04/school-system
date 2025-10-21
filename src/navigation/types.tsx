export type RootStackParamList = {
  Home: undefined; 
  Second: { itemId: number }; 
  Third: { itemId: number; otherParam?: string } 
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
