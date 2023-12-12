import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#f7d102',
  },
  headerOne: {
    height: height * 0.064,
    width: '80%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    borderLeftColor: '#f3f2fd',
    borderLeftWidth: 2,
    paddingLeft: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerTwo: {
    width: '40%',
    height: height * 0.064,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
