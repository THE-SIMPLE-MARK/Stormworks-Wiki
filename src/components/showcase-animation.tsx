import {
	Box,
	BoxProps,
	Flex,
	Image,
	SkeletonText,
	SkeletonTextProps
} from '@chakra-ui/react'

function SolidSkeletontext(props: SkeletonTextProps) {
	return (
		<SkeletonText
			startColor="whiteAlpha.800"
			endColor="whiteAlpha.800"
			mt="30px"
			noOfLines={10}
			spacing="4"
			{...props}
		/>
	)
}

function ShowcaseAnimation(props: BoxProps) {
	return (
		<Box p="4" minH="600px" bg="teal.500" borderRadius="lg" {...props}>
			<Flex flexDir="row">
{/* 				<Image
					src="/placeholder.png"
					w="425px"
					h="425px"
					alt="Animation of a cube spinning"
				/> */}
				<video width="425px" height="425px" autoPlay muted loop>
					<source src="/cube-spinning-anim.webm" type="video/webm"/>
				</video>
				<Flex pl="4" w="full" flexDir="column">
					<SolidSkeletontext mt="20px" noOfLines={5} spacing="4"/>
					<SolidSkeletontext mt="30px" noOfLines={10} spacing="4"/>
				</Flex>
			</Flex>
		<SolidSkeletontext mt="20px" noOfLines={5} spacing="4"/>
		</Box>
	)
}

export default ShowcaseAnimation;