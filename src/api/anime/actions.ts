export const get = async () => {
  const res = await fetch('https://animechan.vercel.app/api/random');
  return res.json();
};

export default {
  get
};
