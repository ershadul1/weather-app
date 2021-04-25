const formatDate = (date) => {
  const newDate = new Date(date);
  const arr = newDate.toString().split(' ');
  const res = `${arr[2]} ${arr[1]} ${arr[3].substr(2, 3)}`;
  return res;
};

export default formatDate;
