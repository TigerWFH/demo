/**
 *                     变化驱动设计
 *          一处变化导致多处修改，说明重复性代码过多，消除重复
 *          多处变化导致一处修改，说明变化分离不彻底，正交性差，关注点分离
 *          消除不必要的依赖，
 *          消除不稳定的依赖
 * ******************  软件设计的目标：**********************
 * ***                   1、实现功能                     ***
 * ***                   2、易于重用                     ***
 * ***                   3、易于理解                     ***
 * ***                   4、没有冗余                     ***
 * ********************************************************
 * 
 * *****************  最高层原则：高内聚，低耦合  *************
 * 
 * *****************  正交设计原则：
 * *****************   1、消除重复
 * *****************   2、分离关注点（分离变化因子，单独控制，互不影响；感觉这一条自身就是正交设计原则）
 * *****************   3、最小依赖原则：绝不包含不必要的东西（头文件、可替代的用户操作，例如foreach代替for循环）
 * *****************   4、向稳定的方向依赖
 * 
 * ********************************************************
 * 需求1：存在一个学生列表，查找一个年龄等于18岁的学生
 *
 * 需求2：在1的基础上，查找一个名字为monkey的学生
 *       (需求的第一次变更：查询规则变化)
 * 需求3：在2的基础上，增加一个老师列表，查找第一个女老师
 *       (需求的第二次变更：查询对象的变更或者说查询类型的变更)
 * 需求4：查找年龄不等于18岁的女生
 *       （需求的第三次变更：查询规则的再次变更）
 */ 

//  first coding
class Student{
    private int age;
    Student(int age){
        this.age = age;
    }
    public getAge() {
        return this.age;
    }
}

class Computer {
    public static Student findByAge(Student[] students) {
        for (Student s : students) {

        }
        for (int i = 0; i < students.length; i++) {
            if (students[i].getAge() == 18) {
                return students[i];
            }
        }

        return null;
    }
}