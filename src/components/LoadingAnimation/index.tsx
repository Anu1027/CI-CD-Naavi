import { memo } from "react";
import { motion } from "framer-motion";
import classNames from "./loadingAnimation.module.scss";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#ffffff00",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#009EFCFF",
  },
};

function LoadingAnimation({
  className,
  classNameSvg,
}: {
  className?: string;
  classNameSvg?: string;
}) {
  return (
    <div className={`${classNames.loadingAnimation} ${className}`}>
      <motion.svg
        className={`${classNames.logo} ${classNameSvg}`}
        fill="none"
        viewBox="0 0 42.994 19.986"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut", repeat: Infinity },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity },
          }}
          d="m23.312 11.13c-0.1842 0.1235-0.3608 0.2578-0.529 0.402-1.4017 1.3843-2.7533 2.8141-4.2078 4.1475-1.5044 1.3876-3.2851 2.4484-5.2279 3.1142-5.0155 1.7072-9.9715-0.4315-12.031-4.8523-1.2502-2.6801-1.0377-5.4164 0.37884-7.9987 1.3706-2.4992 3.5002-4.1139 6.2927-4.8242 2.7506-0.69816 5.3146-0.17957 7.7202 1.2449 1.587 0.93803 2.9657 2.1441 4.3376 3.4747-0.4965 0.45561-0.9768 0.89783-1.4598 1.34-0.3951 0.36047-0.7996 0.70888-1.1839 1.0801-0.2354 0.2278-0.3869 0.20502-0.6467-0.00804-1.0608-0.86969-2.0863-1.8117-3.2472-2.5246-1.7792-1.0894-3.6869-1.2502-5.6162-0.25862-1.9727 1.0131-3.1119 3.4841-2.752 5.6282 0.58584 3.4747 4.2443 5.2811 7.7215 3.6838 1.9645-0.9032 3.5705-2.2781 5.0845-3.7763 1.4626-1.4446 2.8764-2.936 4.3701-4.3471 1.5276-1.4432 3.0267-2.9481 4.7098-4.1903 5.7042-4.2318 13.8-1.3668 15.274 5.6818 0.5016 2.4243 0.0207 4.9467-1.3388 7.023s-3.4887 3.54-5.9281 4.0752c-5.209 1.1498-10.02-1.9122-11.376-6.719-0.1178-0.4194-0.2084-0.8415-0.3451-1.3963zm4.0468-1.206c-0.1353 2.8583 2.3488 5.5317 5.4931 5.5384 1.1021 0.0138 2.1834-0.2969 3.1069-0.8927s1.6475-1.4498 2.0802-2.4537c0.4327-1.004 0.5546-2.1126 0.3502-3.1852-0.2043-1.0726-0.7258-2.061-1.4981-2.8397-0.7723-0.7787-1.7608-1.3127-2.84-1.5342s-2.2005-0.12053-3.2216 0.29008c-1.0212 0.41061-1.8962 1.1124-2.5141 2.0162-0.6179 0.90389-0.9509 1.9692-0.9566 3.0607z"
          fill="#009efc"
          stroke="#009efc"
        />
      </motion.svg>
    </div>
  );
}

export default memo(LoadingAnimation);
