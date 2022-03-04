// 17 | 真题案例（二）：数据结构训练
// 数据结构训练题
// 例题 1：反转字符串中的单词
// 【题目】 给定一个字符串，逐个翻转字符串中的每个单词。例如，输入："This is a good example"，输出："example good a is This"。
// 如果有多余的空格需要删除。
// 【解析】首先分析一下复杂度。这里的动作可以分为拆模块和做翻转两部分。在采用比较暴力的方法时，拆模块使用一个 for 循环，做翻转也使用
// 一个 for 循环。这样双重循环的嵌套，就是 O(n^2) 的复杂度。
// 接下来定位问题。我们可以看到它对数据的顺序非常敏感，敏感点一是每个单词需要保证顺序；敏感点二是所有单词放在一起的顺序需要调整为逆序。
// 我们曾学过的关于数据顺序敏感的结构有队列和栈，也许这些结构可以适用在这个问题中。此处需要逆序，栈是有非常大的可能性被使用到的。
// 然后我们进行数据操作分析。如果要使用栈的话，从结果出发，就需要按照顺序，把 This、is、a、good、example 分别入栈。要想把它们正确
// 地入栈，就需要根据空格来拆分原始字符串。
// 因此，经过分析后，这个例子的解法为：用空格把句子分割成单词。如果发现了多余的连续空格，需要做一些删除的额外处理。一边得到单词，一边
// 把单词放入栈中。直到最后，再把单词从栈中倒出来，形成结果字符串。
const reverseWords = str => {
  const stack = [];
  let temp = '';
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== ' ') {
      temp += str.charAt(i);
    } else if (temp !== '') {
      // 如果 temp 变量不为空，则入栈
      stack.push(temp);
      temp = '';
    } else {
      // 出现多个空格的情况。此时用 continue 语句忽略
      continue;
    }
  }
  // 把最后面的一个单词入栈（它可能没有最后的空格帮助切分）
  if (temp !== '') {
    stack.push(temp);
  }
  while (stack.length) {
    result.push(stack.pop());
  }
  return result.join(' ');
};
console.log(reverseWords('This is a good example'));
// 这段代码采用了一层的 for 循环，显然它的时间复杂度是 O(n)。相比较于比较暴力的解法，它之所以降低了时间复杂度，就在于它开辟了栈的存储
// 空间。所以空间复杂度也是 O(n)。
// 例题 2：树的层序遍历
// 【题目】给定一棵树，按照层次顺序遍历并打印这棵树。例如，输入的树为：
// 则打印 16、13、20、10、15、22、21、26。格外需要注意的是，这并不是前序遍历。
// 以往我们学过的遍历方式有前序、中序和后序遍历，它们的实现方法都是通过递归。以前序遍历为例，递归可以理解为，先解决根节点，再解决左子树
// 一边的问题，最后解决右子树的问题。这很像是在用深度优先的原则去遍历一棵树。
// 现在我们的问题要求是按照层次遍历，这就跟上面的深度优先的原则完全不一样了，更像是广度优先。也就是说，从遍历的顺序来看，一会在左子树、
// 一会在右子树，会来回跳转。显然，这是不能用递归来处理的。
// 那么我们该如何解决呢？
// 我们从结果来看看这个问题有什么特点。打印的结果是 16、13、20、10、15、22、21、26.
// 从后往前看，可以发现：打印 21 和 26 之前，会先打印 22。这是一棵树的上下级关系；打印 10 和 15 之前，会先打印 13，这也是一棵树的
// 上下级关系。显然，结果对上下级关系的顺序非常敏感。
// 接着，我们发现 13 和 10、15 之间的打印关系并不连续，夹杂着右边的结点 20。也就是说，左边的优先级大于右边大于下边。
// 分析到这里，你应该能找到一些感觉了吧。一个结果序列对顺序敏感，而且没有逆序的操作，满足这些特点的数据结构只有队列。所以我们猜测这个
// 问题的解决方案，极有可能要用到队列。
// 队列只有入队列和出队列的操作。如果输出结果就是出队列的顺序，那这个顺序必然也是入队列的顺序，原因就在于队列的出入原则是先进先出。而
// 入队列的原则是，上层父节点先进，左孩子再进，右孩子最后进。
// 因此，这道题目的解决方案就是，根结点入队列，随后循环执行结点出队列并打印结果，左孩子入队列，右孩子入队列。直到队列为空。
const levelTraverse = root => {
  const queue = [];
  let current = null;
  queue.push(root); // 根节点入队
  while (queue.length) {
    current = queue.shift(); // 出队队头元素
    console.log(current.data);
    // 左子树不为空，入队
    if (current.leftChild !== null) {
      queue.push(current.leftChild);
    }
    // 右子树不为空，入队
    if (current.rightChild !== null) {
      queue.push(current.rightChild);
    }
  }
};
// 在这段代码中，首先定义了一个队列 queue，并让根节点入队列，此时队列不为空。
// 接着进入一个 while 循环进行遍历。当队列不为空的时候，首先执行出队列操作，并把结果存在 current 变量中。随后打印 current 的数值。
// 如果 current 还有左孩子或右孩子，则分别按顺序执行入队列的操作。
// 经过这段代码，可以完成的是，所有顺序都按照层级顺序入队列，且左孩子优先。这样就得到了按行打印的结果。时间复杂度是 O(n)。空间复杂度由于
// 定义了 queue 变量，因此也是 O(n)。
// 例题 3：查找数据流中的中位数
// 【题目】 在一个流式数据中，查找中位数。如果是偶数个，则返回偏左边的那个元素。
// 例如：
// 输入 1，服务端收到 1，返回 1。
// 输入 2，服务端收到 1、2，返回 1。
// 输入 0，服务端收到 0、1、2，返回 1。
// 输入 20，服务端收到 0、1、2、20，返回 1。
// 输入 10，服务端收到 0、1、2、10、20，返回 2。
// 输入 22，服务端收到 0、1、2、10、20、22，返回 2。
// 【解析】这道题目依旧是按照解决代码问题的方法论的步骤进行分析。
// 先看一下复杂度。显然，这里的问题定位就是个查找问题。对于累积的客户端输入，查找其中位数。中位数的定义是，一组数字按照从小到大排列后，位于
// 中间位置的那个数字。
// 根据这个定义，最简单粗暴的做法，就是对服务端接收到的数据进行排序得到有序数组，再通过 index 直接取出数组的中位数。排序选择快排的时间复杂度
// 是 O(nlogn)。
// 接下来分析一下这个查找问题。该问题有一个非常重要的特点，我们注意到，上一轮已经得到了有序的数组，那么这一轮该如何巧妙利用呢？
// 举个例子，如果采用全排序的方法，那么在第 n 次收到用户输入时，则需要对 n 个数字进行排序并输出中位数，此时服务端已经保存了这 n 个数字的
// 有序数组了。而在第 n+1 次收到用户输入时，是不需要对 n + 1 个数字整体排序的，仅仅通过插入这个数字到一个有序数组中就可以完成排序。显然，
// 利用这个性质后，时间复杂度可以降低到 O(n)。
// 接着，我们从数据的操作层面来看，是否仍然有优化的空间。对于这个问题，其目标是输出中位数。只要你能在 n 个数字中，找到比 x 小的 n/2 个
// 数字和比 x 大的 n/2 个数字，那么 x 就是最终需要返回的结果。
// 基于这个思想，可以动态的维护一个最小的 n/2 个数字的集合，和一个最大的 n/2 个数字的集合。如果数字是奇数个，我们就在左边最小的 n/2 个
// 数字集合中多存一个元素。
// 例如，当前服务端收到的数字有 0、1、2、10、20。如果用两个数据结构分别维护 0、1、2 和 10、20，那么当服务端收到 22 时，就可以根据
// 1、2、10 和 22 的大小关系，判断出中位数到底是多少了。
// 具体而言，当前的中位数是 2，额外增加一个数字之后，新的中位数只可能发生在 1、2、10 和新增的一个数字之间。不管中位数发生在哪里，都可以
// 通过一些 if-else 语句进行查找，那么时间复杂度就是 O(1)。
// 虽然这种方法对于查找中位数的时间复杂度降低到了 O(1)，但是它还需要有一些后续的处理，这主要是辅助下一次的请求。
// 例如，当前用两个数据结构分别维护着 0、1、2 和 10、20，那么新增了 22 之后，这两个数据结构如何更新。这就是原问题最核心的瓶颈了。
// 从结果来看，如果新增的数字比较小，那么就添加到左边的数据结构，并且把其中最大的 2 新增到右边，以保证二者数量相同。如果新增的数字比较大，
// 那么就放到右边的数据结构，以保证二者数量相同。在这里，可能需要的数据操作包括，查找、中间位置的新增、最后位置的删除。
// 顺着这个思路继续分析，有序环境中的查找可以采用二分查找，时间复杂度是 O(logn)。最后位置的删除，并不牵涉到数据的挪移，时间复杂度是 O(1)。
// 中间位置的新增就麻烦了，它需要对数据进行挪移，时间复杂度是 O(n)。如果要降低它的复杂度就需要用一些其他手段了。
// 在这个问题中，有一个非常重要的信息，那就是题目只要中位数，而中位数左边和右边是否有序不重要。于是，我们需要用到这样的数据结构，大顶堆和小顶堆。
// 大顶堆是一棵完全二叉树，它的性质是，父节点的数值比子节点的数值大；
// 小顶堆的性质与此相反，父节点的数值比子节点的数值小。
// 有了这两个堆之后，我们的操作步骤就是，将中位数左边的数据都保存在大顶堆中，中位数右边的数据都保存在小顶堆中。同时，还要保证两个堆保存的数据
// 个数相等或只差一个。这样，当有了一个新的数据插入时，插入数据的时间复杂度是 O(logn)。而插入后的中位数，肯定在大顶堆的堆顶元素上，因此，
// 找到中位数的时间复杂度就是 O(1)。
/**
 * initialize your data structure here.
 */
const MedianFinder = function () {
  this.maxHeap = new Heap(Heap.maxComparator);
  this.minHeap = new Heap(Heap.minComparator);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size - this.maxHeap.size > 1) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size > this.minHeap.size) {
    return this.maxHeap.peek();
  } else if (this.maxHeap.size < this.minHeap.size) {
    return this.minHeap.peek();
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0,
      length = this.values.length;

    while (true) {
      let left = null,
        right = null,
        swap = null,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.values[index]))
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;

      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}

/**
 *  Min Comparator
 */
Heap.minComparator = (a, b) => {
  return a - b;
};

/**
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => {
  return b - a;
};
