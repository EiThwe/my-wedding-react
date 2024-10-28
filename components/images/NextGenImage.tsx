"use client";

import Image from "next/image";
import { CSSProperties, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type MyImageProps = React.ComponentProps<typeof Image> & {
  wrapperClassName?: string;
  sizes?: string;
  mobileSrc?: string;
  enableScale?: boolean;
  wraperStyle?: CSSProperties;
};

const NextGenImage = forwardRef<HTMLImageElement, MyImageProps>(
  (
    {
      src,
      alt,
      className,
      wrapperClassName,
      wraperStyle,
      enableScale,
      sizes,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={twMerge(
          "relative w-full h-full overflow-hidden",
          wrapperClassName
        )}
        style={wraperStyle}
      >
        <Image
          ref={ref}
          src={src ?? ""}
          alt={alt}
          fill={!(props.width && props.height)}
          sizes={
            sizes || "(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
          }
          className={twMerge(
            "object-cover size-full h-full duration-300",
            enableScale && "hover:scale-105",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NextGenImage.displayName = "NextGenImage";

export default NextGenImage;
