import getList from '../../api';

const state = {
  list: [],
  offset: 0,
  limitation: 10,
  part: 'news'
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
  }
};

const getters = {
  homePageArticleInfo(state) {
    return state.list
  },
  homePagePartSelection(state) {
    return state.part
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