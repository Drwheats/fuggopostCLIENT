import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './Components/Notifications';
import Options from './Components/Options';
import VideoPlayer from './Components/VideoPlayer';

function Bomgl() {
    return (
        <Box>
            <Container maxW="1200px" mt="8">
                <Heading as="h2" size="2xl"> Video Chat App </Heading>
                <VideoPlayer />
                <Options />
                <Notifications />
            </Container>
        </Box>
    );
}
export default Bomgl;