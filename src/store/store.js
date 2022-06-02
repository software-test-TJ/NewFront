import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    test1:'',
    test2:'',
    id:'',
    sideBarTitle:'三角形测试用例',
    tableTitle:["A","B","C"],
    tableData:[
      {A:1,B:2,C:3},{A:4,B:1312,C:31231},{A:12131,B:2,C:3},
    ],
    historyTableData:[
      {
      date: '2022-05-31',
      name: 'zch',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2022-05-31',
      name: 'zch',
      address: '上海市普陀区金沙江路 1518 弄'
    },{
      date: '2022-05-31',
      name: 'zch',
      address: '上海市普陀区金沙江路 1518 弄'
    },{
      date: '2022-05-31',
      name: 'zch',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
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
  }
})
