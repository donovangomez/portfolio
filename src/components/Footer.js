import React from "react"
import { Flex, Text, Box, IconButton, Link } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Flex as="footer"  width="100%" justifyContent="space-around" alignItems="center" p={5}>
      <Text as="h3"> &copy; Donovan Gomez 2021</Text>
      <Text as="p">
        Built with{" "}
        <Link
          textDecor="underline"
          href="https://www.gatsbyjs.com/"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          GatsbyJS
        </Link>{" "}
        and
        <Link
          href="https://chakra-ui.com/"
          textDecor="underline"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Chakra UI
        </Link>
        . Deployed on
        <Link
          href="https://www.netlify.com/"
          textDecor="underline"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </Link>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </Text>
    </Flex>
  )
}
