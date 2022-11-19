import { HStack, Divider } from '@chakra-ui/react'

const FrontmatterFooter = ({ children }) => {
	return (
		<>
			<HStack>
				{children}
			</HStack>
			<Divider my={5} />
		</>
	)
}

export default FrontmatterFooter;