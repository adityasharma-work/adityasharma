import * as React from "react";
import { cn } from "@/lib/utils";
import Typography from "./typography";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-gray-200 px-5 py-3",
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
