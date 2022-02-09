// 对于输入的数组，输出与之逆序的数组。例如，输入 a = [1, 2, 3, 4, 5],输出 [5, 4, 3, 2, 1]
// 方法一：建立并初始化数组 b，得到一个与输入数组等长的全零数组。通过一个 for 循环，从左到右将 a 数组的元素，从右到左地赋值到 b 数组中，
// 最后输出数组 b 得到的结果
// 时间复杂度：O(n) 空间复杂度：O(n)
/* const reverseArray = arrIn => {
  const len = arrIn.length;
  const b = new Array(len).fill(null);
  for (let i = 0; i < len; i++) {
    b[len - i - 1] = arrIn[i];
  }
  return b;
};
const a = [1, 2, 3, 4, 5];
console.log(reverseArray(a)); */

// 方法二：定义缓存变量 tmp, 接着通过一个 for 循环，从 0 遍历到 a 数组长度的一半（即 len(a)/2）。每次遍历执行的是什么内容？就是交换首尾
// 对应的元素。最后打印数组 a, 得到结果。
// 时间复杂度：O(n) 空间复杂度：O(1)
const reverseArray = arrIn => {
  let tmp = 0; // 空间方面，我们定义了一个 tmp 变量，它与数组长度无关。也就是说，输入是 5 个元素的数组，需要一个 tmp 变量；输入是 50 个元素的数组，依然只需要一个 tmp 变量。因此，空间复杂度与输入数组长度无关，即 O(1)
  for (let i = 0; i < arrIn.length / 2; i++) {
    tmp = arrIn[i];
    arrIn[i] = arrIn[arrIn.length - i - 1];
    arrIn[arrIn.length - i - 1] = tmp;
  }
  return arrIn;
};
const a = [1, 2, 3, 4, 5];
console.log(reverseArray(a));

// 对于同一个问题，采用不同的编码方法，对时间和空间的消耗是有可能不一样的。因此，工程师在写代码的时候，一方面要完成任务目标；另一方面，也要
// 考虑时间复杂度和空间复杂度，以求用尽可能少的时间损耗和尽可能少的空间损耗去完成任务。

// 时间复杂度与代码的结构有着非常紧密的关系；而空间复杂度与数据结构的设计有关。
// 例1，定义了一个数组 a = [1, 4, 3], 查找数组 a 中的最大值
// 实现方法，暂存当前最大值并把所有元素遍历一遍即可。因为代码的结构上需要使用一个 for 循环，对数组所有的元素处理一遍，所以时间复杂度为 O(n)
const findMaxVal = () => {
  const a = [1, 4, 3];
  let maxVal = -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > maxVal) {
      maxVal = a[i];
    }
  }
  return maxVal;
};
console.log(findMaxVal());

// 例2，下面的代码定义了一个数组 a = [1, 3, 4, 3, 4, 1, 3]，并会在这个数组中查找出现次数最多的那个数字
const findTheMostFrequentNumber = () => {
  const a = [1, 3, 4, 3, 4, 1, 3];
  let valMax = -1;
  let timeMax = 0;
  let timeTmp = 0;
  // 第一层循环，我们对数组中的每个元素进行遍历
  for (let i = 0; i < a.length; i++) {
    timeTmp = 0;
    // 第二层循环，对于每个元素计算出现的次数，并且通过当前元素次数 timeTmp 和全局最大次数变量 timeMax 的大小关系，
    // 持续保存出现次数最多的那个元素及其出现次数。由于是双层循环，这段代码在时间方面的消耗就是 n*n 的复杂度，也就是 O(n^2)。
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        timeTmp += 1;
      }
    }
    if (timeTmp > timeMax) {
      timeMax = timeTmp;
      valMax = a[i];
    }
  }
  return valMax;
};
console.log(findTheMostFrequentNumber());

// 在这里，我们给出一些经验性的结论：
// 一个顺序结构的代码，时间复杂度是 O(1).
// 二分查找，或者更通用地说是采用分而治之的二分策略，时间复杂度都是 O(logn).
// 一个简单的 for 循环，时间复杂度是 O(n).
// 两个顺序执行的 for 循环，时间复杂度是 O(n)+O(n)=O(2n)，其实也是 O(n).
// 两个嵌套的 for 循环，时间复杂度是 O(n^2).

// 总结：
// 复杂度通常包括时间复杂度和空间复杂度。在具体计算复杂度时需要注意以下几点：
// 它与具体的常系数无关，O(n) 和 O(2n) 表示的是同样的复杂度。
// 复杂度相加的时候，选择高者作为结果，也就是说 O(n^2)+O(n) 和 O(n^2)表示的是同样的复杂度。
// O(1) 也是表示一个特殊复杂度，即任务与算例个数 n 无关。
// 复杂度细分为时间复杂度和空间复杂度，其中时间复杂度与代码结构设计高度相关；空间复杂度与代码中数据结构的选择高度相关。会计算一段代码的
// 时间复杂度和空间复杂度，是工程师的基本功。这项技能你在实际工作中一定会用到，甚至在参加互联网公司面试的时候，也是面试中的必考内容。
