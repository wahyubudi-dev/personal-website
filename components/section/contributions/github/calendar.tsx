"use client";

import { convertDate } from "@/common/lib/dateFormat";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Weeks {
  firstDay: string;
  contributionDays: Contribution[];
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: Weeks[];
    months: Month[];
    colors: string[];
  };
}

export default function Calendar({ data }: CalendarProps) {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  return (
    <>
      <div className="relative flex flex-col overflow-scroll">
        <ul className="flex justify-start gap-[3px] text-xs dark:text-neutral-400">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-start gap-[3px]">
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 && contribution.color;

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <motion.span
                    key={contribution.date}
                    initial="initial"
                    animate="animate"
                    variants={{
                      initial: { opacity: 0, translateY: -20 },
                      animate: {
                        opacity: 1,
                        translateY: 0,
                        transition: { delay: getRandomDelayAnimate },
                      },
                    }}
                    className="my-[2px] block h-[12px] w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800"
                    style={backgroundColor ? { backgroundColor } : undefined}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: convertDate(contribution.date),
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="dark:text-neutral-400">Less</span>
          <ul className="flex gap-1">
            <motion.li className="h-[10px] w-[10px] rounded-sm bg-neutral-300 dark:bg-neutral-800" />
            {contributionColors.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className="h-[10px] w-[10px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
            "rounded border-[1px] border-stone-50 bg-white shadow px-2 py-1 text-xs dark:bg-neutral-700 dark:border-neutral-600"
          )}
        >
          <b className="font-semibold">{selectContribution?.count}</b>{" "}
          contributions on{" "}
          <b className="font-semibold">{selectContribution?.date}</b>
        </div>
      </div>
    </>
  );
}
