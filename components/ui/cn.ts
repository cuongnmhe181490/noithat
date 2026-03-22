export type ClassValue = string | number | null | undefined | false | ClassValue[];

export function cn(...values: ClassValue[]) {
  const classes: string[] = [];

  const walk = (value: ClassValue): void => {
    if (!value) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    classes.push(String(value));
  };

  values.forEach(walk);
  return classes.join(" ");
}
