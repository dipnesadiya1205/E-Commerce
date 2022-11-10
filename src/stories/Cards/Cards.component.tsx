import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledTypography,
} from './Cards.styled';

interface CardProps {
  height: string;
  width: string;
  image: string;
  heading: string;
  price?: string;
  content: string;
  imgHeight?: string;
  handleHeadingClick?: () => void;
}

export const ItemCard = ({
  height,
  width,
  image,
  heading,
  price,
  content,
  imgHeight = '140px',
  handleHeadingClick,
}: CardProps) => {
  return (
    <StyledCard sx={{ height, maxWidth: width }}>
      <StyledCardMedia
        height={imgHeight}
        width={width}
        image={image}
        alt='Image'
        component='img'
      />
      <StyledCardContent>
        <StyledTypography component='div' variant='h4' onClick={handleHeadingClick}>
          {heading.toUpperCase()}
        </StyledTypography>
        {price && (
          <StyledTypography variant='h6' color='text.secondary'>
            $ {price}
          </StyledTypography>
        )}
        <StyledTypography variant='body2' color='text.secondary'>
          {content}
        </StyledTypography>
      </StyledCardContent>
    </StyledCard>
  );
};
