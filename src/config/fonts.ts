export type FontOptions =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export const AppFonts: {[Font in FontOptions]: string} = {
  100: 'Poppins-Thin',
  200: 'Poppins-ExtraLight',
  300: 'Poppins-Light',
  400: 'Poppins-Medium',
  500: 'Poppins-SemiBold',
  600: 'Poppins-Bold',
  700: 'Poppins-ExtraBold',
  800: 'Poppins-Black',
};
