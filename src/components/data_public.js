/**
 * name {String} 字段名
 * type {String} 类型: 1.单选框; 2.多选加其他; 3.文本输入 
 * required {Boolean} 是否必输
 * desc {String} 问题描述
 * options {Array} radio或checkbox选框配置, 可查vant足见描述
 */
export default [
  {
    name: 'q1',
    type: 1,
    required: true,
    desc: '您对本次培训的整体满意度是：',
    options: [
      {
        name: 1,
        label: '1分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 5,
        label: '5分'
      }
    ]
  },
  {
    name: 'q2',
    type: 1,
    required: true,
    desc: '课程是否与您的培训需求匹配？',
    options: [
      {
        name: 1,
        label: '1分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 5,
        label: '5分'
      }
    ]
  },
  {
    name: 'q3',
    type: 1,
    required: true,
    desc: '课程是否便于您的理解和掌握？',
    options: [
      {
        name: 1,
        label: '1分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 5,
        label: '5分'
      }
    ]
  },
  {
    name: 'q4',
    type: 1,
    required: true,
    desc: '您对课程助教服务的满意度是：',
    options: [
      {
        name: 1,
        label: '1分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 5,
        label: '5分'
      }
    ]
  },
  {
    name: 'q5',
    type: 3,
    required: false,
    desc: '您参加本次培训的收获是：',
  },
  {
    name: 'q6',
    type: 3,
    required: false,
    desc: '您对课程或讲师的建议是：',
  },
  {
    name: 'q7',
    type: 2,
    required: false,
    desc: '您还希望接受哪些培训：（可多选）',
    options: [
      {
        name: '人力资源',
        label: '人力资源'
      }, {
        name: '管理领导能力',
        label: '管理领导能力        '
      }, {
        name: '个人职业技能',
        label: '个人职业技能'
      }, {
        name: '财务',
        label: '财务'
      }, {
        name: '项目管理',
        label: '项目管理'
      }, {
        name: '销售',
        label: '销售'
      }, {
        name: '生产管理',
        label: '生产管理'
      }, {
        name: '供应链及物流',
        label: '供应链及物流'
      }, {
        name: '质量管理',
        label: '质量管理'
      }
    ]
  },
];