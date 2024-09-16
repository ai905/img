function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}



const types = {
  isInvisibleWidget: false,
  type: "JINDU_WIDGET ",
  icon: "https://static.codemao.cn/coco/player/unstable/B1MgE5P2i.image/jpeg?hash=Fp24VrakEAhR3pgVxqV7iEy0zwBx",
  title: "进度条",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 300,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 35,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    this.zheng=props.zheng;
  this.color=props.color;
  this.bg_color=props.bg_color;

  }
  render() {
    return(
      React.createElement("div", {  id: 'votebar',
      style: {  display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: "100%",
      },
    }, [React.createElement("div", {  style: {  width: "100%",
          height: "15px",
          borderRadius: "15px",
          background: (this.bg_color),
          margin: '5px 0 5px 0',
        },
      }, [React.createElement("div", {  id: 'bar',
          style: {  width: (String(this.zheng) + '%'),
            height: 'inherit',
            borderRadius: "15px",
            background: (this.color),
            transition: 'width 0.2s linear',
          },
        }, [React.createElement("h6", {}, [String(this.zheng) + '%']),]),]),])
  );

  }
}

types['methods'].push({
    key: 'zheng_jia',
    label: '增加进度',
    params: [
      {
          key: 'jia',
          label: '',
          valueType: 'number',
          defaultValue: 5,
      },],


})
Widget.prototype.zheng_jia = function (jia,) {
      this.zheng = ((this.zheng) + jia);

}
types['methods'].push({
    key: 'zheng_jian',
    label: '减少进度',
    params: [
      {
          key: 'jian',
          label: '',
          valueType: 'number',
          defaultValue: 5,
      },],


})
Widget.prototype.zheng_jian = function (jian,) {
      this.zheng = ((this.zheng) - jian);

}
types['methods'].push({
    key: 'zheng_she',
    label: '设置进度',
    params: [
      {
          key: 'zhi',
          label: '',
          valueType: 'number',
          defaultValue: 5,
      },],


})
Widget.prototype.zheng_she = function (zhi,) {
      this.zheng = zhi;

}
types['methods'].push({
    key: 'zheng_ji',
    label: '计算进度',
    params: [
      {
          key: 'zong',
          label: '总量',
          valueType: 'number',
          defaultValue: 10,
      },
      {
          key: 'dangqian',
          label: '当前量',
          valueType: 'number',
          defaultValue: 5,
      },],


})
Widget.prototype.zheng_ji = function (zong,dangqian,) {
      this.zheng = ((dangqian / zong) * 100);

}
types['properties'].push({
    key: 'zheng',
    label: '正方（进度）',
    valueType: 'number',
    defaultValue: 10,

})

types['properties'].push({
    key: 'color',
    label: '颜色',
    valueType: 'color',
    defaultValue: (colourRandom()),

})

types['properties'].push({
    key: 'bg_color',
    label: '底色',
    valueType: 'color',
    defaultValue: '#ffffff',

})

exports.types = types;
exports.widget = Widget;

'#ffffff';
