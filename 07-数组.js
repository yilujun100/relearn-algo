// 07 | 数组：如何实现基于索引的查找？
// 由于栈和队列是特殊的线性表，本质上它们都可以被看作是一类基本结构。而数组则可以看成是线性表的一种推广，它属于另外一种基本的数据结构。
// 接下来我们就来学习数组的概念以及如何用数组实现增删查的操作。

// 数组是什么
// 数组是数据结构中的最基本结构，几乎所有的程序设计语言都把数组类型设定为固定的基础变量类型。我们可以把数组理解为一种容器，它可以用来
// 存放若干个相同类型的数据元素。
// 例如：
// 存放的数据是整数型的数组，称作整形数组；
// 存放的数据是字符型的数组，则称作字符数组；
// 另外还有一类数组比较特殊，它是数组的数组，也可以叫作二维数组。
// 如果用数学的方式来看，我们可以把普通的数组看成是一个向量，那么二维数组就是一个矩阵。不过，二维数组对数据的处理方式并没有太多特别之处。
// 数组可以把这些具有相同类型的元素，以一种不规则的顺序进行排列，这些排列好的同类数据元素的集合就被称为数组。
// 数组在内存中是连续存放的，数组内的数据，可以通过索引值直接取出得到。
// 实际上数组的索引就是对应数组空间，所以我们在进行新增、删除、查询操作的时候，完全可以根据根据代表数组空间位置的索引值进行。也就是说，
// 只要记录该数组头部的第一个数据位置，然后累加空间位置即可。

// 数组的基本操作
// 数组在存储数据时是按照顺序存储的，并且存储数据的内存也是连续的，这就造成了它具有增删困难、查找容易的特点。同时，栈和队列是加了限制的
// 线性表，只能在特定的位置进行增删操作。相比之下，数组并没有这些线坠，可以在任意位置增删数据，所以数组的增删操作会更为多样。
// 数组的新增操作
// 数组新增数据有两个情况：
// 第一种情况，在数组的最后增加一个新的元素。此时新增一条数据后，对原数据产生没有任何影响。可以直接通过新增操作，赋值或者插入一条新的
// 数据即可。时间复杂度是 O(1)。
// 第二种情况，如果是在数组中间的某个位置新增数据，那么情况就完全不一样了。这是因为，新增了数据之后，会对插入元素位置之后的元素产生影响，
// 具体为这些数据的位置需要依次向后挪动 1 个位置。时间复杂度是 O(n)。
// 数组的删除操作
// 数组删除数据也有两种情况：
// 第一种情况，在这个数组的最后，删除一个数据元素。由于此时删除一条数据后，对原数据没有产生任何影响。我们可以直接删除该数据即可，时间
// 复杂度是 O(1)。
// 第二种情况，在这个数组的中间某个位置，删除一条数据。同样的，这两种情况的区别在于，删除数据之后，其他数据的位置是否发生改变。由于此时
// 的情况和新增操作高度类似，就不再赘述。
// 数组的查找操作
// 相比于复杂度较高的增删操作，数组的查找操作就方便一些了。由于索引的存在，数组基于尾椎的查找操作哦比较容易实现。我们可以索引值，直接在
// O(1) 时间复杂度内查找到某个为之一的元素。
// 例如，查找数组中第三个位置的元素，通过 a[2] 就可以直接取出来。但对于链表系的数据结构，是没有这个优势的。
// 不过，另外一种基于数值的查找方法，数组就没有什么优势了。例如，查找数值为 9 的元素是否出现过，以及如果出现过，索引值是多少。这样基于
// 数值属性的查找操作，也是需要整体遍历一遍数组的。和链表一样，都需要 O(n) 的时间复杂度。
// 上面的操作，在很多高级编程语言都已经封装了响应的函数方法，是不需要自己独立开发的。例如，新增系列的 push(), unshift(), concat() 和
// splice()，删除系列的 pop(),shift() 和slice()，查找系列的 indexOf() 和 lastIndexOf() 等等。不过别被迷惑，即使是封装好了的函数，
// 其时间复杂度也不会发生改变。依然是我们上面分析的结果，这些底层原理是需要理解并掌握的。
// 数组增删查操作的特点
// 数组增删查的操作相比栈、队列来说，方便更多，操作更为灵活，这都是由它们数据结构的特点决定的。接下来，归纳一下数组增删查的时间复杂度。
// 增加：若插入数据在最后，则时间复杂度为 O(1)；如果中间某处插入数据，则时间复杂度为 O(n)。
// 删除：对应位置的删除，扫描哦全数组，时间复杂度为 O(n)。
// 查找：如果只需根据所有致癌进行一次查找，时间复杂度是 O(1)。但是要在数组中查找一个数值满足指定条件的数据，则时间复杂度是 O(n)。
// 实际上数组是一种相当简单的数据结构，其增删查的时间复杂度相对于链表来说整体上是更优的。那么链表存在的价值又是什么呢？
// 首先，链表的长度是可变的，数组的长度是固定的，在申请数组的长度时就已经在内存中开辟了若干个空间。如果没有引用 ArrayList 时，数组
// 申请的空间永远是我们在估计了数据的大小后才执行，所以在后期维护中也相当麻烦。
// 其次，链表不会根据有序位置存储，进行插入数据元素时，可以用指针来充分利用内存空间。数组是有序存储的，如果想充分利用内存的空间就只能选择
// 顺序存储，而且需要在不取数据、不删除数据的情况下才能实现。

// 数组的案例
// 例题，假设数组存储了 5 个评委对 1 个运动员的打分，且每个评委的打分都不相等。现在需要你：
// 用数组按照连续顺序保存，去掉一个最高分和一个最低分后的 3 个打分样本；
// 计算这 3 个样本的平均分并打印。
// 要求是，不允许再开辟 O(n) 空间复杂度的复杂数据结构。
// 我们先分析一下题目：第一个问题，要输出删除最高分和最低分后的样本，而且要求是不允许再开辟复杂空间。因此，我们只能在原数组中找到最大值
// 和最小值并删除。第二个问题，基于删除后得到的数组，计算平均值。所以解法如下：
// 数组一次遍历，过程中记录下最小值和最大值的索引。时间复杂度是 O(n)。
// 执行两次基于索引值的删除操作。除非极端情况，否则时间复杂度仍然是 O(n)。
// 计算删除数据后的数组元素的平均值。时间复杂度是 O(n)。
// 因此，O(n) + O(n) + O(n) 的结果仍然是 O(n)。
const getScore = () => {
  const a = [2, 1, 4, 5, 3];
  let maxIdx = -1,
    maxVal = -1,
    minIdx = -1,
    minVal = 99;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > maxVal) {
      maxVal = a[i];
      maxIdx = i;
    }
    if (a[i] < minVal) {
      minVal = a[i];
      minIdx = i;
    }
  }
  let idx1 = maxIdx,
    idx2 = minIdx;
  if (maxIdx < minIdx) {
    idx1 = minIdx;
    idx2 = maxIdx;
  }
  for (let i = idx1; i < a.length - 1; i++) {
    a[i] = a[i + 1];
  }
  for (let i = idx2; i < a.length - 1; i++) {
    a[i] = a[i + 1];
  }
  let sumscore = 0;
  let avg;
  for (let i = 0; i < a.length - 2; i++) {
    sumscore += a[i];
  }
  avg = sumscore / 3;
  console.log(avg);
};
console.log(getScore());

// 练习：删除排序数组中的重复项
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后的数组和新的长度，你不需要考虑数组中超出新长度后面的元素。
// 要求：空间复杂度为 O(1)，即不要使用额外的数组空间。
// 例如，给定数组 nums = [1,1,2]，函数应该返回新的长度 2，并且原数组 nums 的前两个元素被修改为 1, 2。又如，给定
// nums = [0,0,1,1,1,2,2,3,3,4]，函数应该返回新的长度 5，并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// 先来看一下复杂度。这里并没有限定时间复杂度，仅仅是要求了空间上不能定义新的数组。
// 然后来定位问题。显然这是一个数据去重的问题。
// 按照解题步骤，接下来我们需要做数据操作分析。在一个去重问题中，每次遍历的新的数据，都需要与已有的不重复数据进行对比。这时候，就需要查找了。
// 整体来看，遍历嵌套查找，就是 O(n^2) 的复杂度。如果要哦降低时间复杂度，那么可以在查找上入手，比如使用哈希表。不过很可惜，使用了哈希表
// 之后，空间复杂度就是 O(n) 。幸运的是，原数组是有序的，这就可以让查找的动作非常简单了。
// 因此，解决方案就是，一次循环嵌套查找完成。查找不可使用哈希表，但由于数组有序，时间复杂度是 O(1)。因此整体的时间复杂度就是 O(n)。
// 来看一下具体方案。既然是一次循环，那么就需要一个 for 循环对整个数组进行遍历。每轮遍历的动作是查找 nums[i] 是否已经出现过。因为数组
// 有序，因此只需要去对比 nums[i] 和当前去重数组的最大值是否相等即可。我们用一个 temp 变量保存去重数组的最大值。
// 如果二者不等，则说明是一个新的数据。我们就需要把这个新数据放到去重数组的最后，并且修改 temp 变量的值，在修改当前去重数组的长度变量
// len。直到遍历完，就得到了结果。
const removeDuplicates = nums => {
  let temp = nums[0];
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== temp) {
      nums[len] = nums[i];
      temp = nums[i];
      len++;
    }
  }
  console.log(len);
  return nums.slice(0, len);
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
