import axios from "axios";

export async function getTableData(id,test_technique) {
  console.log("获取table数据")
  if(id===3){
    //为给定的ID的user创建请求
    await axios.post("http://124.70.167.135:5001/computer/case/list",{
      test_technique:test_technique
      })
      .then(function(response){
        // console.info(response.data.data);//这里面是拿到的数据
        return response.data.data
      })
      .catch(function(error){
        // console.info(error)
      })
  }
}
