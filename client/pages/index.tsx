import { VerificationMessage } from "components/VerificationMessage"
import type { NextPage } from "next"

import * as React from "react"
import UploadIcon from "/assets/icons/upload.svg"
import { Heading, Icon, Text, VStack } from "@chakra-ui/react"
import { Page } from "components/Page"

const Home: NextPage = () => {
  // File counter
  const [count] = React.useState(420)

  return <Page>
      <VStack 
          h="100vh"
          justifyContent="center"
          textAlign="center">
              <Heading
                  bgGradient="linear(to-r, primary.400, primary.300)"
                  bgClip="text"
                  fontSize="6xl">
                  {process.env.NEXT_PUBLIC_APP_NAME}</Heading>
          <Text fontSize="xl">{process.env.NEXT_PUBLIC_APP_DESCRIPTION}</Text>
          <Text fontSize="2xl">{count} <Icon as={UploadIcon}/></Text>
      </VStack>
  </Page>
}

export default Home
