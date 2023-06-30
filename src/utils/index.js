/**
 * 表格单元格合并多列
 * @param {Array} data 表格数据 
 * @param {Array} isH 参与合并的内容数组
 * @param {string} baseCondition 以某个条件为基础
 * @returns 
 */
export const dataMethod = (data, isH = [], baseCondition) => {
  //spanObj 存储每个key 对应的合并值
  //pos 存储的是 key合并值得索引
  let [spanObj, pos] = [{}, {}];
  //循环数据
  for (let i in data) {
    let dataI = data[i];
    //循环数据内对象，查看有多少key
    for (let j in dataI) {
      //如果只有一条数据时默认为1即可，无需合并
      if (~~i === 0) {
        spanObj[j] = [1];
        pos[j] = 0;
      } else {
        let [e, k] = [dataI, data[i - 1]];
        //判断上一级别是否存在 ，
        //存在当前的key是否和上级别的key是否一样
        //判断是否有数组规定只允许那几列需要合并单元格的
        //判断是否以某个条件为基准去合并
        const isBaseEqual = baseCondition ? e[baseCondition] === k[baseCondition] : true
        if (k && e[j] === k[j] && isBaseEqual && (!isH.length || isH.includes(j))) {
          //如果上一级和当前一级相当，数组就加1 数组后面就添加一个0
          spanObj[j][pos[j]] += 1;
          spanObj[j].push(0);
        } else {
          spanObj[j].push(1);
          pos[j] = i;
        }
      }
    }
  }
  return spanObj;
};