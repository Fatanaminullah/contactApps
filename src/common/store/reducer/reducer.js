import * as actionType from './../action/action-type';

const initialState = {
  listContact: [
    {
      id: '31241241',
      avatar: '',
      nama: 'Fatan Aminullah',
      phoneNumber: '082113705067',
    },
    {
      id: '31241242',
      avatar: '',
      nama: 'Fatan Aminullah 1',
      phoneNumber: '082113705068',
    },
    {
      id: '31241243',
      avatar: '',
      nama: 'Fatan Aminullah 2',
      phoneNumber: '082113705069',
    },
    {
      id: '31241244',
      avatar: '',
      nama: 'Fatan Aminullah 3',
      phoneNumber: '082113705060',
    },
    {
      id: '31241245',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
    {
      id: '31241246',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
    {
      id: '31241247',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
    {
      id: '31241248',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
    {
      id: '31241249',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
    {
      id: '31241240',
      avatar: '',
      nama: 'Fatan Aminullah 4',
      phoneNumber: '082113705061',
    },
  ],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionType.GET_LIST_CONTACT:
      return {...state, listContact: payload};
    default:
      return state;
  }
}