import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    test1:'',
    test2:'',
    id:'',
    sideBarTitle:'',
    tableTitle:[],
    tableData:[],
    historyTableData:[],
    hide:true,
    HistoryDetail:[],
    resultShowTable: []
  },
  mutations:{
    // 保存
    saveTest1(state,test1){
      state.test1 = test1;
    },
    saveTest2(state,test2){
      state.test2 = test2;
    },
    saveSideBarTitle(state,sideBarTitle){
      state.sideBarTitle = sideBarTitle;
    },
    saveId(state,id){
      state.id = id;
    },
    saveTableTitle(state,tableTitle){
      state.tableTitle = tableTitle;
    },
    saveTableData(state,tableData){
      state.tableData = tableData;
    },
    saveHistoryTableData(state,historyTableData){
      state.historyTableData = historyTableData;
    },
    saveHide(state,hide){
      state.hide = hide;
    },
    saveHistoryDetail(state,HistoryDetail){
      state.HistoryDetail = HistoryDetail;
    },
    saveResultShowTable(state,resultShowTable){
      state.resultShowTable = resultShowTable;
    },
  }
})
