import getList from '../../api';

const state = {
  list: [],
  offset: 0,
  limitation: 10,
  part: 'news',
  partInfo: [
    {index:0,name: "新闻", part: 'news'},
    {index:1,name: "体育", part: 'sports'},
    {index:2,name: "娱乐", part: 'ent'},
    {index:3,name: "汽车", part: 'auto'},
    {index:4,name: "科技", part: 'tech'},
    {index:5,name: "财经", part: 'finance'},
    {index:6,name: "独家", part: 'exclusive'},
    {index:7,name: "和谐", part: 'society'}
  ],
  modalShowStatus: false
};

const mutations = {
  setOffset(state, offset) {
    state.offset = offset;
  },
  setLimitation(state, limitation) {
    state.limitation = limitation;
  },
  updateList(state, data) {
    let res = data.filter(doc => !state.list.find(existedDoc => existedDoc.docid === doc.docid));
    res.forEach(item => {
      state.list.push(item);
    })
  },
  resetList(state) {
    state.list = [];
  },
  setPart(state, part) {
    state.part = part;
  },
  toggleModal(state){
    state.modalShowStatus = !state.modalShowStatus
  }
};

const getters = {
  homePageArticleInfo(state) {
    return state.list
  },
  homePagePartSelection(state) {
    return state.part
  },
  homePagePartListInfo(state) {
    return state.partInfo
  },
  modalShowStatus(state) {
    return state.modalShowStatus
}
};

const actions = {
  async load({state, commit}) {
    let limitation = state.limitation;
    let offset = state.offset;
    commit('setOffset', offset + 10);
    let column = '';
    switch (state.part) {
      case 'news':
        column = 'DDBVD5B3wangning';
        break;
      case 'ent':
        column = 'BA10TA81wangning';
        break;
      case 'sports':
        column = 'BA8E6OEOwangning';
        break;
      case 'auto':
        column = 'BA8DOPCSwangning';
        break;
      case 'tech':
        column = 'BA8D4A3Rwangning';
        break;
      case 'finance':
        column = 'BA8EE5GMwangning';
        break;
      case 'exclusive':
        column = 'BAI5E21Owangning';
        break;
      default:
        column = 'DDBVD5B3wangning';
        break;
    }
    let url = '/list/' + column + '/' + offset + '-' + limitation + '.html';
    let data = await getList(url);
    commit('updateList', data);
  },
  reload({state, commit, dispatch}) {
    commit('resetList');
    commit('setOffset', 0);
    dispatch('load');
  },
  changePart({state, commit, dispatch}, part) {
    commit('setPart', part);
    dispatch('reload');
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}