const colors = ['#48FF48', '#FFFF6C', '#FF9191', '#FFB5FF', '#D9D9FF'];
const getRoleColor = (index: number): string => colors[index % 5];
export default getRoleColor;
