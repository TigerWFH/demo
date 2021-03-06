/*
	实现一些排序算法，基本的排序方法有：
	1、选择排序：选择剩余元素中最小（最大）的元素放置到初始选择集合中（空)
	2、冒泡排序：两两比较，大数冒泡
	3、插入排序：设定一个初始已排序的集合（一般选择一个元素），从剩余的集合中将各个元素以此插入到初始集合中的正确位置
	4、快速排序：选取锚点，划分小于，大于两个集合，递归处理子集合
	5、归并排序：中分两个结合，分别归并排序，然后合并两个有序结合；递归进行
	6、基数排序：逐位排序
	7、希尔排序：插入排序+步长改进
	8、堆排序
	9、桶排序
*/

class Sorts {
	constructor() { }

	/*
	*	选择排序：首先扫描整个列表，在n个元素找出最小的元素并和第一个元素交换，将最小的元素放到它在有序表中的最终位置上。
	*					然后从第二个位置开始扫描，在剩下的n-1个元素中找到最小的元素并和第二个元素交换，将第2小的元素放到它在有序表中的最终位置上。
	*					依次类推，直到第n-1个元素中需找最小元素完成排序。
	*					时间效率：O(n^2)，键的交换次数是O(n)
	*					23,67,12,11,56
	*					11,67,12,23,56
	*					11,12,67,23,56
	*					11,12,23,67,56
	*					11,12,23,56,67
	*/
	selectionSort(data) {
		// if (!data.isArray()) {
		// 	console.log("please make the param right type:Array");
		// 	return;
		// }
		let length = data.length;
		// 默认最小值是第一个元素
		let min = 0;
		for (let i = 0; i < length - 1; i++) {
			min = i;
			for (let j = i + 1; j < length; j++) {
				if (data[min] > data[j]) {
					min = j;
				}
			}
			if (min !== i) {
				let tmp = data[i];
				data[i] = data[min];
				data[min] = tmp;
			}
		}
	}

	selectionSort2(data) {
		let length = data.length;
		for (let i = 0; i < length; i++) {
			for (let j = i + 1; j < length; j++) {
				if (data[i] > data[j]) {
					let tmp = data[i];
					data[i] = data[j];
					data[j] = tmp;
				}
			}
		}
	}
	/*
	*	冒泡排序:比较相邻元素，并依据条件交换位置
	*					时间效率:O(n^2)，交换次数分情况了
	*					第一轮：
	*						23,67,12,11,56--->比较23和67，位置不变
	*						23,67,12,11,56--->比较67和12，交换位置
	*						23,12,67,11,56--->比较67和11，交换位置
	*						23,12,11,67,56--->比较67和56，交换位置
	*						23,12,11,56,67--->第一轮结束，确定了67的位置
	*					第二轮:
	*						23,12,11,56,67--->比较23和12，交换位置
	*						12,23,11,56,67--->比较23和11，交换位置
	*						12,11,23,56,67--->比较23和56，位置不变，确定56的位置，第二轮结束
	*					第三轮：
	*						12,11,23,56,67--->比较12和11，交换位置
	*						11,12,23,56,67--->比较12和23，位置不变，确定23的位置，第三轮结束
	*					第四轮：
	*						11,12,23,56,67--->比较11和12，位置不变，确定12，11的位置，第四轮结束
	*					最终确定排序结果（n个数，比较n-1轮）
	*/
	bubbleSort(data) {
		let length = data.length;
		for (let i = 0; i < length - 1; i++) {
			for (let j = 0; j < length - 1 - i; j++) {
				if (data[j] > data[j + 1]) {
					let tmp = data[j];
					data[j] = data[j + 1];
					data[j + 1] = tmp;
				}
			} console.log("data--->", data);
		}
	}

	/* 插入排序 */ 
	insertionSort(_target) {
		// 引用，依然会改变原对象
		let target = _target;
		if (Array.isArray(target)) {
			if (target.length <= 1) {
				return target;
			}
			let j = 1;
			while (j < target.length) {
				let key = target[j];
				let i = j - 1;
				while (i >= 0 && i < target.length) {
					if (target[i] > key) {
						target[i + 1] = target[i];
						target[i] = key;
					}
					i--;
				}
				j++;
			}
	
			return target;
		}
	
	
		return null;
	}
}

let test = new Sorts();
let data = [89, 45, 68, 90, 29, 34, 17];
console.log("origin--->", data);
// selectionSort
test.selectionSort(data);
console.log("selectionSort--->", data);
// bubbleSort
data = [89, 45, 68, 90, 29, 34, 17];
test.bubbleSort(data);
console.log("bubbleSort--->", data)