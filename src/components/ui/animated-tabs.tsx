import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export interface TabItem {
  label: React.ReactNode;
  content: React.ReactNode;
}

const tabsListVariants = cva(
  "relative inline-flex items-center",
  {
    variants: {
      variant: {
        underline: "gap-0 border-b border-border",
        pills: "gap-1 rounded-lg bg-muted p-1",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

const tabsTriggerVariants = cva(
  "relative z-10 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline:
          "bg-transparent px-4 py-2 text-muted-foreground data-[state=active]:text-foreground",
        pills:
          "rounded-md px-3 py-1.5 text-muted-foreground data-[state=active]:text-foreground",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

const indicatorVariants = cva(
  "absolute transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        underline: "bottom-0 h-0.5 bg-primary",
        pills: "inset-y-1 rounded-md bg-background shadow-sm",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

export interface AnimatedTabsProps
  extends VariantProps<typeof tabsListVariants> {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  contentClassName?: string;
}

function AnimatedTabs({
  items,
  variant = "underline",
  defaultValue,
  value,
  onValueChange,
  className,
  listClassName,
  contentClassName,
}: AnimatedTabsProps) {
  const isControlled = value !== undefined;
  const [internalTab, setInternalTab] = React.useState(
    defaultValue ?? "0",
  );
  const activeTab = isControlled ? value : internalTab;

  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({ opacity: 0 });
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  const tabRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const didMeasure = React.useRef(false);

  const updateIndicator = React.useCallback(() => {
    const trigger = tabRefs.current.get(activeTab);
    const list = tabsListRef.current;
    if (!trigger || !list) return;

    const listRect = list.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();

    setIndicatorStyle({
      left: triggerRect.left - listRect.left,
      width: triggerRect.width,
      opacity: 1,
      ...(didMeasure.current ? {} : { transition: "none" }),
    });
    didMeasure.current = true;
  }, [activeTab]);

  React.useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  React.useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicator]);

  const handleValueChange = (val: string) => {
    if (!isControlled) setInternalTab(val);
    onValueChange?.(val);
  };

  return (
    <TabsPrimitive.Root
      value={activeTab}
      onValueChange={handleValueChange}
      className={cn("w-full", className)}
    >
      <TabsPrimitive.List
        ref={tabsListRef}
        className={cn(tabsListVariants({ variant }), listClassName)}
      >
        {items.map((item, index) => (
          <TabsPrimitive.Trigger
            key={index}
            ref={(el) => {
              if (el) tabRefs.current.set(String(index), el);
              else tabRefs.current.delete(String(index));
            }}
            value={String(index)}
            className={cn(tabsTriggerVariants({ variant }))}
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
        <div
          aria-hidden
          className={cn(indicatorVariants({ variant }))}
          style={indicatorStyle}
        />
      </TabsPrimitive.List>

      <div className="relative mt-4">
        {items.map((item, index) => (
          <TabsPrimitive.Content
            key={index}
            value={String(index)}
            forceMount
            className={cn(
              "outline-none transition-opacity duration-300 ease-in-out",
              "data-[state=inactive]:pointer-events-none data-[state=inactive]:absolute data-[state=inactive]:inset-x-0 data-[state=inactive]:top-0 data-[state=inactive]:opacity-0",
              "data-[state=active]:opacity-100",
              contentClassName,
            )}
          >
            {item.content}
          </TabsPrimitive.Content>
        ))}
      </div>
    </TabsPrimitive.Root>
  );
}

AnimatedTabs.displayName = "AnimatedTabs";

export { AnimatedTabs };
