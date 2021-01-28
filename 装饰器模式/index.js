/*
 * @Author: your name
 * @Date: 2021-01-27 18:49:48
 * @LastEditTime: 2021-01-27 18:50:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Design-Patterns/装饰器模式/index.js
 */
function funcDecorator(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = () => {
        console.log('我是装饰器逻辑');
        return originalMethod.apply(this, arguments);
    }

    return descriptor;
}

class Button {
    @funcDecorator
    // onClick = () => {
    //     console.log('我是原有逻辑');
    // }
    onClick() {
        console.log('我是原有的')
    }
}

const btn = new Button();
btn.onClick();