import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'black' | 'white';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = 'black',
}) => {
  const colors = {
    black: ['#36405990', '#364059'],
    white: ['#ffffff90', '#000'],
  };
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 font-HavalMittel-regular text-[#ddd] text-[14px] leading-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-[14px] leading-4 font-HavalMittel-regular"
          >
            {index > 0 && (
              <span
                className={`mx-2 text-[${colors[variant][1]}] text-[16px] leading-4`}
              >
                /
              </span>
            )}
            <div>
              <p
                className={
                  index === items.length - 1
                    ? `text-[${colors[variant][1]}]`
                    : `text-[${colors[variant][0]}]`
                }
              >
                {item.label}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
