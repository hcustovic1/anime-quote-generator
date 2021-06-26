export const get = async () => {
  const res = await fetch('https://animechan.vercel.app/api/random');
  return res.json();
};

const actions = { get };
export default actions;
