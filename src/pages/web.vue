<template>
  <div id="container">
    <el-col :span="4">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="20">

      <h4>1. 变量分析</h4>
        <p> 6个变量：支付金额（A）、订单状态（B）、接口包的类型（C）、涉及的商品种类（D）、支付类型（E）、发票类型（F）</p>
        <p>变量可能取值个数：3、4、6、6、8、12</p>

      <h4> 2. 正交实验法估计最少用例数</h4>
       <p> L(6^2*8^1*12^1*3^1*4^1)=2*(6-1)+(8-1)+(12-1)+(3-1)+(4-1)+1=34</p>
       <p> 即：按照估算，至少需要34个测试用例</p>
      <h4> 3. 选取合适的正交实验模板</h4>
      <p>    因素数>=6</p>
      <p>  s 对应的水平数只多不少</p>
      <p> 从给定的txt中最终选定：</p>
      <h2>2^4 , 4^8 , 8^12 , 16^1     n=128</h2>
      <webShow></webShow>

      <h3>说明：</h3>
      <el-row>
      <el-col :span="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>支付金额</span>
        </div>
        <div class="text item">
          0->货到付款无限制
        </div>
        <div class="text item">
          1->银行支付不能超出最大限额2万
        </div>
        <div class="text item">
          2->系统账户余额支付不能超出余额
        </div>
      </el-card>
      </el-col>
        <el-col :span="3">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>订单状态</span>
            </div>
            <div class="text item">
              0->正在处理
            </div>
            <div class="text item">
              1->正在送货
            </div>
            <div class="text item">
              2->处理完成
            </div>
            <div class="text item">
              3->订单取消
            </div>
          </el-card>
        </el-col>
        <el-col :span="3">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>接口包类型</span>
            </div>
            <div class="text item">
              0->正常交易包
            </div>
            <div class="text item">
              1->查询包
            </div>
            <div class="text item">
              2->退货包
            </div>
            <div class="text item">
              3->换货包
            </div>
            <div class="text item">
              4->部分退货包
            </div>
            <div class="text item">
              5->部分换货包
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>支付类型</span>
            </div>
            <div class="text item">
              0->系统账户余额支付
            </div>
            <div class="text item">
              1->货到付款
            </div>
            <div class="text item">
              2->工行账户支付
            </div>
            <div class="text item">
              3->农行账户支付
            </div>
            <div class="text item">
              4->建行账户支付
            </div>
            <div class="text item">
              5->交行账户支付
            </div>
            <div class="text item">
              6->邮储账户支付
            </div>
            <div class="text item">
              7->礼品卡支付
            </div>
          </el-card>
        </el-col>

        <el-col :span="4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>发票类型</span>
            </div>
            <div class="text item">
              0->日用品
            </div>
            <div class="text item">
              1->电脑配件
            </div>
            <div class="text item">
              2->鞋
            </div>
            <div class="text item">
              3->帽
            </div>
            <div class="text item">
              4->家电
            </div>
            <div class="text item">
              5->服装
            </div>
            <div class="text item">
              6->电脑
            </div>
            <div class="text item">
              7->ipad
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>发票类型</span>
            </div>
            <div class="text item">
              8->手机
            </div>
            <div class="text item">
              9->化妆品
            </div>
            <div class="text item">
              10->食品
            </div>
            <div class="text item">
              11->其他
            </div>
          </el-card>
        </el-col>


      </el-row>
    </el-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import webShow from "../components/webShow";
export default {
  name: "web",
  components: {
    Sidebar,
    webShow
  },

}
</script>

<style scoped>

</style>
