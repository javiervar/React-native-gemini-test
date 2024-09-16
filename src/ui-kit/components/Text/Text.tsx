import { Text as NBText, type ITextProps } from 'native-base';

export enum TextSizes {
  TITLE = 24,
  SUBTITLE = 18,
  PARAGRAFH = 15,
  DEFAULT = 15,
}

interface ITextProps_E extends ITextProps {
  textSize?: TextSizes;
}

export const Text = (props: ITextProps_E): React.JSX.Element => {
  return (
    <NBText fontSize={props.textSize ?? TextSizes.DEFAULT} {...props}>
      {props.children}
    </NBText>
  );
};
