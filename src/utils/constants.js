import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
console.log(width)
console.log(height)
const scale1 = width / 320;

export function normalize(size) {

  const newSize = size * scale1

  if (Platform.OS === 'ios') {

    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

  } else {

    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

  }

}

// Guideline sizes are based on standard ~5" screen mobile device







export default {
  // App Settings and Name Constants
  APP_NAME: 'Instantpay',
  RECENT_NEWS_TITLE: 'InstantPay',

  // Base URL without trailing slash
  APP_BASE_URL: '#',

  // Setting Page URL's

  TERMS_AND_CON_LINK: '#',
  WEBSITE_LINK: '#',
  PRIVACY_LINK: '#',
  FEEDBACK_LINK: '#',

  // Light Theme
  LIGHT_THEME_BG: '#FFFFFF',
  LIGHT_THEME_LIGHT_BLUE_BG: '#EDF2F4',
  LIGHT_THEME_PRIMARY_COLOR: '#D7263D',
  LIGHT_THEME_TEXT_COLOR: '#676767',
  LIGHT_THEME_TEXT_COLOR_DARK: '#26262E',

  //  CARD_BACKGROUND_GREY : "#F4F4F4",

  // App Primary Font
  INTER_FONT_LIGHT: 'Inter-Light',
  INTER_FONT_MEDIUM: 'Inter-Medium',
  INTER_FONT_REGULAR: 'Inter-Regular',
  INTER_FONT_BOLD: 'Inter-Bold',
  INTER_FONT_SEMI_BOLD: 'Inter-SemiBold',
  INTER_FONT_BLACK: 'Inter-Black',
  INTER_FONT_EXTRA_BOLD: 'Inter-ExtraBold',
  INTER_FONT_MEDIUM_ITALIC: 'Inter-MediumItalic',
  INTER_FONT_BOLD_ITALIC: 'Inter-BoldItalic',


  //  Headers
  ARROW_LEFT: 1,
  ARROW_RIGHT: 1,
  DEFAULT_DURATION: 20,


  // Constant used in whole app

  //Story Screen
  business_banking_title: 'Modern Business Banking',
  business_banking_content: 'Full-featured bank account - combines banking, payments, accounting and expense management, in one place.',
  manageExistAccount_title: 'Manage Existing Accounts',
  manageExistAccount_content: 'Manage existing accounts with other banks within Instantpay, no juggling among internet banking platforms.',
  cashIn_title: 'Cash-In &',
  cashOut_title: 'Cash-Out',
  cashInOut_content: 'With a vast nationwide network, deposit or withdraw cash at your convenience from your nearest Digikendra.',
  helpdesk1_title: '24*7',
  helpdesk2_title: 'Helpdesk',
  helpdesk_content: 'Round the clock availability of customer success team over email, phone, and chat to address your concerns.',

  // AEPS Screens
  aadhar_text: 'Aadhaar ATM',
  my_price: 'My Pricing',
  mictoAtm: 'Micro ATM (AePS)',
  transactions: 'Transactions',
  sbi_text: 'Select Bank',
  bank_name: 'Bank Name',
  aadhar_no: 'Aadhaar Number',
  cust_mob_no: 'Customer Mobile Number ',
  biometric_text: 'Capture Biometrics',
  biometricT_and_C: 'I hereby give my consent and submit voluntarily at my own discretion, my Aadhaar number for the purpose of authenticating an AePS transaction on InstantPay. The Aadhaar number submitted herewith shall not be used for any purpose other than mentioned, or as per the requirements of the law.    ',
  amount_text: 'Amount',
  invalidAadhaar: 'Invalid Aadhaar Number',
  invalidMobile: 'Invalid Mobile Number',
  payment_method: 'Cash Withdrawl',
  payment_method_via: 'via Aadhaar ATM',
  order_id_connstant: 'Order ID',
  // Rating Screen
  digiKendra: 'ABC Digi Kendra',
  experienceRateText: 'Rate Your experience',
  howS_experience: 'How was your experience',
  // App Rating
  optinonText1: 'Your Opinions',
  optinonText2: 'Matter to us!',
  letUsKnowText1: 'Let us know what you feel about our services.',
  letUsKnowText2: 'Give us a quick review and help us improve?',
  areaOfImprovement: 'Area of Improvement ',

  //Explore
  logoText: 'instantpay',
  payoutText: 'Payouts',
  collectionText: 'Collection',
  dgKendraText: 'Digi Kendra',
  cardsText: 'Cards',
  marketPlaceText: 'Marketplace',
  exploreSearchPlaceholder: 'Mohan Cooperative Industrial Estate,Delhi 44',
  searchForServices: 'Search for services',



};

export const THEME_CHANGE = 'THEME_CHANGE';
export const AUTH_CHANGE = 'AUTH_CHANGE';
export const PAN_CHANGE = 'PAN_CHANGE';
