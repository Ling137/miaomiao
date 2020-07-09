import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function() {
	var defaults = {
		//默认值
		title: '',
		content: '',
		cancel: '',
		confirm: '',
		handleCancel: null,
		handleConfirm: null,
    }
    var MyComponent = Vue.extend(MessageBox)
	return function(opts) {
		//配置参数
		for (var attr in opts) {
			defaults[attr] = opts[attr]
		}
		
		var vm = new MyComponent({
			el: document.createElement('div'),
			data: {
				title: defaults.title,
				content: defaults.content,
				cancel: defaults.cancel,
				confirm: defaults.confirm,
			},
			methods: {
				handleCancel() {
					defaults.handleCancel && defaults.handleCancel.call(this)
					document.body.removeChild(vm.$el) //删除弹窗
				},
				handleConfirm() {
					defaults.handleConfirm && defaults.handleConfirm.call(this) //改变this指向问题
					document.body.removeChild(vm.$el) //删除弹窗
				},
			},
		})
		document.body.appendChild(vm.$el)
	}
})()//闭包
