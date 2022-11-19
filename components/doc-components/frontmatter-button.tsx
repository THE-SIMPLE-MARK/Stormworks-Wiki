import {
  Button,
  ButtonProps,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

type FrontmatterButtonProps = ButtonProps & {
  icon?: React.ElementType
  href: string
  iconSize?: string
  iconColor?: string
}

const FrontmatterButton = (props: FrontmatterButtonProps) => {
  const { icon: BtnIcon, href, children, iconSize, iconColor, ...rest } = props
  return (
    <Button
      as={Link}
      href={href}
      isExternal
      size='sm'
      fontWeight='normal'
      variant='outline'
      color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      _hover={{
        color: useColorModeValue('gray.700', 'whiteAlpha.900'),
        boxShadow: 'sm',
        transform: 'translateY(-2px)',
        textDecor: 'none',
      }}
      leftIcon={BtnIcon ? <BtnIcon /> : null}
      sx={{
        '& span': {
          width: iconSize,
        },
        '& svg': {
          color: iconColor,
          width: 'full',
          height: 'auto',
        },
      }}
      {...rest}>
      {children}
    </Button>
  )
}

export default FrontmatterButton;