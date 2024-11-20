import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        // 'Full stack developer',
        // 1000,
        'Coder',
        1000
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a6] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;