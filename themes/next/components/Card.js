/**
 * 卡片组件
 * @param {*} param0
 * @returns
 */
const Card = (props) => {
  const { children, headerSlot, className = '' } = props;

  // 定义内联样式以实现苹果风格的圆角和阴影
  const cardStyle = {
    borderRadius: '20px', // 圆角
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 轻微阴影
    transition: 'box-shadow 0.3s ease', // 阴影过渡效果
  };
  // 根据传入的 className 判断是否为暗色模式
  const isDarkMode = className.includes('dark');

  // 针对暗色模式的背景色
  const sectionStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff', // 暗色或光色背景
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)', // 如果需要在section上也加阴影
    padding: '2rem 0.5rem', // 保留原有的 padding 设置
    transition: 'box-shadow 0.3s ease' // 一致的阴影过渡效果
  };

  return (
        <div className={`w-full ${className}`} style={cardStyle}>
            {headerSlot && <div>{headerSlot}</div>}
            <section style={sectionStyle}>
                {children}
            </section>
        </div>
  );
};

export default Card;
