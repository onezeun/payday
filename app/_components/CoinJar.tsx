import { motion } from 'framer-motion';

const CoinJar = () => {
  return (
    <div className="m-auto scale-150">
      <img className="absolute top-0 left-0 w-full h-auto" alt="병" src="/coin_jar_001.png" />
      <motion.img
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 w-full h-auto left-3"
        alt="베경"
        src="/coin_effect_001.png"
      />
      <motion.img
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="베경"
        src="/coin_effect_002.png"
      />
      <motion.img
        animate={{ y: [20, 0, 20] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_001.png"
      />
      <motion.img
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_002.png"
      />
      <motion.img
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_003.png"
      />
      <motion.img
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_004.png"
      />
      <motion.img
        animate={{ y: [5, 0, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_005.png"
      />
      <motion.img
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/coin_006.png"
      />
      <img className="absolute top-0 w-full h-auto -left-3" alt="동전" src="/coin_tower_002.png" />
      <img className="absolute top-0 left-0 w-full h-auto" alt="동전" src="/coin_tower_001.png" />
      <motion.img
        animate={{ y: [-2, 0, -2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-auto"
        alt="동전"
        src="/into.png"
      />
      <img className="absolute top-0 left-0 w-full h-auto " alt="병" src="/coin_jar_002.png" />
    </div>
  );
};

export default CoinJar;
