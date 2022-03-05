// 18 | 真题案例（三）：力扣真题训练
// 在备战公司面试的时候，相信你一定也刷过力扣（leetcode）的题目吧。力扣的题目种类多样，而且有虚拟社区功能，因此很多同学都喜欢在上面分享
// 习题答案。
// 毫无疑问，如果你完整地刷过力扣题库，在一定程度上能够提高你面试通过的可能性。因此，在本课时，我选择了不同类型、不同层次的力扣真题，我会
// 通过这些题目进一步讲述和分析解决数据结构问题的方法。
// 力扣真题训练
// 在看真题前，我们再重复一遍通用的解题方法论，它可以分为以下 4 个步骤：
// 复杂度分析。估算问题中复杂度的上限和下限。
// 定位问题。根据问题类型，确定采用何种算法思维。
// 数据操作分析。根据增、删、查和数据顺序关系去选择合适的数据结构，利用空间换取时间。
// 编码实现。

// 例题 1：删除排序数组中的重复项（leetcode26）
// 【题目】给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后的数组和新的长度，你不需要考虑数组中超出新
// 长度后面的元素。
// 要求：空间复杂度为 O(1),即不要使用额外的数组空间。
// 例如，给定数组 nums = [1, 1, 2],函数应该返回新的长度 2，并且原数组 nums 的前两个元素被修改为 1,2。又如，给定 nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
// 函数应该返回新的长度 5，并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// 【解析】我们先来看一下复杂度。这里并没有限定时间复杂度，仅仅是要求了空间上不能定义新的数组。
// 然后我们来定位问题。显然这是一个数据去重的问题。
// 按照解题步骤，接下来我们需要做数据操作分析。在一个去重问题中，每次遍历的新的数据，都需要与已有的不重复数据进行对比。这时候，就需要查找了。
// 整体来看，遍历嵌套查找，就是 O(n^2) 的复杂度。如果要降低时间复杂度，那么可以在查找上入手，比如使用哈希表。不过很可惜，使用了哈希表之后，
// 空间复杂度就是 O(n)。幸运的是，原数组是有序的，这就可以让查找的动作非常简单了。
// 因此，解决方案上就是，一次循环嵌套查找完成。查找不可使用哈希表，但由于数组有序，时间复杂度是 O(1)。因此整体的时间复杂度就是 O(n)。
// 我们来看一下具体方案。既然是一次循环，那么就需要一个 for 循环对整个数组进行遍历。每轮遍历的动作是查找 nums[i] 是否已经出现过。因为数组
// 有序，因此只需要去对比 nums[i] 和当前去重数组中的最大值是否相等即可。我们用一个 temp 变量保存去重数组的最大值。
// 如果二者不等，则说明是一个新的数据。我们就需要把这个数据放到去重数组的最后，并且修改 temp 变量的值，再修改当前去重数组的长度变量 len。
// 直到遍历完，就得到了结果。
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
};
// 例题 2：查找两个有序数组合并后的中位数
// 【题目】 两个有序数组查找合并之后的中位数。给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出这两个正序数组合在
// 一起之后的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空，所有的数字全都不相等。还可以再假设，如果数字个数为偶数个，中位数就是中间偏左的那个元素。
// 例如：nums1 = [1, 3, 5, 7, 9]
// nums2 = [2, 4, 8, 12]
// 输出 5。
// 【解析】我们先看一下复杂度的分析。这里的 nums1 和 nums2 都是有序的，这让我们第一时间就想到了归并排序。方法很简单，我们把两个数组合并，
// 就得到了合在一起后的有序数组。这个动作的时间复杂度是 O(m+n)。接着，我们从数组中就可以直接取出中位数了。很可惜，这并不满足题目的时间复杂度
// O(log(m+n)) 的要求。
// 接着，我们来看一下这个问题的定位。题目中有一个关键字，那就是“找出”。很显然，我们要找的目标就藏在 nums1 或 nums2 中。这明显就是一个查找
// 问题。而在查找问题中，我们学过的知识是分治法下的二分查找。
// 回想一下，二分查找适用的重要条件就是，原数组有序。恰好，在这个问题中 nums1 和 nums2 分别都是有序的。而且二分查找的时间复杂度是 O(logn),
// 这和题目中给出的时间复杂度 O(log(m + n))的要求也是不谋而合。因此，经过分析，我们可以大胆猜测，此题极有可能要用到二分查找。
// 我们再来看一下数据结构方面。如果要用二分查找，就需要用到若干个指针，去约束查找范围。除此之外，并不需要去定义复杂的数据结构。也就是说，空间
// 复杂度是 O(1)。
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const x = nums1.length,
    y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    let partitionX = ((low + high) / 2) | 0,
      partitionY = ((x + y + 1) / 2 - partitionX) | 0;

    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x = y) & 1) return Math.max(maxLeftX, maxLeftY);
      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};
