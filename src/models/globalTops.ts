export default {
  namespace: 'globalTop',
  state: {
    demo: '',
    token:''
  },
  reducers: {
    save(state: object, action: any) {
      return { ...state, ...action.state };
    },
  },
};
