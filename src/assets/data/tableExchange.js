export default function tableExchange(array) {

    array.forEach ((item) => {

        item["用例序号"] = item.case_number;
        delete item.case_number;

        item["用例描述"] = item.description;
        delete item.description;

        item["用例设计时间"] = item.design_time;
        delete item.design_time;

        item["设计者"] = item.designer;
        delete item.designer;

        item["预期输出"] = item.expected_output;
        delete item.expected_output;

        item["输入"] = item.input;
        delete item.input;

        delete item.test_technique;


    });

  return array
}
