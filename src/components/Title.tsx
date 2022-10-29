import { Heading, IHeadingProps } from "native-base";

type Props = IHeadingProps & {
  title: string;
};

export function Title({ title, ...rest }: Props) {
  return (
    <Heading alignSelf="center" color="text" {...rest}>
      {title}
    </Heading>
  );
}
