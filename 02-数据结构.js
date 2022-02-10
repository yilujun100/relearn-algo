// 02 | 数据结构：将"昂贵"的时间复杂度转换成"廉价"的空间复杂度
// 代码效率优化就是要将可行解提高到更优解，最终目标是：要采用尽可能低的时间复杂度和空间复杂度，去完成一段代码的开发。

// 时间昂贵、空间廉价
// 代码效率的瓶颈可能发生在时间或者空间两个方面。如果是缺少计算空间，花钱买服务器就可以了。这是个花钱就能解决的问题。
// 相反，如果是缺少计算时间，只能投入宝贵的人生去跑程序。即使你有再多的钱、再多的服务器，也是毫无用处的。相比于空间
// 复杂度，时间复杂度的降低就显得更加重要了。因此，你会发现这样的结论：空间是廉价的，而时间是昂贵的。

// 数据结构连接时空
// 假定在不限制时间、也不限制空间的情况下，你可以完成某个任务的代码的开发。这就是通常我们所说的暴力解法，更是程序优化
// 的起点。
// 例如，如果要在 100 以内的正整数中，找到同时满足以下两个条件的最小数字：
// 能被 3 整除；
// 除 5 余 2.
// 最暴力的解法就是，从 1 开始到 100，每个数字都做一次判断。如果这个数字满足了上述两个条件，则返回结果。这是一种不
// 计较任何时间复杂度或空间复杂度的、最直观的暴力解法。
// 当你有了最暴力的解法后，就需要评估当前暴力解法的复杂度了。如果复杂度比较低或者可以接受，那自然万事大吉。可如果
// 暴力解法复杂度比较高的话，那就要考虑采用程序优化的方法去降低复杂度了。
// 为了降低复杂度，一个直观的思路是：梳理程序，看其流程中是否有无效的计算或者无效的存储。
// 我们需要从时间复杂度和空间复杂度两个维度来考虑。常用的降低时间复杂度的方法有递归、二分法、排序算法、动态规划等。
// 而降低空间复杂度的方法，就要围绕数据结构做文章了。
// 降低空间复杂度的核心思路就是，能用低复杂度的数据结构能解决问题，就千万不要用高复杂度的数据结构。
// 经过了前面剔除无效计算和存储的处理之后，如果程序在时间和空间等方面的性能依然还有瓶颈，又该怎么办呢？空间是廉价的，
// 最不济也是可以通过购买更高性能的计算机进行解决的。然而时间是昂贵的，如果无法降低时间复杂度，那系统的效率就永远无法
// 得到提高。
// 如果可以通过某种方式，把时间复杂度转移到空间复杂度的话，就可以把无价的东西变成有价了。这种时空转移的思想，在实际
// 生活中也会经常遇到。
// 在程序开发中，连接时间和空间的桥梁就是数据结构。对于一个开发任务，如果你能找到一种高效的数据组织方式，采用合理的
// 数据结构的话，那就可以实现时间复杂度的再次降低。同样的，这通常会增加数据的存储量，也就是增加了空间复杂度。
// 程序优化最核心的思路：
// ! 第一步，暴力解法。在没有任何、空间约束下，完成代码任务的开发。
// ! 第二步，无效操作处理。将代码中的无效计算、无效存储剔除，降低时间或空间复杂度。
// ! 第三步，时空转换。设计合理数据结构，完成时间复杂度向空间复杂度的转移。
// 降低复杂度的案例
// 第 1 个例子，假设有任意多张面额为 2 元、3 元、7 元的货币，现要用它们凑出 100 元，求总共有多少种可能性。
const s1 = () => {
  let count = 0;
  for (let i = 0; i <= 100 / 7; i++) {
    for (let j = 0; i <= 100 / 3; j++) {
      for (let k = 0; k <= 100 / 2; k++) {
        if (i * 7 + j * 3 + k * 2 === 100) {
          count += 1;
        }
      }
    }
  }
  return count;
};
// console.log(s1());
// 在这段代码中，使用了 3 层的 for 循环。从结构上来看，是很显然的 O(n^3) 的时间复杂度。然而，仔细观察就会发现，
// 代码中最内层的 for 循环是多余的。因为，当你确定了要用 i 张 7 元和 j 张 3 元时，只需要判断用有限个 2 元能否
// 凑出 100 - 7*i- 3*j 元就可以了。因此，代码改写如下：
const s2 = () => {
  let count = 0;
  for (let i = 0; i <= 100 / 7; i++) {
    for (let j = 0; j <= 100 / 3; j++) {
      if (100 - i * 7 - j * 3 >= 0 && (100 - i * 7 - j * 3) % 2 === 0) {
        count += 1;
      }
    }
  }
  return count;
};
console.log(s2());
// 经过改造后，代码的结构由 3 层 for 循环，变成了 2 层 for 循环。很显然，时间复杂度就变成了 O(n^2)。这样的代码
// 改造，就是利用了方法论中的步骤二，将代码中的无效计算、无效存储剔除，降低时间或空间复杂度。

// 再看第二个例子。查找出一个数组中，出现次数最多的那个元素的数值。例如，输入数组 a = [1, 2, 3, 4, 5, 5, 6] 中，
// 查找出出现次数最多的数值。从数组中可以看出，只有 5 出现了 2 两次，其余都是 1 次。显然 5 出现的次数最多，则输出 5.
// 解法一：采用两层 for 循环完成计算。第一层循环，对数组每个元素遍历。第二层循环，则是对第一层遍历的数字，去遍历计算
// 其出现的次数。这样，全局再同时缓存一个出现次数最多的元素及其次数就可以了。
const s3 = () => {
  const a = [1, 2, 3, 4, 5, 5, 6];
  let maxVal = -1;
  let timeMax = 0;
  let timeTmp = 0;
  for (let i = 0; i < a.length; i++) {
    timeTmp = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        timeTmp += 1;
      }
    }
    if (timeTmp > timeMax) {
      timeMax = timeTmp;
      maxVal = a[i];
    }
  }
  return maxVal;
};
console.log(s3());
// 在这段代码中，采用了两层 for 循环，很显然时间复杂度就是 O(n^2)。而且代码中，几乎没有冗余的无效计算。如果还需要再去
// 优化，就要考虑采用一些数据结构方面的手段，来把时间复杂度转移到空间复杂度了。
// 这个问题能否通过一次 for 循环就找到答案呢？一个直观的想法是，一次循环的过程中，我们同步记录下每个元素出现的次数。最后，
// 再通过查找次数最大的元素，就得到了结果。
// 具体而言，定义一个 k-v 结构的字典，用来存放元素-出现的次数的 k-v 关系。那么首先通过一次循环，将数组转变为元素-出现次数
// 的一个字典。接下来，再去遍历一遍这个字典，找到出现次数最多的那个元素，就能找到最后的结果了。
const s4 = () => {
  const a = [1, 2, 3, 4, 5, 5, 6];
  const d = new Map();
  for (let i = 0; i < a.length; i++) {
    if (d.has(a[i])) {
      d.set(a[i], d.get(a[i]) + 1);
    } else {
      d.set(a[i], 1);
    }
  }
  let valMax = -1;
  let timeMax = 0;
  for (let key of d.keys()) {
    if (d.get(key) > timeMax) {
      timeMax = d.get(key);
      valMax = key;
    }
  }
  return valMax;
};
console.log(s4());
// 代码结构上，有两个 for 循环。不过，这两个循环不是嵌套关系，而是顺序执行关系。其中，第一个循环实现了数组转字典的过程，也就是
// O(n) 的复杂度。第二个循环再次遍历字典找到出现次数最多的那个元素，也是一个 O(n) 的时间复杂度。
// 因此，总体的时间复杂度为 O(n) + O(n)，就是 O(2n),根据复杂度与具体的常系数无关的原则，也就是O(n) 的复杂度。空间方面，由于
// 定义了 k-v 字典，其字典的个数取决于输入数组元素的个数。因此，空间复杂度增加为 O(n)。
// 这段代码的开发，就是借鉴了方法论中的步骤三，通过采用更复杂、高效的数据结构，完成了时空转移，提高了空间复杂度，让时间复杂度
// 再次降低。

// 总结
// 无论什么难题，降低复杂度的方法就是这三个步骤。只要你能深入理解这里的核心思想，就能把问题迎刃而解。
// ! 第一步，暴力解法。在没有任何时间、空间约束下，完成代码任务的开发。
// ! 第二步，无效操作处理。将代码中的无效计算、无效存储剔除，降低时间或空间复杂度。
// ! 第三步，时空转换。设计合理数据结构，完成时间复杂度向空间复杂度的转移。
